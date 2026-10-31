import { Github, Linkedin, Mail } from "lucide-react";
import Button from "../ui/Button";
import CopyEmail from "../ui/CopyEmail";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import StatusPill from "../ui/StatusPill";
import { mailtoUrl, profile } from "../../data/profile";
import "./ContactSection.css";

function ContactSection() {
  return (
    <Section id="contact" labelledBy="contact-title" className="contact">
      <Reveal className="contact__panel">
        <div className="contact__copy">
          <p className="contact__eyebrow">05 / Contact</p>
          <h2 id="contact-title" className="contact__title">
            Let&apos;s build something useful.
          </h2>
          <p className="contact__text">
            I&apos;m looking for software development roles and I&apos;m open
            to freelance AI automation projects. If you have a role, a product
            or a process you&apos;d like to talk through, send me an email.
          </p>

          <ul className="contact__availability" aria-label="Availability">
            <li>
              <StatusPill>{profile.availability.employment}</StatusPill>
            </li>
            <li>
              <StatusPill tone="signal">{profile.availability.freelance}</StatusPill>
            </li>
          </ul>
        </div>

        <div className="contact__actions">
          <Button href={mailtoUrl} className="contact__email-button">
            <Mail size={18} aria-hidden="true" />
            Email me
          </Button>

          <CopyEmail email={profile.email} />

          <div className="contact__profiles">
            <Button href={profile.links.linkedin} external variant="ghost">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </Button>
            <Button href={profile.links.github} external variant="ghost">
              <Github size={18} aria-hidden="true" />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export default ContactSection;
