import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ProjectCard from "../projects/ProjectCard";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";
import { getProjectBySlug, projects } from "../../data/projects";
import "./FeaturedWork.css";

const MORE_WORK = [
  "restaurant-reservation-voice-agent",
  "llm-learning-system",
  "power-bi-analytics-dashboard",
];

function FeaturedWork() {
  const featured = projects.filter((project) => project.featured);
  const moreWork = MORE_WORK.map(getProjectBySlug).filter(Boolean);

  return (
    <Section id="work" labelledBy="work-title" className="featured-work">
      <SectionHeader
        eyebrow="01 / Selected work"
        title="Projects that show how I build"
        titleId="work-title"
        description="Two full-stack applications and two AI automation workflows, each with a written case study, real screenshots and source code."
      />

      <div className="featured-work__grid">
        {featured.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 2) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <div className="featured-work__more">
        <h3 className="featured-work__more-title">More work</h3>
        <ul className="featured-work__more-list">
          {moreWork.map((project) => (
            <li key={project.slug}>
              <Link to={`/projects/${project.slug}`} className="featured-work__more-link">
                <span className="featured-work__more-name">{project.title}</span>
                <span className="featured-work__more-meta">
                  {project.category}
                  {project.status.startsWith("V1") && <Tag tone="accent">V1</Tag>}
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/projects" className="featured-work__all">
          View all {projects.length} projects
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}

export default FeaturedWork;
