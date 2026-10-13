
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Workflow,
  BarChart3,
  Brain,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageNavigation from "../components/layout/PageNavigation";
import PageMetadata from "../components/seo/PageMetadata";

const journey = [
  {
    number: "01",
    title: "Data Science",
    description:
      "My academic foundation in programming, SQL, data analysis, and analytical thinking.",
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Software Development",
    description:
      "Practical experience building web applications, backend APIs, authentication flows, and database-driven systems.",
    icon: Code2,
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Experience creating automated workflows, integrating AI services, and connecting tools to simplify repetitive tasks.",
    icon: Workflow,
  },
];

const principles = [
  {
    title: "Understand the problem",
    description:
      "Identify the requirements and intended outcome before choosing a technology or designing a solution.",
  },
  {
    title: "Turn ideas into solutions",
    description:
      "Apply concepts through implementation, connecting interfaces, APIs, databases, and external services where needed.",
  },
  {
    title: "Test, learn, and improve",
    description:
      "Investigate errors, refine solutions, and use each project to make better technical decisions in the future.",
  },
];

const projects = [
  {
    number: "01",
    category: "Full-Stack Development",
    title: "Expense Tracker",
    description:
      "A personal finance application with authentication, expense management, transaction records, and spending visualizations.",
    technologies: "React · Node.js · Express · MongoDB · Recharts",
    href: "/projects/full-stack-expense-tracker",
    icon: BarChart3,
  },
  {
    number: "02",
    category: "Full-Stack Development",
    title: "Task Manager",
    description:
      "A task management application integrating a user interface, authentication, backend services, and database-backed task management.",
    technologies: "React · Node.js · Express · MongoDB",
    href: "/projects/full-stack-task-manager",
    icon: Code2,
  },
  {
    number: "03",
    category: "AI & Automation",
    title: "NGO Audit Verification",
    description:
      "An AI-assisted workflow for analyzing field submissions, organizing verification results, and routing cases for grant-officer approval.",
    technologies: "n8n · Gemini · Telegram · Google Sheets",
    href: "/projects/ngo-audit-verification",
    icon: Brain,
  },
  {
    number: "04",
    category: "AI Agents & Automation",
    title: "Smart Schedule AI Agent",
    description:
      "A conversational scheduling workflow that interprets requests and coordinates connected calendar and email tools.",
    technologies: "n8n · AI Agent · Telegram · Google Calendar · Gmail",
    href: "/projects/smart-schedule",
    icon: Workflow,
  },
];

