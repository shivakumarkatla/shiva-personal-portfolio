import "./StatusPill.css";

/**
 * Availability or status label with a coloured dot.
 * `tone="signal"` (teal) is for automation-related statuses.
 */
function StatusPill({ tone = "accent", className = "", children }) {
  return (
    <span className={`ui-status-pill ui-status-pill--${tone} ${className}`.trim()}>
      <span className="ui-status-pill__dot" aria-hidden="true" />
      {children}
    </span>
  );
}

export default StatusPill;
