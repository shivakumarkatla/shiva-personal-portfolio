// Homepage automation examples and working process. Each example is grounded
// in an existing project (see the matching case study for details).

export const automationExamples = [
  {
    id: "verification",
    iconKey: "verify",
    title: "Document verification & audit workflows",
    description:
      "Field submissions are checked for missing photos or captions, images are analysed with Gemini, results are logged to Google Sheets, and a grant officer makes the final decision in Telegram.",
    flow: ["Telegram", "Validation", "Gemini", "Google Sheets", "Officer approval"],
    project: "ngo-audit-verification",
  },
  {
    id: "scheduling",
    iconKey: "calendar",
    title: "Scheduling & communication workflows",
    description:
      "A Telegram message becomes a Google Calendar event or a Gmail message, handled by an AI agent that keeps the conversation's context.",
    flow: ["Telegram", "AI Agent", "Google Calendar", "Gmail"],
    project: "smart-schedule",
  },
  {
    id: "content",
    iconKey: "sparkles",
    title: "AI-assisted content workflows",
    description:
      "Learning material is turned into summaries, notes, quizzes and practice questions, with answers evaluated and history kept between sessions.",
    flow: ["Source material", "LLM", "Notes & quizzes"],
    project: "llm-learning-system",
    label: "V1",
  },
  {
    id: "data",
    iconKey: "database",
    title: "Data processing & reporting",
    description:
      "Airtable record changes are filtered and sent to Slack through Make, and a scraper collects YouTube video metadata into CSV, Excel or JSON.",
    flow: ["Airtable", "Make", "Slack"],
    project: "airtable-make-slack",
    relatedProject: "youtube-scraper",
  },
];

export const automationBenefits = [
  {
    iconKey: "repeat",
    title: "Less repetitive work",
    text: "Routine steps run on their own instead of being copied by hand.",
  },
  {
    iconKey: "link",
    title: "Connected tools",
    text: "Messaging, calendars, email, sheets and databases work together.",
  },
  {
    iconKey: "check",
    title: "Consistent process",
    text: "The same checks every time, with a person approving what matters.",
  },
];

export const processSteps = [
  {
    title: "Understand the problem",
    text: "I learn how the process works today, who is involved and what a good result looks like, before choosing any tools.",
  },
  {
    title: "Map the workflow",
    text: "I map each step, input and decision, and agree where automation helps and where a person should stay in the loop.",
  },
  {
    title: "Build and integrate",
    text: "I build the application or workflow and connect it to the tools you already use.",
  },
  {
    title: "Test, refine, and hand over",
    text: "I test with realistic cases, fix what breaks, and hand over with notes on how it works.",
  },
];
