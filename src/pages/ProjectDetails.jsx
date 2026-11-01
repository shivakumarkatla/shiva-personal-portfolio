import { useParams } from "react-router-dom";
import { ArrowLeft, CircleCheck, CircleDot, ExternalLink, Github, Lightbulb } from "lucide-react";
import ArchitectureFlow from "../components/case-study/ArchitectureFlow";
import CaseStudySection from "../components/case-study/CaseStudySection";
import ProjectFacts from "../components/case-study/ProjectFacts";
import ProjectGallery from "../components/case-study/ProjectGallery";
import ProjectPager from "../components/case-study/ProjectPager";
import PageHero from "../components/layout/PageHero";
import PageLayout from "../components/layout/PageLayout";
import Button from "../components/ui/Button";
import ContactCta from "../components/ui/ContactCta";
import Container from "../components/ui/Container";
import { caseStudiesBySlug } from "../data/caseStudies";
import { getProjectBySlug } from "../data/projects";
import "./ProjectDetails.css";

// Sections are only shown when the case study has content for them.
function buildSections(project, caseStudy) {
  const { architecture } = project;
  if (!caseStudy) return [];

  return [
    caseStudy.screenshots?.length && {
      id: "screenshots",
      nav: "Screenshots",
      eyebrow: "Screenshots",
      title: "The project in use",
      render: () => <ProjectGallery screenshots={caseStudy.screenshots} projectTitle={project.title} />,
    },
    caseStudy.problem?.length && {
      id: "problem",
      nav: "Problem",
      eyebrow: "The problem",
      title: "What needed to be solved",
      render: () => (
        <ul className="case-list">
          {caseStudy.problem.map((item) => (
            <li key={item}>
              <CircleDot size={16} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    caseStudy.solution && {
      id: "solution",
      nav: "Solution",
      eyebrow: "The solution",
      title: "How I approached it",
      render: () => <p>{caseStudy.solution}</p>,
    },
    architecture && {
      id: "architecture",
      nav: "Architecture",
      eyebrow: "Architecture",
      title: architecture.diagram || architecture.flows.some((flow) => flow.steps.some((step) => step.kind === "trigger"))
        ? "How the workflow runs"
        : "How the pieces connect",
      render: () => <ArchitectureFlow architecture={architecture} />,
    },
    caseStudy.features?.length && {
      id: "features",
      nav: "Features",
      eyebrow: "Implemented features",
      title: "What it does",
      render: () => (
        <ul className="case-features">
          {caseStudy.features.map((feature) => (
            <li key={feature.title}>
              <CircleCheck size={18} aria-hidden="true" />
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ),
    },
    caseStudy.implementation?.length && {
      id: "implementation",
      nav: "How it was built",
      eyebrow: "Technical approach",
      title: "How it was built",
      render: () => (
        <ol className="case-steps">
          {caseStudy.implementation.map((item) => (
            <li key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      ),
    },
    caseStudy.learnings?.length && {
      id: "learnings",
      nav: "Lessons",
      eyebrow: "Lessons learned",
      title: "What I learned building it",
      render: () => (
        <ul className="case-list case-list--learnings">
          {caseStudy.learnings.map((item) => (
            <li key={item}>
              <Lightbulb size={16} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      ),
    },
  ].filter(Boolean);
}

function ProjectNotFound() {
  return (
    <PageLayout title="Project Not Found" description="The requested project could not be found.">
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Not found" }]}
        eyebrow="Project not found"
        title="This project doesn't exist."
        lead={<p>The project may have been moved or the URL may be incorrect.</p>}
        actions={
          <>
            <Button to="/projects">
              <ArrowLeft size={17} aria-hidden="true" />
              Back to projects
            </Button>
            <Button to="/" variant="ghost">
              Home
            </Button>
          </>
        }
      />
    </PageLayout>
  );
}

function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <ProjectNotFound />;

  const caseStudy = caseStudiesBySlug[project.slug] ?? null;
  const sections = buildSections(project, caseStudy);
  const repositories = project.githubUrls ?? [];
  const intro = caseStudy?.introduction ?? project.description;

  return (
    <PageLayout title={project.title} description={project.description}>
      <PageHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Projects", to: "/projects" },
          { label: project.title },
        ]}
        eyebrow={`Case study · ${project.category}`}
        title={project.title}
        lead={<p>{intro}</p>}
        actions={
          (project.liveDemoUrl || repositories.length > 0) && (
            <>
              {project.liveDemoUrl && (
                <Button href={project.liveDemoUrl} external>
                  <ExternalLink size={17} aria-hidden="true" />
                  Live demo
                  <span className="sr-only">(opens in a new tab)</span>
                </Button>
              )}
              {repositories.map((repository, index) => (
                <Button
                  key={repository.url}
                  href={repository.url}
                  external
                  variant={project.liveDemoUrl || index > 0 ? "ghost" : "primary"}
                >
                  <Github size={17} aria-hidden="true" />
                  {repositories.length > 1 ? repository.label : "View on GitHub"}
                  <span className="sr-only">(GitHub, opens in a new tab)</span>
                </Button>
              ))}
            </>
          )
        }
        aside={<ProjectFacts project={project} />}
      />

      <Container className="case-layout">
        {sections.length > 0 && (
          <nav className="case-layout__toc" aria-label="On this page">
            <p>On this page</p>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.nav}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="case-layout__content">
          {sections.length > 0 ? (
            sections.map((section, index) => (
              <CaseStudySection
                key={section.id}
                id={section.id}
                number={index + 1}
                eyebrow={section.eyebrow}
                title={section.title}
              >
                {section.render()}
              </CaseStudySection>
            ))
          ) : (
            <p className="case-layout__empty">A detailed case study for this project hasn&apos;t been written yet.</p>
          )}

          <ProjectPager slug={project.slug} />
        </div>
      </Container>

      <ContactCta />
    </PageLayout>
  );
}

export default ProjectDetails;
