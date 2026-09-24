import { BarChart3, Brain, Code2, Workflow } from "lucide-react";
import { motion } from "motion/react";

const capabilities = [
  {
    number: "01",
    icon: Code2,
    title: "Software Development",
    description:
      "Building practical web applications, APIs, and interfaces with a focus on clear structure and usable experiences.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "AI & Automation",
    description:
      "Designing workflows that connect tools, data, and AI to reduce repetitive work and turn processes into systems.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Analytical Thinking",
    description:
      "Using dashboards, Excel, data, and business logic to understand information and communicate what the numbers show.",
  },
  {
    number: "04",
    icon: Brain,
    title: "Structured Problem Solving",
    description:
      "Breaking a problem into smaller parts, testing practical approaches, and learning through the process of building.",
  },
];

function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__intro">
          <motion.div
            className="about__copy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <span className="eyebrow">More than a résumé</span>
            <h2 id="about-title">
              I learn by <em>building.</em>
            </h2>
          </motion.div>

          <motion.div
            className="about__statement"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <p className="about__lead">
              I&apos;m a Data Science graduate building practical projects across web development, automation, and data, while pursuing opportunities in software development.
            </p>
            <p>
              My projects have taken me across web development, AI-assisted
              workflows, backend systems, dashboards, and Excel. Instead of
              treating these as separate skills, I see them as different tools
              for understanding a problem and building a useful solution.
            </p>
          </motion.div>
        </div>

        <div className="about__grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="capability-card"
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="capability-card__top">
                  <span className="capability-card__number">{item.number}</span>
                  <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="about__principle">
          <span>01 / Principle</span>
          <p>
            Understand the problem first. Then choose the technology that
            helps solve it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
