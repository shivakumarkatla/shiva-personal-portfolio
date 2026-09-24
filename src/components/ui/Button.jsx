import { Link } from "react-router-dom";

function Button({ children, href, to, variant = "primary", ...props }) {
  const className = `button button--${variant}`;

  if (to) {
    return (
      <Link className={className} to={to} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a className={className} href={href} {...props}>
      {children}
    </a>
  );
}

export default Button;
