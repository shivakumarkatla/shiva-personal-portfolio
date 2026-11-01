import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import ProjectCard from "../projects/ProjectCard";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";
import { currentDirection } from "../../data/about";
import { learningSkills } from "../../data/skills";
import { projects } from "../../data/projects";
import "./AboutDirection.css";

function AboutDirection() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <Section id="direction" labelledBy="direction-title" tone="raised">
        <div className="about-direction">
          <SectionHeader
            eyebrow="04 / Current direction"
            title="Building, improving, and growing."
            titleId="direction-title"
          />
          <div className="about-direction__body">
            {currentDirection.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <div className="about-direction__learning">
              <h3>Currently learning</h3>
              <p>
                These are learning priorities I&apos;m working on, not claims of
                mastery.
              </p>
              <ul>
                {learningSkills.map((skill) => (
                  <li key={skill}>
                    <Tag tone="accent">{skill}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="selected-projects" labelledBy="selected-projects-title">
        <SectionHeader
          eyebrow="05 / Selected projects"
          title="Turning concepts into solutions."
          titleId="selected-projects-title"
          description="I've also worked on a restaurant reservation voice agent, Excel-based learning systems, an LLM learning system, Power BI dashboards, and other automation workflows."
        />
        <div className="about-direction__projects">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="compact" />
          ))}
        </div>
        <Button to="/projects" variant="link" className="about-direction__all">
          Explore all projects
          <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </Section>
    </>
  );
}

export default AboutDirection;
