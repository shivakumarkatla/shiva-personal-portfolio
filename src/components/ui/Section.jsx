import Container from "./Container";
import "./Section.css";

/**
 * Page section with consistent vertical rhythm.
 * `tone="raised"` uses the first surface colour as the background.
 */
function Section({
  id,
  labelledBy,
  tone = "default",
  className = "",
  children,
  ...props
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`ui-section ui-section--${tone} ${className}`.trim()}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}

export default Section;
