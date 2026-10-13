
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "About", section: "about", page: "/about" },
  { label: "Skills", section: "skills", page: "/skills" },
  { label: "Projects", section: "projects", page: "/projects" },
  { label: "Journey", section: "journey" },
  { label: "Contact", section: "contact" },
];

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch {
    // Continue with the system preference if storage is unavailable.
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const headerRef = useRef(null);

  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply the selected theme and persist the preference.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem("theme", theme);
    } catch {
      // The theme still works for the current session.
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  // Track the currently visible homepage section.
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = [
      "hero",
      "about",
      "skills",
      "projects",
      "journey",
      "contact",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleSections.length) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHome]);

  // Close the menu with Escape.
  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // Close the menu when clicking outside the header.
  useEffect(() => {
    if (!menuOpen) return;

    function handleOutsideClick(event) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
    };
  }, [menuOpen]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 820px)").matches;

    if (!menuOpen || !isMobile) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container site-header__inner">
        <Link
          className="brand"
          to="/"
          aria-label="Shiva Kumar home"
          onClick={closeMenu}
        >
          SHIVA<span>.</span>
        </Link>

        <nav
          id="primary-navigation"
          className={`nav ${menuOpen ? "nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const homeHref = `/#${item.section}`;
            const isActive =
              isHome && activeSection === item.section;

            if (isHome) {
              return (
                <a
                  key={item.label}
                  href={`#${item.section}`}
                  className={isActive ? "active" : undefined}
                  aria-current={isActive ? "location" : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              );
            }

            if (item.page) {
              const isCurrentPage = pathname === item.page;

              return (
                <Link
                  key={item.label}
                  to={item.page}
                  className={isCurrentPage ? "active" : undefined}
                  aria-current={isCurrentPage ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.label}
                to={homeHref}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${
            theme === "dark" ? "light" : "dark"
          } mode`}
          aria-pressed={theme === "dark"}
          title={`Switch to ${
            theme === "dark" ? "light" : "dark"
          } mode`}
        >
          {theme === "dark" ? (
            <Sun size={20} aria-hidden="true" />
          ) : (
            <Moon size={20} aria-hidden="true" />
          )}
        </button>

        <a
          className="button button--small navbar-cta"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=katlashivakumar2003@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Let's Talk
        </a>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
