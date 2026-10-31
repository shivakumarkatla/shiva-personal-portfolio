import { Link } from "react-router-dom";
import { ArrowRight, ChartNoAxesCombined, Check, Code2, Workflow } from "lucide-react";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";
import { capabilityAreas } from "../../data/skills";
import { getProjectBySlug } from "../../data/projects";
import "./Capabilities.css";

const icons = {
  code: Code2,
  workflow: Workflow,
  chart: ChartNoAxesCombined,
};

function Capabilities() {
  return (
    <Section id="capabilities" labelledBy="capabilities-title" tone="raised">
      <SectionHeader
        eyebrow="02 / Capabilities"
        title="Three areas I work across"
        titleId="capabilities-title"
        description="Each area is backed by projects you can open and inspect."
      />

      <div className="capabilities__grid">
        {capabilityAreas.map((area, index) => {
          const Icon = icons[area.iconKey];
          const isAutomation = area.id === "automation";

          return (
            <Reveal key={area.id} delay={index * 0.08}>
              <Card
                as="article"
                interactive
                className={`capability ${isAutomation ? "capability--automation" : ""}`}
              >
                <span className="capability__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.75} />
                </span>

                <h3 className="capability__title">{area.title}</h3>
                <p className="capability__description">{area.description}</p>

                <ul className="capability__points">
                  {area.points.map((point) => (
                    <li key={point}>
                      <Check size={16} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="capability__tools" aria-label={`${area.title} tools`}>
                  {area.tools.map((tool) => (
                    <li key={tool}>
                      <Tag tone={isAutomation ? "signal" : "default"}>{tool}</Tag>
                    </li>
                  ))}
                </ul>

                <div className="capability__proof">
                  <span className="capability__proof-label">Built in</span>
                  <ul>
                    {area.proof.map((slug) => {
                      const project = getProjectBySlug(slug);
                      return (
                        <li key={slug}>
                          <Link to={`/projects/${slug}`}>{project.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>

      <Link to="/skills" className="capabilities__skills-link">
        See the full list of technical skills
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </Section>
  );
}

export default Capabilities;
