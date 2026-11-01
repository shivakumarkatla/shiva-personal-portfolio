import { ExternalLink, Github } from "lucide-react";
import Tag from "../ui/Tag";
import "./ProjectFacts.css";

/** Summary card for a case study: status, category, stack and links. */
function ProjectFacts({ project }) {
  const repositories = project.githubUrls ?? [];
  const isV1 = project.status.startsWith("V1");

  return (
    <aside className="project-facts" aria-label="Project facts">
      <dl>
        <div>
          <dt>Status</dt>
          <dd>
            <Tag tone={isV1 ? "accent" : "default"}>{project.status}</Tag>
          </dd>
        </div>
        <div>
          <dt>Category</dt>
          <dd>{project.category}</dd>
        </div>
        <div>
          <dt>Technology stack</dt>
          <dd>
            <ul className="project-facts__stack">
              {project.technologies.map((technology) => (
                <li key={technology}>
                  <Tag>{technology}</Tag>
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt>Links</dt>
          <dd>
            {project.liveDemoUrl || repositories.length > 0 ? (
              <ul className="project-facts__links">
                {project.liveDemoUrl && (
                  <li>
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={15} aria-hidden="true" />
                      Live demo
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                )}
                {repositories.map((repository) => (
                  <li key={repository.url}>
                    <a href={repository.url} target="_blank" rel="noopener noreferrer">
                      <Github size={15} aria-hidden="true" />
                      GitHub: {repository.label}
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="project-facts__none">No public demo or repository is linked for this project.</span>
            )}
          </dd>
        </div>
      </dl>
    </aside>
  );
}

export default ProjectFacts;
