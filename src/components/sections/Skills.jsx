import { motion } from "motion/react";
import { Bot, Braces, Database, Wrench } from "lucide-react";

const skillGroups = [
  { title: "Development", icon: Braces, skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "REST APIs"] },
  { title: "Data & Analytics", icon: Database, skills: ["Python", "SQL", "MySQL", "Excel", "Power BI", "Data Analysis", "Data Visualization"] },
  { title: "AI & Automation", icon: Bot, skills: ["Generative AI", "Gemini", "n8n", "Make", "Voice AI", "API Integrations", "Workflow Automation"] },
  { title: "Tools", icon: Wrench, skills: ["Git", "GitHub", "VS Code", "Vite", "Tailwind CSS", "Postman"] },
];

const currentlyDeveloping = ["TypeScript", "Advanced React", "Backend Architecture", "System Design", "AI Application Development", "Docker"];

function Skills() {
  return (
    <section className="skills-section skills-section--compact" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="skills-heading">
          <div className="section-label"><span>03</span><span>Skills</span></div>
          <div className="skills-heading__main">
            <motion.h2
              id="skills-title"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              Tools I use to <em>build.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              A practical mix of development, data, automation, and AI tools.
            </motion.p>
          </div>
        </div>

        <div className="skills-grid skills-grid--compact">
          {skillGroups.map(({ title, icon: Icon, skills }, index) => (
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
              <div className="skill-list">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="developing-card developing-card--compact">
          <div>
            <span className="developing-card__eyebrow">Currently developing</span>
            <h3>Still learning. Still building.</h3>
          </div>
          <div className="developing-card__skills">
            {currentlyDeveloping.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
