import Reveal from "../ui/Reveal";
import "./CaseStudySection.css";

/** A numbered case-study section with an eyebrow, h2 and content. */
function CaseStudySection({ id, number, eyebrow, title, children }) {
  return (
    // y={0}: fade only. Sections are anchor targets, and a rising animation would
    // leave them offset from where the "On this page" links scroll to.
    <Reveal as="section" id={id} className="case-section" aria-labelledby={`${id}-title`} y={0}>
      <p className="case-section__eyebrow">
        {String(number).padStart(2, "0")} / {eyebrow}
      </p>
      <h2 id={`${id}-title`} className="case-section__title">
        {title}
      </h2>
      <div className="case-section__body">{children}</div>
    </Reveal>
  );
}

export default CaseStudySection;
