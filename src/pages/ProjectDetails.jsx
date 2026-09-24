import { Link, useParams } from "react-router-dom";

function ProjectDetails() {
  const { slug } = useParams();

  return (
    <main className="section section--placeholder">
      <div className="container">
        <span className="eyebrow">Project</span>
        <h1 className="display-title">{slug}</h1>
        <p className="lead">Project case-study page will be built later.</p>
        <Link className="text-link" to="/">
          ← Back home
        </Link>
      </div>
    </main>
  );
}

export default ProjectDetails;
