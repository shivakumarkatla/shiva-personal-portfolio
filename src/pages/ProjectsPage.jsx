import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { projects } from "../data/projects";

function ProjectCard({ project, index }) {
  return (
    <motion.article className="project-card project-card--archive" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.035 }}>
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

function ProjectsPage() {
  const featured = projects.filter((project) => project.featured);
  const moreWork = projects.filter((project) => !project.featured);

  return (
    <div className="site-shell">
      <Navbar />
      <main className="projects-page">
        <section className="projects-page__hero section"><div className="container"><span className="eyebrow">Selected work</span><h1 className="display-title">Projects I&apos;ve <span className="display-title__muted">built.</span></h1><p className="lead">A collection of practical work across software development, AI, automation, voice interfaces, and data.</p></div></section>
        <section className="projects-archive-section"><div className="container">
          <div className="projects-page__section-heading"><span>Featured work</span><span>{String(featured.length).padStart(2, "0")} projects</span></div>
          <div className="projects-featured">{featured.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
          <div className="projects-page__section-heading projects-page__section-heading--more"><span>More work</span><span>{String(moreWork.length).padStart(2, "0")} projects</span></div>
          <div className="projects-grid">{moreWork.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
        </div></section>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
