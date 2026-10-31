import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import ResponsiveImage from "../ui/ResponsiveImage";
import Tag from "../ui/Tag";
import "./ProjectCard.css";

const AUTOMATION_CATEGORIES = ["AI & Automation", "Automation", "Voice AI"];

/**
 * Project summary card with a real screenshot, stack and links.
 * The whole card links to the case study; demo and repository links sit
 * above that link so they stay independently clickable.
 * `variant="compact"` drops the screenshot for secondary listings.
 */
function ProjectCard({
  project,
  variant = "default",
  headingLevel: Heading = "h3",
  imageSizes,
}) {
  const { slug, title, category, status, description, technologies, cover } =
    project;
  const isAutomation = AUTOMATION_CATEGORIES.includes(category);
  const repositories = project.githubUrls ?? [];
  const isCompact = variant === "compact";

  return (
    <article className={`project-card-v2 ${isCompact ? "project-card-v2--compact" : ""}`}>
      {cover && !isCompact && (
        <div className="project-card-v2__media">
          <ResponsiveImage
            className="project-card-v2__image"
            src={cover.src}
            variant={cover.variant}
            alt={cover.alt}
            sizes={
              imageSizes ?? "(min-width: 1280px) 560px, (min-width: 768px) 45vw, 92vw"
            }
          />
        </div>
      )}

      <div className="project-card-v2__body">
        <div className="project-card-v2__meta">
          <Tag tone={isAutomation ? "signal" : "accent"}>{category}</Tag>
          <span className="project-card-v2__status">{status}</span>
        </div>

        <Heading className="project-card-v2__title">
          <Link className="project-card-v2__link" to={`/projects/${slug}`}>
            {title}
          </Link>
        </Heading>

        <p className="project-card-v2__description">{description}</p>

        <ul className="project-card-v2__stack" aria-label="Technologies">
          {technologies.map((technology) => (
            <li key={technology}>
              <Tag>{technology}</Tag>
            </li>
          ))}
        </ul>

        <div className="project-card-v2__footer">
          <span className="project-card-v2__cta" aria-hidden="true">
            Case study
            <ArrowUpRight size={16} />
          </span>

          <div className="project-card-v2__external">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo (opens in a new tab)`}
              >
                <ExternalLink size={15} aria-hidden="true" />
                Live demo
              </a>
            )}
            {repositories.map((repository) => (
              <a
                key={repository.url}
                href={repository.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} GitHub repository: ${repository.label} (opens in a new tab)`}
              >
                <Github size={15} aria-hidden="true" />
                {repositories.length > 1 ? repository.label : "GitHub"}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
