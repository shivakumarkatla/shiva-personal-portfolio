// Route-level code splitting. The homepage ships in the main bundle; every
// other page is loaded on demand and can be prefetched on navigation intent.

export const routeLoaders = {
  about: () => import("../pages/AboutPage"),
  skills: () => import("../pages/SkillsPage"),
  projects: () => import("../pages/ProjectsPage"),
  project: () => import("../pages/ProjectDetails"),
};

export function loaderForPath(pathname) {
  if (pathname === "/about") return routeLoaders.about;
  if (pathname === "/skills") return routeLoaders.skills;
  if (pathname === "/projects") return routeLoaders.projects;
  if (pathname.startsWith("/projects/")) return routeLoaders.project;
  return null;
}
