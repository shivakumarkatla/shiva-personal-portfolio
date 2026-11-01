import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import Container from "../ui/Container";
import { mailtoUrl, profile } from "../../data/profile";
import "./Footer.css";

const footerLinks = [
  { label: "Work", to: "/#work" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/#contact" },
];

function Footer() {
  return (
    <footer className="app-footer">
      <Container className="app-footer__inner">
        <div className="app-footer__brand">
          <strong>{profile.name}</strong>
          <p>{profile.roles.join(" · ")}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="app-footer__links">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="app-footer__social">
          <li>
            <a href={mailtoUrl} aria-label={`Email ${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <Github size={18} aria-hidden="true" />
            </a>
          </li>
        </ul>

        <p className="app-footer__copyright">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
