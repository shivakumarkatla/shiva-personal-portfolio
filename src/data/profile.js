// Single source for personal details, links and availability.

const email = "katlashivakumar2003@gmail.com";

export const profile = {
  name: "Shiva Kumar",
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

const emailSubject = "Portfolio enquiry";

// Opens the visitor's default email app (if one is configured).
export const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}`;

// Fallback for visitors without a working email app: Gmail's web compose.
export const emailComposeUrl = `https://mail.google.com/mail/?${new URLSearchParams({
  view: "cm",
  fs: "1",
  to: email,
  su: emailSubject,
})}`;
