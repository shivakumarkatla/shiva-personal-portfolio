import { ArrowDownRight, ArrowUpRight, Check, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import Button from "../ui/Button";

const technologies = ["React", "JavaScript", "Python", "Node.js", "AI", "Automation"];

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__container">
        <div className="hero__content">
          <motion.div
            className="hero__eyebrow-row"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-dot" aria-hidden="true" />
            <span className="eyebrow hero__eyebrow">Software Developer</span>
            <span className="hero__availability">Open to opportunities</span>
          </motion.div>

          <motion.h1
            id="hero-title"
            className="hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            I build software
            <span> that solves </span>
            <em>real problems.</em>
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            Full-stack development, AI automation, and practical digital
            products — built by learning through real projects.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
          >
            <Button href="#projects">
              View Projects
              <ArrowUpRight size={17} aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="secondary">
              Let&apos;s Connect
            </Button>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Github size={17} aria-hidden="true" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin size={17} aria-hidden="true" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
        >
          <div className="terminal-card">
            <div className="terminal-card__topbar">
              <div className="terminal-card__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span>shiva.dev</span>
              <span className="terminal-card__index">01</span>
            </div>

            <div className="terminal-card__body">
              <div className="terminal-intro">
                <span className="terminal-prompt">$</span>
                <span>whoami</span>
              </div>

              <div className="terminal-name">Shiva Kumar</div>
              <div className="terminal-role">Software Developer</div>

              <div className="terminal-divider" />

              <div className="terminal-stack">
                {technologies.map((technology) => (
                  <span key={technology}>
                    <Check size={14} aria-hidden="true" />
                    {technology}
                  </span>
                ))}
              </div>

              <div className="terminal-command">
                <span className="terminal-prompt">$</span>
                <span>build --production</span>
                <span className="terminal-cursor" aria-hidden="true" />
              </div>

              <div className="terminal-success">
                <span className="terminal-success__icon">
                  <Check size={14} aria-hidden="true" />
                </span>
                <div>
                  <strong>Ready to build.</strong>
                  <span>One project at a time.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual__label">
            <span>Selected work</span>
            <ArrowDownRight size={16} aria-hidden="true" />
          </div>
        </motion.div>
      </div>

      <div className="hero-strip" aria-label="Technologies">
        <div className="container hero-strip__inner">
          <span className="hero-strip__label">I work with</span>
          <div className="hero-strip__items">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
