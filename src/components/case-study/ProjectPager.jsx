import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { projects } from "../../data/projects";
import "./ProjectPager.css";

/** Previous / next project links (in archive order) plus a link back to all projects. */
function ProjectPager({ slug }) {
  const index = projects.findIndex((project) => project.slug === slug);
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <nav className="project-pager" aria-label="More projects">
      {previous ? (
        <Link to={`/projects/${previous.slug}`} className="project-pager__link">
          <span className="project-pager__direction">
            <ArrowLeft size={14} aria-hidden="true" /> Previous project
          </span>
          <span className="project-pager__title">{previous.title}</span>
        </Link>
      ) : (
        <span />
      )}

      <Link to="/projects" className="project-pager__all">
        <LayoutGrid size={16} aria-hidden="true" />
        All projects
      </Link>

      {next ? (
        <Link to={`/projects/${next.slug}`} className="project-pager__link project-pager__link--next">
          <span className="project-pager__direction">
            Next project <ArrowRight size={14} aria-hidden="true" />
          </span>
          <span className="project-pager__title">{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

export default ProjectPager;
