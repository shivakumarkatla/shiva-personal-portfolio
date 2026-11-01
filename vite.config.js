import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Lazily loaded pages and the URL paths that use them (see src/lib/routes.js).
const routePages = {
  "/about": "src/pages/AboutPage.jsx",
  "/skills": "src/pages/SkillsPage.jsx",
  "/projects": "src/pages/ProjectsPage.jsx",
  "/projects/*": "src/pages/ProjectDetails.jsx",
};

/**
 * On a direct visit to an inner page, the browser would only discover that
 * page's chunk after the main bundle has downloaded and run. This injects a
 * tiny inline script that preloads the current route's JS and CSS in
 * parallel with the main bundle. The homepage preloads nothing extra.
 */
function preloadRouteChunks() {
  return {
    name: "preload-route-chunks",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html, { bundle }) {
        if (!bundle) return html;
        const chunks = Object.values(bundle).filter((output) => output.type === "chunk");
        const entry = chunks.find((chunk) => chunk.isEntry);

        const filesFor = (chunk, seen = new Set()) => {
          if (!chunk || seen.has(chunk.fileName) || chunk === entry) return [];
          seen.add(chunk.fileName);
          const css = [...(chunk.viteMetadata?.importedCss ?? [])];
          const deps = chunk.imports.flatMap((name) => filesFor(bundle[name], seen));
          return [chunk.fileName, ...css, ...deps];
        };

        const routes = {};
        for (const [path, page] of Object.entries(routePages)) {
          const chunk = chunks.find((item) => item.facadeModuleId?.replaceAll("\\", "/").endsWith(page));
          if (chunk) routes[path] = filesFor(chunk);
        }

        const script = `<script>(function(){var r=${JSON.stringify(routes)};var p=location.pathname.replace(/\\/$/,"")||"/";var f=r[p]||(p.indexOf("/projects/")===0?r["/projects/*"]:null);if(!f)return;f.forEach(function(x){var l=document.createElement("link");if(/\\.css$/.test(x)){l.rel="stylesheet"}else{l.rel="modulepreload";l.crossOrigin=""}l.href="/"+x;document.head.appendChild(l)})})();</script>`;
        return html.replace("</head>", `    ${script}\n  </head>`);
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), preloadRouteChunks()],
});
