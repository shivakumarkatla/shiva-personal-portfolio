// Technical skills shown on the Skills page.

export const skillGroups = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Building user interfaces, backend services, and applications that connect different parts of a system.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    number: "02",
    title: "Data & Analytics",
    description:
      "Working with data to organize information, analyze patterns, and communicate insights.",
    skills: [
      "Python",
      "SQL",
      "MySQL",
      "Microsoft Excel",
      "Power BI",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Connecting AI models, APIs, and workflow tools to automate practical tasks and processes.",
    skills: [
      "Generative AI",
      "Google Gemini",
      "n8n",
      "Make",
      "Voice AI",
      "API Integrations",
      "Workflow Automation",
    ],
  },
  {
    number: "04",
    title: "Tools & Development Environment",
    description:
      "Tools I use to write code, manage projects, test APIs, and build frontend applications.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "Tailwind CSS",
      "Postman",
    ],
  },
];

export const learningSkills = [
  "TypeScript",
  "Advanced React",
  "Backend Architecture",
  "System Design",
  "AI Application Development",
  "Docker",
];

// Homepage capability areas. Tools and proof projects are limited to what
// existing projects demonstrate; `proof` holds project slugs.
export const capabilityAreas = [
  {
    id: "full-stack",
    iconKey: "code",
    title: "Full-Stack Development",
    description:
      "Web applications with a React front end, a Node.js and Express API, and a database behind them.",
    points: [
      "Frontend application development",
      "Backend development and REST APIs",
      "Database integration and authentication",
    ],
    tools: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    proof: ["full-stack-expense-tracker", "full-stack-task-manager"],
  },
  {
    id: "automation",
    iconKey: "workflow",
    title: "AI Agents & Workflow Automation",
    description:
      "Workflows and agents that connect messaging, AI models and everyday tools, with people approving what matters.",
    points: [
      "n8n and Make workflows",
      "AI-powered agents with memory and tools",
      "API integrations between apps",
      "Human-in-the-loop approval steps",
      "Business process automation",
    ],
    tools: ["n8n", "Make", "OpenAI", "Gemini", "Vapi", "Telegram", "Slack", "Airtable"],
    proof: ["smart-schedule", "ngo-audit-verification", "airtable-make-slack"],
  },
  {
    id: "data",
    iconKey: "chart",
    title: "Data & Analytics",
    description:
      "Preparing and modelling data, then turning it into dashboards and reports people can use.",
    points: [
      "SQL and data handling",
      "Excel and Power BI",
      "Dashboards and reporting",
    ],
    tools: ["Python", "SQL", "MySQL", "Excel", "Power BI", "DAX"],
    proof: ["power-bi-analytics-dashboard", "excel-lms"],
  },
];
