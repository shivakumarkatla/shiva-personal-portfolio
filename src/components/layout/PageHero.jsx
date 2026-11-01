import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import "./PageHero.css";

/**
 * Opening section for inner pages: breadcrumbs, eyebrow, h1, lead text,
 * optional actions and an optional aside (e.g. a portrait or project facts).
 */
function PageHero({
  breadcrumbs = [],
  eyebrow,
  title,
  lead,
  actions,
  aside,
  children,
}) {
  return (
    <section className={`page-hero ${aside ? "page-hero--with-aside" : ""}`}>
      <div className="page-hero__backdrop" aria-hidden="true" />
      <Container>
        {breadcrumbs.length > 0 && (
          <nav className="page-hero__breadcrumbs" aria-label="Breadcrumb">
            <ol>
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={crumb.label}>
                    {isLast || !crumb.to ? (
                      <span aria-current={isLast ? "page" : undefined}>
                        {crumb.label}
                      </span>
                    ) : (
                      <Link to={crumb.to}>{crumb.label}</Link>
                    )}
                    {!isLast && <ChevronRight size={14} aria-hidden="true" />}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <div className="page-hero__grid">
          <Reveal className="page-hero__content" y={12}>
            {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}
            <h1 className="page-hero__title">{title}</h1>
            {lead && <div className="page-hero__lead">{lead}</div>}
            {actions && <div className="page-hero__actions">{actions}</div>}
            {children}
          </Reveal>

          {aside && (
            <Reveal className="page-hero__aside" delay={0.1} y={16}>
              {aside}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}

export default PageHero;
