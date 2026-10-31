import { ArrowRight, ChartNoAxesCombined, Code2, Workflow } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";
import { capabilityAreas } from "../../data/skills";
import "./AboutToolkit.css";

const icons = {
  code: Code2,
  workflow: Workflow,
  chart: ChartNoAxesCombined,
};

function AboutToolkit() {
  return (
    <Section id="toolkit" labelledBy="toolkit-title" tone="raised">
      <SectionHeader
        eyebrow="02 / What I work with"
        title="Three areas, one way of working."
        titleId="toolkit-title"
        description="The tools below are the ones my projects actually use."
      />

      <div className="about-toolkit__grid">
        {capabilityAreas.map((area) => {
          const Icon = icons[area.iconKey];
          const isAutomation = area.id === "automation";
          return (
            <Card key={area.id} as="article" className="about-toolkit__card">
              <span
                className={`about-toolkit__icon ${isAutomation ? "about-toolkit__icon--signal" : ""}`}
                aria-hidden="true"
              >
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <h3>{area.title}</h3>
              <ul aria-label={`${area.title} tools`}>
                {area.tools.map((tool) => (
                  <li key={tool}>
                    <Tag tone={isAutomation ? "signal" : "default"}>{tool}</Tag>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>

      <Button to="/skills" variant="link" className="about-toolkit__link">
        See all skills and where I used them
        <ArrowRight size={16} aria-hidden="true" />
      </Button>
    </Section>
  );
}

export default AboutToolkit;
