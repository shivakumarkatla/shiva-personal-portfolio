import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import PageLayout from "../components/layout/PageLayout";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import "./NotFoundPage.css";

const destinations = [
  { to: "/projects", label: "Projects", text: "Full-stack apps, AI agents and automation case studies" },
  { to: "/about", label: "About", text: "My background, journey and approach" },
  { to: "/skills", label: "Skills", text: "Technologies, linked to the projects that use them" },
  { to: "/#contact", label: "Contact", text: "Email, LinkedIn and GitHub" },
];

/** Shown for any URL that doesn't match a page. */
function NotFoundPage() {
  return (
    <PageLayout
      title="Page Not Found"
      description="This page doesn't exist. Browse Shiva Kumar's projects, skills or contact details instead."
      noindex
    >
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Page not found" }]}
        eyebrow="404"
        title="This page doesn't exist."
        lead={<p>The link may be broken, or the page may have moved. These are good places to continue:</p>}
        actions={
          <>
            <Button to="/">
              <ArrowLeft size={17} aria-hidden="true" />
              Go to the homepage
            </Button>
            <Button to="/projects" variant="ghost">
              Browse projects
            </Button>
          </>
        }
      />

      <Container className="not-found">
        <nav aria-label="Main pages">
          <ul className="not-found__links">
            {destinations.map((destination) => (
              <li key={destination.to}>
                <Link to={destination.to} className="not-found__link">
                  <span className="not-found__label">{destination.label}</span>
                  <span className="not-found__text">{destination.text}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </PageLayout>
  );
}

export default NotFoundPage;
