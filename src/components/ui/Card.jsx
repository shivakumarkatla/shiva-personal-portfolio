import "./Card.css";

/**
 * Surface panel. `interactive` adds a hover lift and a soft glow that
 * follows the pointer (fine pointers only; static under reduced motion).
 */
function Card({
  as: Tag = "div",
  interactive = false,
  className = "",
  children,
  ...props
}) {
  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--pointer-x",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--pointer-y",
      `${event.clientY - rect.top}px`,
    );
  }

  return (
    <Tag
      className={[
        "ui-card",
        interactive && "ui-card--interactive",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onPointerMove={interactive ? handlePointerMove : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Card;
