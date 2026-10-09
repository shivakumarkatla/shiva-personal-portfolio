import { ArrowLeft, House } from "lucide-react";
import { Link } from "react-router-dom";

function PageNavigation({ backTo = "/", backLabel = "Previous" }) {
  return (
    <nav className="page-navigation" aria-label="Page navigation">
      <Link className="page-navigation__back" to={backTo}>
        <ArrowLeft size={16} aria-hidden="true" />
        <span>{backLabel}</span>
      </Link>

      <Link
        className="page-navigation__home"
        to="/"
        aria-label="Return to homepage"
      >
        <House size={16} aria-hidden="true" />
        <span>Home</span>
      </Link>
    </nav>
  );
}

export default PageNavigation;