function AboutPage() {
  return (
    <div className="site-shell">
      <PageMetadata
        title="About Me"
        description="Learn about my journey from Data Science to software development, completed projects, problem-solving approach, and career goals."
      />

      <Navbar />

      <main className="container about-page">
        <PageNavigation backTo="/" backLabel="Back to Home" />

        {/* 01 — About Me */}
        <section className="about-page__hero">
          <motion.div
            className="about-page__hero-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-label">
              <span>01</span>
              <span>About Me</span>
            </div>

            <h1>
              Building useful software,
              <br />
              <em>one project at a time.</em>
            </h1>

            <p className="about-page__intro">
              I'm a Data Science graduate interested in building software
              that solves real-world problems. My work spans full-stack
              web development, AI-powered automation, and data analytics.
            </p>

            <p className="about-page__intro">
              Through hands-on projects, I've turned technical concepts
              into working applications, connected services through
              automated workflows, and explored practical ways to use
              data and AI. I'm now focused on strengthening my software
              engineering fundamentals and pursuing opportunities where
              I can contribute to meaningful software products.
            </p>
          </motion.div>

          <motion.div
            className="about-page__portrait"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <img
              src="/images/profile-photo.png"
              alt="Portrait of Shiva Kumar"
              fetchPriority="high"
            />
            <span className="about-page__portrait-caption">
              Software Development · AI · Data
            </span>
          </motion.div>
        </section>

        {/* 02 — My Journey */}
        <section className="about-page__section">
          <div className="section-label">
            <span>02</span>
            <span>My Journey</span>
          </div>

          <div className="about-page__section-content">
            <h2>
              From data to <em>software.</em>
            </h2>

            <p>
              My journey began with Data Science, where I developed a
              foundation in programming, data analysis, SQL, and
              analytical thinking. As I explored different areas of
              technology, I became increasingly interested in how
              frontend interfaces, backend services, APIs, and databases
              work together to create complete applications.
            </p>

            <p>
              That curiosity led me toward full-stack development and
              AI automation. I started applying what I learned through
              projects that brought together different technologies,
              required practical problem-solving, and helped me
              understand how individual components function as part of
              a larger system.
            </p>

            <p>
              Over time, my work expanded beyond traditional web
              applications to include AI-powered workflows, a
              conversational voice agent, and data visualization.
              Today, I see software development as a combination of
              analytical thinking, practical implementation, and
              continuous learning.
            </p>

            <div className="about-page__journey">
              {journey.map(({ number, title, description, icon: Icon }) => (
                <motion.article
                  className="about-page__journey-item"
                  key={number}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <span>{number}</span>
                  <div>
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — My Approach */}
        <section className="about-page__section">
          <div className="section-label">
            <span>03</span>
            <span>My Approach</span>
          </div>

          <div className="about-page__section-content">
            <h2>
              How I approach <em>problems.</em>
            </h2>

            <p>
              I believe effective software development begins with
              understanding the problem rather than immediately
              choosing a technology. I identify the requirements,
              break the problem into manageable parts, and select
              tools that fit the intended outcome.
            </p>

            <div className="about-page__principles">
              {principles.map((principle, index) => (
                <motion.article
                  className="about-page__principle"
                  key={principle.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <span>0{index + 1}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </motion.article>
              ))}
            </div>

            <p className="about-page__closing-thought">
              I don't expect to know everything before starting. I value
              curiosity, persistence, and the willingness to investigate
              unfamiliar problems.
            </p>
          </div>
        </section>

        {/* 04 — Selected Projects */}
        <section className="about-page__section">
          <div className="section-label">
            <span>04</span>
            <span>Selected Projects</span>
          </div>

          <div className="about-page__section-content">
            <h2>
              Turning concepts into <em>solutions.</em>
            </h2>

            <p>
              My completed projects demonstrate how I've applied
              software development, automation, and analytics to
              different types of practical problems.
            </p>

            <div className="about-page__projects">
              {projects.map(({ number, category, title, description, technologies, href, icon: Icon }) => (
                <motion.article
                  className="about-page__project"
                  key={number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="about-page__project-top">
                    <span>{number}</span>
                    <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                  </div>

                  <p className="about-page__project-category">
                    {category}
                  </p>

                  <h3>{title}</h3>
                  <p className="about-page__project-description">
                    {description}
                  </p>

                  <p className="about-page__project-tech">
                    {technologies}
                  </p>

                  <a className="about-page__project-link" href={href}>
                    Explore project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </motion.article>
              ))}
            </div>

            <a className="about-page__all-projects" href="/projects">
              Explore all projects
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>

            <p className="about-page__additional-work">
              I've also worked on a restaurant reservation voice agent,
              Excel-based learning systems, an LLM learning system,
              Power BI dashboards, and other automation workflows.
            </p>
          </div>
        </section>

        {/* 05 — Current Direction */}
        <section className="about-page__section about-page__direction">
          <div className="section-label">
            <span>05</span>
            <span>Current Direction</span>
          </div>

          <div className="about-page__section-content">
            <h2>
              Building, improving,
              <br />
              <em>and growing.</em>
            </h2>

            <p>
              Having completed projects across software development,
              automation, and analytics, I'm focused on deepening my
              engineering knowledge and preparing for professional
              software development roles.
            </p>

            <p>
              My current learning priorities include TypeScript,
              advanced React, backend architecture, system design,
              Docker, and AI application development. I want to
              strengthen my ability to write maintainable code, design
              reliable systems, and make sound technical decisions.
            </p>

            <p>
              I'm looking for opportunities where I can contribute to
              real products, collaborate with other engineers, learn
              from feedback, and grow through practical engineering
              challenges.
            </p>

            <p>
              For me, progress isn't just about learning another
              technology. It's about using what I know more effectively,
              building better solutions, and becoming a more capable
              engineer with every project.
            </p>

            <a
              className="button"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=katlashivakumar2003@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Get in touch
              <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
