import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { processSteps } from "../../data/automation";
import "./Process.css";

function Process() {
  return (
    <Section id="process" labelledBy="process-title" tone="raised">
      <SectionHeader
        eyebrow="04 / Process"
        title="How I'd work with you"
        titleId="process-title"
        description="Whether it's a software role or an automation project, I work the same way: understand first, then build."
      />

      <ol className="process__steps">
        {processSteps.map((step, index) => (
          <Reveal as="li" key={step.title} delay={index * 0.08} className="process__step">
            <span className="process__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="process__title">{step.title}</h3>
            <p className="process__text">{step.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export default Process;
