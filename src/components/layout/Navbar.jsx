import { Link } from "react-router-dom";


const navItems = [
  { label: "About", href: "/about", page: true },
  { label: "Skills", href: "/skills", page: true },
  { label: "Projects", href: "/projects", page: true },
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
  {navItems.map((item) =>
    item.page ? (
      <Link key={item.label} to={item.href}>
        {item.label}
      </Link>
    ) : (
      <a key={item.label} href={item.href}>
        {item.label}
      </a>
    )
  )}
</nav>


 
<a
  className="button button--small"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=katlashivakumar2003@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  Let&apos;s Talk
</a>

      </div>
    </header>
  );
}

export default Navbar;
