import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { domAnimation, LazyMotion } from "motion/react";
import Home from "./pages/Home";
import RouteErrorBoundary from "./components/layout/RouteErrorBoundary";
import { RouteLoading } from "./components/layout/RouteFallback";
import ScrollToTop from "./components/layout/ScrollToTop";
import { loaderForPath, routeLoaders } from "./lib/routes";

const AboutPage = lazy(routeLoaders.about);
const SkillsPage = lazy(routeLoaders.skills);
const ProjectsPage = lazy(routeLoaders.projects);
const ProjectDetails = lazy(routeLoaders.project);

// Start downloading a page's code as soon as the visitor shows intent to open it.
function usePrefetchOnIntent() {
  useEffect(() => {
    function handleIntent(event) {
      const link = event.target.closest?.("a[href]");
      if (!link || link.origin !== window.location.origin) return;
      loaderForPath(link.pathname)?.();
    }

    const events = ["pointerover", "focusin", "touchstart"];
    events.forEach((type) => document.addEventListener(type, handleIntent, { passive: true }));
    return () => events.forEach((type) => document.removeEventListener(type, handleIntent));
  }, []);
}

function App() {
  const { pathname } = useLocation();
  usePrefetchOnIntent();

  return (
    // domAnimation covers the fade/slide and in-view animations used by Reveal;
    // `strict` flags any accidental use of the full `motion` component.
    <LazyMotion features={domAnimation} strict>
      <ScrollToTop />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      {/* Reset the boundary on navigation so one failed page doesn't stick. */}
      <RouteErrorBoundary key={pathname}>
        <Suspense fallback={<RouteLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </RouteErrorBoundary>
    </LazyMotion>
  );
}

export default App;
