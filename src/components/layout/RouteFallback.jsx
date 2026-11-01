import Footer from "./Footer";
import Navbar from "./Navbar";
import "./RouteFallback.css";

/**
 * Shown while a lazily loaded page downloads: keeps the header and footer in
 * place so navigation never flashes a blank screen.
 */
export function RouteLoading() {
  return (
    <div className="site-shell">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="route-fallback">
        <div className="route-fallback__loader" role="status">
          <span className="route-fallback__spinner" aria-hidden="true" />
          <span>Loading page…</span>
        </div>
      </main>
      <Footer />
    </div>
  );
}

/** Shown when a page's code fails to load (for example, after a network drop). */
export function RouteLoadError() {
  return (
    <div className="site-shell">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="route-fallback">
        <div className="route-fallback__error" role="alert">
          <h1>This page couldn&apos;t load.</h1>
          <p>Check your connection and try again.</p>
          <div className="route-fallback__actions">
            <button type="button" className="ui-button ui-button--primary ui-button--md" onClick={() => window.location.reload()}>
              Reload page
            </button>
            <a className="ui-button ui-button--ghost ui-button--md" href="/">
              Go to the homepage
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
