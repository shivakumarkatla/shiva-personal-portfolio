import Footer from "./Footer";
import Navbar from "./Navbar";
import PageMetadata from "../seo/PageMetadata";

/** Shared shell for inner pages: metadata, header, main landmark and footer. */
function PageLayout({ title, description, children }) {
  return (
    <div className="site-shell">
      <PageMetadata title={title} description={description} />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
