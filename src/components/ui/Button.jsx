import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Button or link styled as a button.
 * - `to`: internal route (React Router Link)
 * - `href`: plain link; set `external` to open in a new tab
 * - neither: <button type="button">
 */
function Button({
  children,
  to,
  href,
  external = false,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const classes = [
    "ui-button",
    `ui-button--${variant}`,
    `ui-button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <a className={classes} href={href} {...externalProps} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
