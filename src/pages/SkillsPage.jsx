
import { motion } from "motion/react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageNavigation from "../components/layout/PageNavigation";

const skillGroups = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Building user interfaces, backend services, and applications that connect different parts of a system.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    number: "02",
    title: "Data & Analytics",
    description:
      "Working with data to organize information, analyze patterns, and communicate insights.",
    skills: [
      "Python",
      "SQL",
      "MySQL",
      "Microsoft Excel",
      "Power BI",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Connecting AI models, APIs, and workflow tools to automate practical tasks and processes.",
    skills: [
      "Generative AI",
      "Google Gemini",
      "n8n",
      "Make",
      "Voice AI",
      "API Integrations",
      "Workflow Automation",
    ],
  },
  {
    number: "04",
    title: "Tools & Development Environment",
    description:
      "Tools I use to write code, manage projects, test APIs, and build frontend applications.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "Tailwind CSS",
      "Postman",
    ],
  },
];

const learningSkills = [
  "TypeScript",
  "Advanced React",
  "Backend Architecture",
  "System Design",
  "AI Application Development",
  "Docker",
];

function SkillsPage() {
  return (
    <div className="site-shell">
      <Navbar />

      <main className="container skills-page">
        <PageNavigation backTo="/" backLabel="Back to Home" />

        <section className="skills-page__hero">
          <div className="section-label">
            <span>01</span>
            <span>Skills & Technologies</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tools for turning
            <br />
            ideas into <em>working software.</em>
          </motion.h1>

          <p>
            An overview of the technologies I use across software
            development, data analytics, and AI automation, along with
            the skills I'm actively developing.
          </p>
        </section>

        <section
          className="skills-page__groups"
          aria-label="Technical skill areas"
        >
          {skillGroups.map((group) => (
            <article
              className="skills-page__group"
              key={group.number}
            >
              <div className="section-label">
                <span>{group.number}</span>
                <span>Skill Area</span>
              </div>

              <div className="skills-page__group-content">
                <h2>{group.title}</h2>
                <p>{group.description}</p>

                <div className="skills-page__list">
                  {group.skills.map((skill) => (
                    <span
                      className="skills-page__tag"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="skills-page__learning">
          <div className="section-label">
            <span>05</span>
            <span>Currently Developing</span>
          </div>

          <div className="skills-page__learning-content">
            <h2>
              Always learning.
              <br />
              <em>Always improving.</em>
            </h2>

            <p>
              I'm strengthening these areas through structured
              learning and practical projects. They represent my
              current learning priorities, not claims of mastery.
            </p>

            <div className="skills-page__list">
              {learningSkills.map((skill) => (
                <span
                  className="skills-page__tag skills-page__tag--learning"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-page__next">
          <p>
            Skills are best understood through the work they make
            possible.
          </p>

          <a className="button" href="/projects">
            Explore my projects <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SkillsPage;
