import { BarChart3, Brain, Code2, Workflow } from "lucide-react";
import { motion } from "motion/react";

const capabilities = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Web applications, APIs, and interfaces.",
  },
  {
    icon: Workflow,
    title: "AI & Automation",
    description: "Workflows that connect tools, data, and AI.",
  },
  {
    icon: BarChart3,
    title: "Analytical Thinking",
    description: "Dashboards, Excel, data, and business logic.",
  },
  {
    icon: Brain,
    title: "Structured Problem Solving",
    description: "Breaking problems down and testing practical solutions.",
  },
];

function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__intro">
          <motion.div
            className="about__copy"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-label"><span>02</span><span>About</span></div>
            <h2 id="about-title">I learn by <em>building.</em></h2>
          </motion.div>

          <motion.div
            className="about__statement"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <p className="about__lead">
              I&apos;m a Data Science graduate building practical projects in web development, automation, and data while pursuing software development roles.
            </p>
            <p>
              I like understanding the problem first, then choosing the technology that helps solve it.
            </p>
          </motion.div>
        </div>

        <div className="about__grid about__grid--compact">
          {capabilities.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              className="capability-card capability-card--compact"
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="capability-card__top">
                <span>0{index + 1}</span>
                <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="about__principle about__principle--compact">
          <span>Principle</span>
          <p>Understand the problem first. Then choose the technology that helps solve it.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
