import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HomeHero from "../components/home/HomeHero";
import FeaturedWork from "../components/home/FeaturedWork";
import Capabilities from "../components/home/Capabilities";
import Automation from "../components/home/Automation";
import Process from "../components/home/Process";
import ContactSection from "../components/home/ContactSection";
import PageMetadata from "../components/seo/PageMetadata";

function Home() {
  return (
    <div className="site-shell">
      <PageMetadata
        title="Software Developer & AI Automation Engineer"
        isHome
        description="Shiva Kumar builds full-stack applications, AI agents and workflow automations. Open to software development roles and freelance AI automation projects."
      />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HomeHero />
        <FeaturedWork />
        <Capabilities />
        <Automation />
        <Process />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
