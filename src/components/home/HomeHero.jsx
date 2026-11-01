import { ArrowRight, Github, Linkedin } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import StatusPill from "../ui/StatusPill";
import WorkflowDiagram from "../diagrams/WorkflowDiagram";
import { profile } from "../../data/profile";
import "./HomeHero.css";

function HomeHero() {
  return (
    <section className="home-hero" id="top" aria-labelledby="hero-title">
      <div className="home-hero__backdrop" aria-hidden="true" />

      <Container className="home-hero__inner">
        <Reveal className="home-hero__content" y={12}>
          <p className="home-hero__eyebrow">
            {profile.name} · {profile.roles.join(" & ")}
          </p>

          <h1 id="hero-title" className="home-hero__title">
            I build software and{" "}
            <span className="home-hero__highlight">
              <span className="home-hero__nowrap">AI-powered</span> automations
            </span>{" "}
            that solve real business problems.
          </h1>

          <p className="home-hero__lead">
            Full-stack web applications, AI agents and workflow automations
            that turn repetitive processes into reliable systems, built with
            React, Node.js, n8n and modern AI tools.
          </p>

          <div className="home-hero__actions">
            <Button href="#work">
              Explore My Work
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="ghost">
              Let&apos;s Talk
            </Button>

            <span className="home-hero__divider" aria-hidden="true" />

            <a
              className="home-hero__social"
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <Github size={19} aria-hidden="true" />
            </a>
            <a
              className="home-hero__social"
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <Linkedin size={19} aria-hidden="true" />
            </a>
          </div>

          <ul className="home-hero__availability" aria-label="Availability">
            <li>
              <StatusPill>{profile.availability.employment}</StatusPill>
            </li>
            <li>
              <StatusPill tone="signal">{profile.availability.freelance}</StatusPill>
            </li>
          </ul>
        </Reveal>

        <Reveal className="home-hero__visual" delay={0.15} y={24}>
          <WorkflowDiagram />
        </Reveal>
      </Container>
    </section>
  );
}

export default HomeHero;
