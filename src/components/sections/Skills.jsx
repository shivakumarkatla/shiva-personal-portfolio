
import { motion } from "motion/react";
import { Bot, Braces, ChartNoAxesCombined, Puzzle } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    title: "Software Development",
    icon: Braces,
    description:
      "Building interfaces, APIs, and applications that work together.",
  },
  {
    title: "AI & Automation",
    icon: Bot,
    description:
      "Connecting AI tools and workflows to automate practical tasks.",
  },
  {
    title: "Analytical Thinking",
    icon: ChartNoAxesCombined,
    description:
      "Using data to understand problems and uncover useful insights.",
  },
  {
    title: "Structured Problem Solving",
    icon: Puzzle,
    description:
      "Breaking complex problems into manageable steps.",
  },
];

function Skills() {
  return (
    <section
      className="skills-section skills-section--compact"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="skills-heading">
          <div className="section-label">
            <span>03</span>
            <span>Capabilities</span>
          </div>

          <div className="skills-heading__main">
            <motion.h2
              id="skills-title"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              Different skills. One goal: <em>solving problems.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              I bring together software development, automation, and
              analytical thinking to build practical solutions.
            </motion.p>
          </div>
        </div>

        <div className="skills-grid skills-grid--compact">
          {capabilities.map(({ title, icon: Icon, description }, index) => (
            <motion.article
              className="skill-group skill-group--compact"
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <div className="skill-group__top">
                <span>0{index + 1}</span>
                <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
              </div>

              <h3>{title}</h3>
              <p className="skill-group__description">{description}</p>
            </motion.article>
          ))}
        </div>

        <div className="skills-section__action">
          <Link className="button" to="/skills">
            Explore technical skills <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Skills;
