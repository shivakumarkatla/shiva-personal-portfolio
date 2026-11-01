import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { approach } from "../../data/about";
import "./AboutApproach.css";

function AboutApproach() {
  return (
    <Section id="approach" labelledBy="approach-title">
      <SectionHeader
        eyebrow="03 / Approach"
        title="How I approach problems."
        titleId="approach-title"
        description={approach.intro}
      />

      <ol className="about-approach__principles">
        {approach.principles.map((principle, index) => (
          <Reveal as="li" key={principle.title} delay={index * 0.06} className="about-approach__principle">
            <span className="about-approach__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </Reveal>
        ))}
      </ol>

      <blockquote className="about-approach__quote">
        <p>{approach.closingThought}</p>
      </blockquote>
    </Section>
  );
}

export default AboutApproach;
