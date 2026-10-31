import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2 , ExternalLink} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageNavigation from "../components/layout/PageNavigation";
import { getProjectBySlug } from "../data/projects";
import ProjectScreenshotCarousel from "../components/ProjectScreenshotCarousel";
import PageMetadata from "../components/seo/PageMetadata";


function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="site-shell">
        <PageMetadata
          title="Project Not Found"
          description="The requested project could not be found."
        />
        <Navbar />
        <main className="section">
          <div className="container">
            <span className="eyebrow">Project not found</span>
            <h1 className="display-title">
              This project doesn&apos;t exist.
            </h1>
            <p className="lead">
              The project may have been moved or the URL may be incorrect.
            </p>
            <Link className="text-link" to="/projects">
              <ArrowLeft size={16} /> Back to projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { caseStudy } = project;

  return (
    <div className="site-shell">
      <PageMetadata
        title={project.title}
        description={project.description}
      />
      <Navbar />

      <main className="project-detail-page">
        <div className="container">
          <PageNavigation
            backTo="/projects"
            backLabel="Back to Projects"
          />

          <section className="project-detail-hero">
            <span className="eyebrow">
              {project.category} / {project.status}
            </span>

            <h1 className="display-title">{project.title}</h1>

            <p className="lead">
              {caseStudy
                ? caseStudy.introduction
                : project.description}
            </p>

            <div className="project-detail__technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            
{(project.githubUrls?.length > 0 || project.liveDemoUrl) && (
  
<div className="project-detail__links">
  {project.githubUrls?.map((repo) => (
    <a
      key={repo.url}
      className="button button--secondary"
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>GitHub</span>
      <span>{repo.label}</span>
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  ))}

  {project.liveDemoUrl && (
    <a
      className="button button--primary"
      href={project.liveDemoUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ExternalLink size={17} aria-hidden="true" />
      <span>Live Demo</span>
    </a>
  )}
</div>
)}

          </section>


{caseStudy?.screenshots && (
    <ProjectScreenshotCarousel
      screenshots={caseStudy.screenshots}
    />
  )}

          {caseStudy ? (
            <>
              <section className="project-detail__section">
                <span className="eyebrow">01 / The Problem</span>
                <h2>What needed to be solved?</h2>
                <ul className="project-detail__list">
                  {caseStudy.problem.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="project-detail__section">
                <span className="eyebrow">02 / The Solution</span>
                <h2>How I approached it</h2>
                <p>{caseStudy.solution}</p>
              </section>

              <section className="project-detail__section">
                <span className="eyebrow">03 / Key Features</span>
                <h2>What it can do</h2>

                <div className="project-detail__feature-grid">
                  {caseStudy.features.map((feature) => (
                    <article
                      className="project-detail__feature"
                      key={feature.title}
                    >
                      <CheckCircle2
                        size={18}
                        aria-hidden="true"
                      />
                      <div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="project-detail__section">
                <span className="eyebrow">04 / Technical Approach</span>
                <h2>How it was built</h2>

                <div className="project-detail__implementation">
                  {caseStudy.implementation.map((item) => (
                    <article
                      className="project-detail__implementation-item"
                      key={item.title}
                    >
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="project-detail__section">
                <span className="eyebrow">05 / Lessons Learned</span>
                <h2>What I learned building it</h2>

                <ul className="project-detail__list">
                  {caseStudy.learnings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            <section className="project-detail__section">
              <span className="eyebrow">Case study in progress</span>
              <h2>More about this project</h2>
              <p>
                This page currently presents the project summary.
                Its implementation details, key decisions, and
                lessons learned will be documented after the
                project-specific details are reviewed.
              </p>
            </section>
          )}

          <div className="project-detail__back">
            <Link className="text-link" to="/projects">
              <ArrowLeft size={16} /> All projects
            </Link>

            <Link className="text-link" to="/">
              Home <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


export default ProjectDetails;
