import { architectureBySlug } from "./architecture";
import { caseStudiesBySlug } from "./caseStudies";

const projectSummaries = [
{
  number: "01",
  title: "Full-Stack Expense Tracker",
  slug: "full-stack-expense-tracker",
  status: "Completed",
  category: "Full Stack",
  description:
    "A full-stack expense management application with authentication, CRUD operations, filtering, search, pagination, and dashboard analytics.",
  technologies: [
    "React",
    "Tailwind CSS",
    "Recharts",
    "Axios",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
  ],
  githubUrls: [
    {
      label: "Frontend",
      url: "https://github.com/shivakumarkatla/expense-tracker-frontend",
    },
    {
      label: "Backend API",
      url: "https://github.com/shivakumarkatla/expense-tracker-api",
    },
  ],
  liveDemoUrl:
    "https://expense-tracker-frontend-rho-lake.vercel.app",
  cover: {
    src: "/images/projects/expense-tracker/dashboard.png",
    alt: "Expense Tracker dashboard showing spending totals, a monthly spending trend chart and a breakdown by category",
  },
  featured: true,
},
{
  number: "02",
  title: "Full-Stack Task Manager",
  slug: "full-stack-task-manager",
  status: "Completed",
  category: "Full Stack",
  description:
    "A full-stack task management application with protected user data, task CRUD, filtering, search, sorting, and pagination.",
  technologies: [
    "React",
    "Tailwind CSS",
    "Axios",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
  ],
  githubUrls: [
    {
      label: "Frontend",
      url: "https://github.com/shivakumarkatla/task-manager-frontend",
    },
    {
      label: "Backend API",
      url: "https://github.com/shivakumarkatla/task-manager-api",
    },
  ],
  liveDemoUrl:
    "https://task-manager-frontend-rouge-omega.vercel.app",
  cover: {
    src: "/images/projects/task-manager/dashboard-tasks.png",
    alt: "Task Manager dashboard listing tasks with status filters, status badges and edit and delete actions",
  },
  featured: true,
},
  {
    number: "03",
    title: "NGO Audit Verification",
    slug: "ngo-audit-verification",
    status: "Completed",
    category: "AI & Automation",
    description:
      "An AI-assisted audit workflow combining image analysis, automation, structured records, and human approval.",
    technologies: [
      "n8n",
      "Gemini",
      "Google Sheets",
      "Telegram",
    ],
    githubUrls: [
  {
    label: "Repository",
    url: "https://github.com/shivakumarkatla/ngo-audit-verification-automation",
  },
],
liveDemoUrl: "",
    cover: {
      src: "/images/projects/ngo-audit/field-audit-workflow.png",
      variant: "cover",
      alt: "n8n FieldAudit workflow: a Telegram trigger, a Switch that routes missing captions or photos to alerts, Gemini image analysis, JavaScript processing, a Google Sheets row append and Telegram notifications",
    },
    featured: true,
  },
  {
    number: "04",
    title: "Smart Schedule AI Agent",
    slug: "smart-schedule",
    status: "Completed",
    category: "AI & Automation",
    description:
      "An AI-assisted scheduling workflow connecting conversational input with calendar and productivity actions.",
    technologies: [
      "n8n",
      "OpenAI",
      "Telegram",
      "Google Calendar",
      "Gmail",
    ],
    githubUrls: [
  {
    label: "Repository",
    url: "https://github.com/shivakumarkatla/smart-schedule-ai-agent",
  },
],
liveDemoUrl: "",
    cover: {
      src: "/images/projects/smart-schedule/smart-schedule-workflow.png",
      variant: "cover",
      alt: "n8n Smart Schedule workflow: a Telegram trigger feeding an AI Agent that uses an OpenAI chat model, simple memory, a Google Calendar create-event tool and a Gmail send tool, then replies in Telegram",
    },
    featured: true,
  },
  {
    number: "05",
    title: "Restaurant Reservation Voice Agent",
    slug: "restaurant-reservation-voice-agent",
    status: "V1 Completed",
    category: "Voice AI",
    description:
      "A V1 voice agent for restaurant reservation interactions, designed to capture structured booking information through conversation.",
    technologies: [
      "Vapi",
      "Voice AI",
      "Automation",
      "APIs",
    ],
    featured: false,
  },
  {
    number: "06",
    title: "Excel LMS",
    slug: "excel-lms",
    status: "V1 Completed",
    category: "Data & Learning",
    description:
      "A V1 learning-management system built in Excel to organize learning activity and progress.",
    technologies: [
      "Excel",
      "Data",
      "Learning",
    ],
    featured: false,
  },
  {
    number: "07",
    title: "LLM Learning System",
    slug: "llm-learning-system",
    status: "V1 Completed",
    category: "AI & Learning",
    description:
      "A V1 learning workflow exploring how LLMs can support structured learning and knowledge work.",
    technologies: [
      "LLM",
      "Generative AI",
      "Learning",
    ],
    featured: false,
  },
  {
    number: "08",
    title: "Power BI Analytics Dashboard",
    slug: "power-bi-analytics-dashboard",
    status: "Completed",
    category: "Data & Analytics",
    description:
      "An interactive Power BI dashboard focused on turning structured data into operational views and insights.",
    technologies: [
      "Power BI",
      "Data Analysis",
      "Data Visualization",
    ],
    featured: false,
  },
  {
    number: "09",
    title: "E-commerce Dashboard",
    slug: "e-commerce-dashboard",
    status: "Completed",
    category: "Web Development",
    description:
      "A completed frontend dashboard project focused on presenting e-commerce information through a structured interface.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    featured: false,
  },
  {
    number: "10",
    title: "YouTube Scraper",
    slug: "youtube-scraper",
    status: "V1 Completed",
    category: "Automation",
    description:
      "A V1 automation for collecting and processing YouTube information as part of an automated workflow.",
    technologies: [
      "Python",
      "Automation",
      "APIs",
      "Data",
    ],
    featured: false,
  },
  {
    number: "11",
    title: "Slack — Private Bot Channel",
    slug: "slack-private-bot-channel",
    status: "V1 Completed",
    category: "Automation",
    description:
      "A V1 Slack automation exploring private-channel bot interactions and workflow-driven communication.",
    technologies: [
      "Slack",
      "Automation",
      "APIs",
    ],
    featured: false,
  },
  {
    number: "12",
    title: "Airtable → Make → Slack",
    slug: "airtable-make-slack",
    status: "V1 Completed",
    category: "Automation",
    description:
      "A workflow connecting Airtable data with Make and Slack to automate information flow and notifications.",
    technologies: [
      "Airtable",
      "Make",
      "Slack",
    ],
    featured: false,
  },
];

// Each project carries its case study and architecture (or null) so pages read one source.
export const projects = projectSummaries.map((project) => ({
  ...project,
  caseStudy: caseStudiesBySlug[project.slug] ?? null,
  architecture: architectureBySlug[project.slug] ?? null,
}));

// Filter groups for the projects archive. Each project keeps its own category label.
export const categoryGroups = [
  {
    id: "full-stack",
    label: "Full-stack & Web",
    categories: ["Full Stack", "Web Development"],
  },
  {
    id: "automation",
    label: "AI & Automation",
    categories: ["AI & Automation", "Voice AI", "Automation", "AI & Learning"],
  },
  {
    id: "data",
    label: "Data & Analytics",
    categories: ["Data & Analytics", "Data & Learning"],
  },
];

export function getCategoryGroup(category) {
  return categoryGroups.find((group) => group.categories.includes(category));
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
