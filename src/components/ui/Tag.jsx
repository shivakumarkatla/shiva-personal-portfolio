import "./Tag.css";

/** Small monospace label for technologies and categories. */
function Tag({ tone = "default", className = "", children, ...props }) {
  return (
    <span className={`ui-tag ui-tag--${tone} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}

export default Tag;
