import { ArrowRight } from "lucide-react";
import AboutApproach from "../components/about/AboutApproach";
import AboutDirection from "../components/about/AboutDirection";
import AboutJourney from "../components/about/AboutJourney";
import AboutPortrait from "../components/about/AboutPortrait";
import AboutToolkit from "../components/about/AboutToolkit";
import PageHero from "../components/layout/PageHero";
import PageLayout from "../components/layout/PageLayout";
import Button from "../components/ui/Button";
import ContactCta from "../components/ui/ContactCta";
import { aboutIntro } from "../data/about";

function AboutPage() {
  return (
    <PageLayout
      title="About Me"
      description="Shiva Kumar's journey from Data Science to software development and AI automation, his approach to problems, and what he's working towards."
    >
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
        eyebrow="About"
        title="Building useful software, one project at a time."
        lead={aboutIntro.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
        actions={
          <>
            <Button to="/projects">
              Explore my projects
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <Button to="/#contact" variant="ghost">
              Get in touch
            </Button>
          </>
        }
        aside={<AboutPortrait />}
      />

      <AboutJourney />
      <AboutToolkit />
      <AboutApproach />
      <AboutDirection />
      <ContactCta />
    </PageLayout>
  );
}

export default AboutPage;
