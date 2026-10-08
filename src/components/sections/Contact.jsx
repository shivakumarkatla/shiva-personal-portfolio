import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

const CONTACT_EMAIL = "YOUR_EMAIL_HERE";

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-card">
          <div>
            <div className="section-label"><span>06</span><span>Contact</span></div>
            <motion.h2
              id="contact-title"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              Let&apos;s build something <em>useful.</em>
            </motion.h2>
            <p>I&apos;m open to software development opportunities and conversations around practical technology, AI, automation, and data.</p>
          </div>

          <div className="contact-links">
            <a href={`mailto:${CONTACT_EMAIL}`}><Mail size={17} /> Email me <ArrowUpRight size={16} /></a>
            <a href="https://github.com/shivakumarkatla" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={16} /></a>
            <a href="https://www.linkedin.com/in/shiva-kumar-katla/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
