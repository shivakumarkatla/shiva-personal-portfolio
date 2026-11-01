import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  ChevronRight,
  CircleCheck,
  DatabaseZap,
  FileCheck2,
  Link2,
  Repeat,
  Sparkles,
} from "lucide-react";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";
import { automationBenefits, automationExamples } from "../../data/automation";
import { getProjectBySlug } from "../../data/projects";
import "./Automation.css";

const icons = {
  verify: FileCheck2,
  calendar: CalendarClock,
  sparkles: Sparkles,
  database: DatabaseZap,
  repeat: Repeat,
  link: Link2,
  check: CircleCheck,
};

function ProjectLink({ slug }) {
  const project = getProjectBySlug(slug);

  return (
    <Link to={`/projects/${slug}`} className="automation-example__project">
      {project.title}
      <ArrowUpRight size={14} aria-hidden="true" />
    </Link>
  );
}

function Automation() {
  return (
    <Section id="automation" labelledBy="automation-title" className="automation">
      <div className="automation__intro">
        <SectionHeader
          eyebrow="03 / Automation"
          title="Business processes I can automate"
          titleId="automation-title"
          description="A lot of repetitive work happens between tools: a message arrives, details are copied into a calendar, a sheet or an email. I connect those steps so they run the same way every time, with a person still approving what matters."
        />

        <ul className="automation__benefits">
          {automationBenefits.map((benefit) => {
            const Icon = icons[benefit.iconKey];
            return (
              <li key={benefit.title}>
                <Icon size={18} aria-hidden="true" />
                <span>
                  <strong>{benefit.title}</strong>
                  {benefit.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="automation__grid">
        {automationExamples.map((example, index) => {
          const Icon = icons[example.iconKey];

          return (
            <Reveal key={example.id} delay={(index % 2) * 0.08}>
              <article className="automation-example">
                <div className="automation-example__top">
                  <span className="automation-example__icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  {example.label && <Tag tone="accent">{example.label}</Tag>}
                </div>

                <h3 className="automation-example__title">{example.title}</h3>
                <p className="automation-example__description">{example.description}</p>

                <ol className="automation-example__flow" aria-label="Workflow steps">
                  {example.flow.map((step, stepIndex) => (
                    <li key={step}>
                      {stepIndex > 0 && <ChevronRight size={14} aria-hidden="true" />}
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>

                <p className="automation-example__source">
                  <span>Built in</span>
                  <ProjectLink slug={example.project} />
                  {example.relatedProject && <ProjectLink slug={example.relatedProject} />}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="automation__cta">
        <p>
          <strong>Have a repetitive process in mind?</strong> Tell me how it
          works today and I&apos;ll suggest where automation could help.
        </p>
        <Button href="#contact">
          Discuss an automation
          <ArrowRight size={17} aria-hidden="true" />
        </Button>
      </div>
    </Section>
  );
}

export default Automation;
