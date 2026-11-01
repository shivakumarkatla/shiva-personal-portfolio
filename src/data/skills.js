// Skill groups for the Skills page. Names come from the previous Skills page
// plus technologies listed in verified project stacks.
// `match` lists the project technology names that count as using a skill
// (defaults to the skill name); matching projects are linked as evidence.
export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend development",
    description:
      "Building user interfaces and connecting them to backend services.",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Recharts" },
      { name: "Axios" },
      { name: "Vite" },
    ],
  },
  {
    id: "backend",
    title: "Backend development",
    description:
      "Building APIs, authentication and database-backed services that connect different parts of a system.",
    skills: [
      { name: "Node.js" },
      { name: "Express.js", match: ["Express"] },
      { name: "REST APIs", match: ["Express"] },
      { name: "JWT authentication", match: ["JWT"] },
    ],
  },
  {
    id: "automation",
    title: "AI & workflow automation",
    description:
      "Connecting AI models, APIs, and workflow tools to automate practical tasks and processes.",
    skills: [
      { name: "n8n" },
      { name: "Make" },
      { name: "OpenAI" },
      { name: "Google Gemini", match: ["Gemini"] },
      { name: "Generative AI", match: ["Generative AI", "LLM"] },
      { name: "Vapi (voice AI)", match: ["Vapi"] },
      { name: "API integrations", match: ["APIs"] },
      { name: "Workflow automation", match: ["n8n", "Make"] },
    ],
  },
  {
    id: "data",
    title: "Data analytics & databases",
    description:
      "Working with data to organize information, analyze patterns, and communicate insights.",
    skills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Microsoft Excel", match: ["Excel"] },
      { name: "Power BI" },
      { name: "Data analysis", match: ["Data Analysis"] },
      { name: "Data visualization", match: ["Data Visualization"] },
    ],
  },
  {
    id: "tools",
    title: "Tools & platforms",
    description:
      "Tools I use to write code, manage projects and test APIs, and the platforms my automations connect to.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Telegram" },
      { name: "Google Sheets" },
      { name: "Google Calendar" },
      { name: "Gmail" },
      { name: "Slack" },
      { name: "Airtable" },
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
