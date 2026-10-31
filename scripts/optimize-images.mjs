// Generates responsive AVIF and WebP variants of every image in public/images.
//
//   npm run optimize:images
//
// - Originals are never modified or moved.
// - Variants are written to public/images/optimized/<same folders>/.
// - src/data/imageManifest.json maps each original path to its variants, so
//   components can render <picture> elements with srcset and fixed dimensions.
// - Output is deterministic for the same inputs and sharp version, so the
//   script can be re-run safely; it rebuilds the optimized folder each time.

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE_DIR = "public/images";
const OUTPUT_DIR = "public/images/optimized";
const MANIFEST_PATH = "src/data/imageManifest.json";

const WIDTHS = [480, 960, 1440, 1920];
const AVIF_OPTIONS = { quality: 55, effort: 4 };
const WEBP_OPTIONS = { quality: 78, effort: 5 };

// Extra "cover" variants: genuine screenshots cropped to their main content
// for card thumbnails. Rectangles are in source pixels.
const COVER_CROPS = {
  // Removes the n8n trial banner and icon sidebar, keeping the workflow canvas.
  "projects/ngo-audit/field-audit-workflow.png": { left: 64, top: 72, width: 1792, height: 1008 },
  "projects/smart-schedule/smart-schedule-workflow.png": { left: 64, top: 72, width: 1792, height: 1008 },
};

async function listImages(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return fullPath === path.normalize(OUTPUT_DIR) ? [] : listImages(fullPath);
      }
      return /\.(png|jpe?g)$/i.test(entry.name) ? [fullPath] : [];
    }),
  );
  return files.flat();
}

// "field-submission.png.png" -> "field-submission"
function cleanName(fileName) {
  return fileName.replace(/(\.(png|jpe?g))+$/i, "").replace(/\s+/g, "-").toLowerCase();
}

function toUrl(filePath) {
  return "/" + path.relative("public", filePath).split(path.sep).join("/");
}

async function writeVariants(pipelineFactory, sourceWidth, outputBase) {
  const widths = WIDTHS.filter((width) => width < sourceWidth);
  widths.push(Math.min(sourceWidth, WIDTHS.at(-1)));

  const variants = { avif: [], webp: [] };

  for (const width of [...new Set(widths)]) {
    for (const format of ["avif", "webp"]) {
      const outputPath = `${outputBase}-${width}.${format}`;
      const options = format === "avif" ? AVIF_OPTIONS : WEBP_OPTIONS;
      await pipelineFactory().resize({ width, withoutEnlargement: true })[format](options).toFile(outputPath);
      variants[format].push(`${toUrl(outputPath)} ${width}w`);
    }
  }

  return {
    avif: variants.avif.join(", "),
    webp: variants.webp.join(", "),
    largestWebp: variants.webp.at(-1).split(" ")[0],
  };
}

async function main() {
  await fs.rm(OUTPUT_DIR, { recursive: true, force: true });

  const manifest = {};
  const images = (await listImages(SOURCE_DIR)).sort();

  for (const sourcePath of images) {
    const relativePath = path.relative(SOURCE_DIR, sourcePath).split(path.sep).join("/");
    const outputFolder = path.join(OUTPUT_DIR, path.dirname(relativePath));
    const baseName = cleanName(path.basename(sourcePath));
    await fs.mkdir(outputFolder, { recursive: true });

    const { width, height } = await sharp(sourcePath).metadata();
    const variants = await writeVariants(
      () => sharp(sourcePath),
      width,
      path.join(outputFolder, baseName),
    );

    const originalUrl = toUrl(sourcePath);
    manifest[originalUrl] = {
      width,
      height,
      avif: variants.avif,
      webp: variants.webp,
      fallback: originalUrl,
    };

    const crop = COVER_CROPS[relativePath];
    if (crop) {
      const coverVariants = await writeVariants(
        () => sharp(sourcePath).extract(crop),
        crop.width,
        path.join(outputFolder, `${baseName}-cover`),
      );
      manifest[`${originalUrl}#cover`] = {
        width: crop.width,
        height: crop.height,
        avif: coverVariants.avif,
        webp: coverVariants.webp,
        fallback: coverVariants.largestWebp,
      };
    }

    console.log(`optimized ${relativePath}`);
  }

  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\n${images.length} images -> ${OUTPUT_DIR}, manifest -> ${MANIFEST_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
