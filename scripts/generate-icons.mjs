// Generates raster favicons from public/favicon.svg.
//
//   npm run generate:icons
//
// Outputs (all derived from the SVG, which is the single source):
// - public/favicon.ico          16, 32 and 48 px PNG images in one ICO file
// - public/apple-touch-icon.png 180 px on the site background colour
//
// The SVG contains only vector paths (no text), so the output does not
// depend on installed fonts.

import fs from "node:fs/promises";
import sharp from "sharp";

const SOURCE = "public/favicon.svg";
const BACKGROUND = "#0a0b10";

async function renderPng(svg, size, flatten = false) {
  let image = sharp(svg, { density: 72 * (size / 64) * 2 }).resize(size, size);
  if (flatten) image = image.flatten({ background: BACKGROUND });
  return image.png({ compressionLevel: 9 }).toBuffer();
}

// ICO container holding PNG-encoded images (supported by all current browsers).
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  let offset = 6 + images.length * 16;
  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // palette colours
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += data.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((image) => image.data)]);
}

async function main() {
  const svg = await fs.readFile(SOURCE);

  const icoImages = [];
  for (const size of [16, 32, 48]) {
    icoImages.push({ size, data: await renderPng(svg, size) });
  }
  await fs.writeFile("public/favicon.ico", buildIco(icoImages));
  await fs.writeFile("public/apple-touch-icon.png", await renderPng(svg, 180, true));

  console.log("Wrote public/favicon.ico (16, 32, 48) and public/apple-touch-icon.png (180)");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
