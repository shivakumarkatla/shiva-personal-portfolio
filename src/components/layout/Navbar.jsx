import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { profile } from "../../data/profile";
import { applyTheme, getInitialTheme, saveTheme } from "../../lib/theme";
import "./Navbar.css";

// `section` scrolls on the homepage; `page` is used everywhere else.
const navItems = [
  { label: "Work", section: "work", page: "/projects" },
  { label: "Capabilities", section: "capabilities" },
  { label: "Automation", section: "automation" },
  { label: "About", page: "/about" },
  { label: "Contact", section: "contact" },
];

const trackedSections = ["work", "capabilities", "automation", "process", "contact"];

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8);

  // Apply the current theme. Only a manual toggle is saved.
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    saveTheme(nextTheme);
  }

  // Solid background once the page has scrolled.
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the homepage section currently in view.
  useEffect(() => {
    if (!isHome) return undefined;

    const sections = trackedSections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  function closeMenu() {
    setMenuOpen(false);
  }

  // Mobile menu: focus the first link, trap Tab, close on Escape or outside click,
  // and lock background scrolling.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const menuButton = menuButtonRef.current;
    const header = headerRef.current;
    menuRef.current?.querySelector("a")?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = [...header.querySelectorAll(FOCUSABLE)].filter(
        (element) => element.offsetParent !== null,
      );
      const first = focusable[0];
      const last = focusable.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    function handlePointerDown(event) {
      if (!header.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  // Close the mobile menu if the viewport grows to the desktop layout.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");

    function handleChange(event) {
      if (event.matches) setMenuOpen(false);
    }

    desktop.addEventListener("change", handleChange);
    return () => desktop.removeEventListener("change", handleChange);
  }, []);

  function renderLink(item) {
    if (isHome && item.section) {
      const isActive = activeSection === item.section;
      return (
        <a
          href={`#${item.section}`}
          className={isActive ? "is-active" : undefined}
          aria-current={isActive ? "location" : undefined}
          onClick={closeMenu}
        >
          {item.label}
        </a>
      );
    }

    if (item.page) {
      const isActive =
        pathname === item.page ||
        (item.page === "/projects" && pathname.startsWith("/projects/"));
      return (
        <Link
          to={item.page}
          className={isActive ? "is-active" : undefined}
          aria-current={isActive ? "page" : undefined}
          onClick={closeMenu}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <Link to={`/#${item.section}`} onClick={closeMenu}>
        {item.label}
      </Link>
    );
  }

  const nextThemeLabel = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;
  const contactProps = isHome ? { href: "#contact" } : { to: "/#contact" };

  return (
    <header
      ref={headerRef}
      className={[
        "app-header",
        scrolled && "app-header--scrolled",
        menuOpen && "app-header--menu-open",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Container className="app-header__bar">
        <Link
          className="app-header__brand"
          to="/"
          onClick={closeMenu}
        >
          <span className="app-header__mark" aria-hidden="true">
            SK
          </span>
          {/* Accessible name starts with the visible text (WCAG 2.5.3). */}
          <span className="app-header__name">{profile.name}</span>
          <span className="sr-only">, home</span>
        </Link>

        <nav className="app-header__nav" aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>{renderLink(item)}</li>
            ))}
          </ul>
        </nav>

        <div className="app-header__actions">
          <button
            type="button"
            className="app-header__icon-button"
            onClick={toggleTheme}
            aria-label={nextThemeLabel}
            aria-pressed={theme === "dark"}
            title={nextThemeLabel}
          >
            {theme === "dark" ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </button>

          <Button {...contactProps} size="sm" className="app-header__cta" onClick={closeMenu}>
            Let&apos;s Talk
          </Button>

          <button
            ref={menuButtonRef}
            type="button"
            className="app-header__icon-button app-header__menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <div
        ref={menuRef}
        id="mobile-menu"
        className="app-header__mobile"
        hidden={!menuOpen}
      >
        <Container>
          <nav aria-label="Mobile">
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>{renderLink(item)}</li>
              ))}
            </ul>
          </nav>
          <Button {...contactProps} className="app-header__mobile-cta" onClick={closeMenu}>
            Let&apos;s Talk
          </Button>
        </Container>
      </div>
    </header>
  );
}

export default Navbar;
