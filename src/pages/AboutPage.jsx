import { motion } from "motion/react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageNavigation from "../components/layout/PageNavigation";

const journey = [
  {
    number: "01",
    title: "Data Science",
    description:
      "My foundation in programming, data analysis, SQL, and analytical thinking.",
  },
  {
    number: "02",
    title: "Software Development",
    description:
      "Building interfaces, backend APIs, database integrations, and full-stack applications.",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Exploring how AI tools, APIs, and automated workflows can solve practical problems.",
  },
];

const principles = [
  {
    title: "Understand the problem",
    description:
      "Start by understanding what needs to be solved instead of immediately choosing a tool.",
  },
  {
    title: "Learn by building",
    description:
      "Apply concepts to projects, work through mistakes, and improve through practice.",
  },
  {
    title: "Improve step by step",
    description:
      "Focus on making applications more useful, reliable, and maintainable over time.",
  },
];

function AboutPage() {
  return (
    <div className="site-shell">
      <Navbar />

      <main className="container about-page">
        <PageNavigation backTo="/" backLabel="Back to Home" />

        <section className="about-page__hero">
          <div className="section-label">
            <span>01</span>
            <span>About Me</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Building useful software,
            <br />
            <em>one project at a time.</em>
          </motion.h1>

          <p className="about-page__intro">
            I'm a Data Science graduate interested in building software
            that solves real-world problems. My work spans full-stack
            development, AI automation, and data analytics.
          </p>
        </section>

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
              My journey began with programming, data analysis, and
              working with data. As I explored technology, I became
              increasingly interested in how interfaces, backend
              services, APIs, and databases work together to create
              useful applications.
            </p>

            <div className="about-page__journey">
              {journey.map((stage) => (
                <article
                  className="about-page__journey-item"
                  key={stage.number}
                >
                  <span>{stage.number}</span>
                  <div>
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
              I believe that understanding the problem should come
              before choosing the technology. I prefer learning by
              building, testing ideas, solving problems, and improving
              my work through practice.
            </p>

            <div className="about-page__principles">
              {principles.map((principle, index) => (
                <article
                  className="about-page__principle"
                  key={principle.title}
                >
                  <span>0{index + 1}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page__section about-page__direction">
          <div className="section-label">
            <span>04</span>
            <span>Current Direction</span>
          </div>

          <div className="about-page__section-content">
            <h2>
              Building, improving,
              <br />
              <em>and growing.</em>
            </h2>

            <p>
              Currently, I'm focused on strengthening my software
              engineering fundamentals, building more reliable
              applications, and exploring practical uses of AI and
              automation.
            </p>

            <p>
              I'm looking for software development opportunities where
              I can contribute to meaningful projects, collaborate
              with others, and grow through real-world engineering
              challenges.
            </p>

            
              <a
                className="button"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=katlashivakumar2003@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Get in touch <span aria-hidden="true">↗</span>
              </a>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;