import { BarChart3, Code2, Compass, Workflow } from "lucide-react";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { journeyStory } from "../../data/about";
import { journey } from "../../data/journey";
import "./AboutJourney.css";

const icons = {
  data: BarChart3,
  software: Code2,
  automation: Workflow,
  direction: Compass,
};

function AboutJourney() {
  return (
    <Section id="journey" labelledBy="journey-title">
      <div className="about-journey">
        <div className="about-journey__story">
          <SectionHeader eyebrow="01 / Journey" title="From data to software." titleId="journey-title" />
          {journeyStory.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <ol className="about-journey__timeline">
          {journey.map((stage, index) => {
            const Icon = icons[stage.iconKey];
            return (
              <Reveal as="li" key={stage.number} delay={index * 0.06} className="about-journey__stage">
                <span className="about-journey__marker" aria-hidden="true">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="about-journey__number">{stage.number}</p>
                  <h3 className="about-journey__title">{stage.title}</h3>
                  <p className="about-journey__text">{stage.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

export default AboutJourney;
