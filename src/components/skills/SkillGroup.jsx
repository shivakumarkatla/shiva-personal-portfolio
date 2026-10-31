import { Link } from "react-router-dom";
import { Database, PanelsTopLeft, Server, Workflow, Wrench } from "lucide-react";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";
import { getSkillProjects } from "../../lib/skills";
import "./SkillGroup.css";

const icons = {
  frontend: PanelsTopLeft,
  backend: Server,
  automation: Workflow,
  data: Database,
  tools: Wrench,
};

/**
 * One skill category. Skills used in listed projects link to those projects;
 * the rest are shown separately without any proficiency rating.
 */
function SkillGroup({ group, index }) {
  const Icon = icons[group.id];
  const isAutomation = group.id === "automation";
  const skills = group.skills.map((skill) => ({ ...skill, projects: getSkillProjects(skill) }));
  const used = skills.filter((skill) => skill.projects.length > 0);
  const other = skills.filter((skill) => skill.projects.length === 0);
  const titleId = `skills-${group.id}-title`;

  return (
    <Reveal as="section" className="skill-group-v2" aria-labelledby={titleId}>
      <header className="skill-group-v2__header">
        <span
          className={`skill-group-v2__icon ${isAutomation ? "skill-group-v2__icon--signal" : ""}`}
          aria-hidden="true"
        >
          <Icon size={20} strokeWidth={1.75} />
        </span>
        <p className="skill-group-v2__number">{String(index + 1).padStart(2, "0")}</p>
        <h2 id={titleId} className="skill-group-v2__title">
          {group.title}
        </h2>
        <p className="skill-group-v2__description">{group.description}</p>
      </header>

      <div className="skill-group-v2__body">
        {used.length > 0 && (
          <div>
            <h3 className="skill-group-v2__label">Used in projects</h3>
            <ul className="skill-group-v2__used">
              {used.map((skill) => (
                <li key={skill.name}>
                  <Tag tone={isAutomation ? "signal" : "accent"}>{skill.name}</Tag>
                  <span className="skill-group-v2__projects">
                    {skill.projects.map((project, projectIndex) => (
                      <span key={project.slug}>
                        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                        {projectIndex < skill.projects.length - 1 && ", "}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {other.length > 0 && (
          <div>
            <h3 className="skill-group-v2__label">Also in my toolkit</h3>
            <ul className="skill-group-v2__other">
              {other.map((skill) => (
                <li key={skill.name}>
                  <Tag>{skill.name}</Tag>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default SkillGroup;
