import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <section className="section section--placeholder">
          <div className="container">
            <span className="eyebrow">Build 01 · Foundation</span>
            <h1 className="display-title">
              Shiva Kumar
              <span className="display-title__muted"> / Software Developer</span>
            </h1>
            <p className="lead">
              The foundation is ready. The Hero and full portfolio sections
              will be implemented in the next build.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
