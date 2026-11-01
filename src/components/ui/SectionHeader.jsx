import "./SectionHeader.css";

/**
 * Eyebrow label, heading and optional description for a section.
 * Pass `titleId` and use it as the section's `labelledBy`.
 */
function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  as: Heading = "h2",
  align = "start",
  className = "",
}) {
  return (
    <header
      className={`ui-section-header ui-section-header--${align} ${className}`.trim()}
    >
      {eyebrow && <p className="ui-section-header__eyebrow">{eyebrow}</p>}
      <Heading id={titleId} className="ui-section-header__title">
        {title}
      </Heading>
      {description && (
        <p className="ui-section-header__description">{description}</p>
      )}
    </header>
  );
}

export default SectionHeader;
