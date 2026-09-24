import { Link } from "react-router-dom";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Journey", href: "/#journey" },
  { label: "Contact", href: "/#contact" },
];

function Navbar() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" to="/" aria-label="Shiva Kumar home">
          SHIVA<span>.</span>
        </Link>

        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button--small" href="/#contact">
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;
