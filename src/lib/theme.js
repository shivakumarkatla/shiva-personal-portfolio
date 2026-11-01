// Theme handling. Dark is the default; only a manual toggle is saved.
// Keep the defaults in sync with the inline script in index.html.

const DEFAULT_THEME = "dark";
const STORAGE_KEY = "theme";

const THEME_COLORS = {
  dark: "#0A0B10",
  light: "#F7F8FA",
};

export function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch {
    // Storage can be unavailable (e.g. blocked); fall back to the default.
  }

  return DEFAULT_THEME;
}

export function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLORS[theme]);
}

export function saveTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // The theme still applies for the current page view.
  }
}
