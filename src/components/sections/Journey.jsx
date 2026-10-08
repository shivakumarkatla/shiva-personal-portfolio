import { motion } from "motion/react";

const stages = [
  { number: "01", title: "Data Science", text: "Built a foundation in programming, data, SQL, and analytical thinking." },
  { number: "02", title: "Web Development", text: "Moved from frontend work into APIs, databases, authentication, and full-stack applications." },
  { number: "03", title: "AI & Automation", text: "Started connecting AI, APIs, workflows, and real-world processes." },
  { number: "04", title: "Current Direction", text: "Deepening software engineering while continuing to build with AI, automation, and data." },
];

function Journey() {
  return (
    <section className="journey-section" id="journey" aria-labelledby="journey-title">
      <div className="container">
        <div className="journey-heading">
          <div className="section-label"><span>05</span><span>Journey</span></div>
          <div>
            <motion.h2
              id="journey-title"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              From learning to <em>building.</em>
            </motion.h2>
            <p>A short view of how my interests have developed into the work I build today.</p>
          </div>
        </div>

        <div className="journey-grid">
          {stages.map((stage, index) => (
            <motion.article
              className="journey-card"
              key={stage.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span>{stage.number}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
