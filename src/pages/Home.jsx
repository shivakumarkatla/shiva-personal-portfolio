import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Journey from "../components/sections/Journey";
import Contact from "../components/sections/Contact";
import PageMetadata from "../components/seo/PageMetadata";

function Home() {
  return (
    <div className="site-shell">
<PageMetadata
  title="Software Developer"
  description="Shiva Kumar's portfolio featuring full-stack applications, AI-powered workflows, and automation projects."
/>
      <Navbar />
      <main>
        <Hero />
        <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
