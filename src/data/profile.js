// Single source for personal details, links and availability.

const email = "katlashivakumar2003@gmail.com";

export const profile = {
  name: "Shiva Kumar",
  brand: "SHIVA",
  roles: ["Software Developer", "AI Automation Engineer"],
  email,
  siteUrl: "https://shivas-personal-portfolio.netlify.app",
  links: {
    github: "https://github.com/shivakumarkatla",
    linkedin: "https://www.linkedin.com/in/shivakumarkatla/",
  },
  availability: {
    employment: "Open to software development roles",
    freelance: "Open to freelance AI automation projects",
  },
};

export const mailtoUrl = `mailto:${email}`;

// Gmail web compose link used by the current contact buttons.
export const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
