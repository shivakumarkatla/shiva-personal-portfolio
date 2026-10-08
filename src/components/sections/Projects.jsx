import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { projects } from "../../data/projects";

function ProjectCard({ project, index }) {
  return (
    <motion.article className="project-card project-card--featured-home" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.04 }}>
      <Link to={`/projects/${project.slug}`} className="project-card__link">
        <div className="project-card__top"><span>{project.number}</span><span>{project.status}</span></div>
        <div className="project-card__body">
          <div><span className="project-card__category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div>
          <div className="project-card__footer"><div className="project-card__tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><span className="project-card__arrow" aria-hidden="true"><ArrowUpRight size={18} /></span></div>
        </div>
      </Link>
    </motion.article>
  );
}

function Projects() {
  const featured = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title"><div className="container">
      <div className="section-heading projects-heading"><div className="section-heading__eyebrow"><span>04</span><span>Selected Work</span></div><div className="projects-heading__main">
        <motion.h2 id="projects-title" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55 }}>Things I&apos;ve<em> built.</em></motion.h2>
        <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55, delay: 0.08 }}>A few projects that best represent how I approach software, automation, and data.</motion.p>
      </div></div>
      <div className="projects-featured">{featured.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
      <div className="projects-section__action"><Link className="text-link projects-view-all" to="/projects">View all projects <ArrowUpRight size={17} /></Link><span>12 projects</span></div>
    </div></section>
  );
}

export default Projects;
