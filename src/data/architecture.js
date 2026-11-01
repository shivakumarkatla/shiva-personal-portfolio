// Architecture and workflow outlines for case studies.
// Only projects whose structure was checked against their source repositories
// are included; other case studies simply omit this section.
//
// Step `kind` controls the icon and colour: client, api, data, trigger, ai,
// logic, action.

export const architectureBySlug = {
  "full-stack-expense-tracker": {
    source: "Based on the expense-tracker-frontend and expense-tracker-api repositories.",
    flows: [
      {
        title: "Request flow",
        steps: [
          { kind: "client", label: "React frontend", detail: "Dashboard, transactions and expense forms, styled with Tailwind CSS; charts with Recharts" },
          { kind: "client", label: "Axios client", detail: "Sends authenticated requests to the API" },
          { kind: "api", label: "Express REST API", detail: "Authentication, expense CRUD, filtering and dashboard aggregation; JWT auth and express-validator" },
          { kind: "data", label: "MongoDB", detail: "Users and expenses stored through Mongoose" },
        ],
      },
    ],
  },

  "full-stack-task-manager": {
    source: "Based on the task-manager-frontend and task-manager-api repositories.",
    flows: [
      {
        title: "Request flow",
        steps: [
          { kind: "client", label: "React frontend", detail: "Sign-up, login, password reset and task dashboard, styled with Tailwind CSS" },
          { kind: "client", label: "Axios client", detail: "Sends authenticated requests to the API" },
          { kind: "api", label: "Express REST API", detail: "Authentication with JWT and bcrypt password hashing, task CRUD and status updates" },
          { kind: "data", label: "MongoDB", detail: "Users and tasks stored through Mongoose" },
        ],
      },
    ],
  },

  "ngo-audit-verification": {
    source: "Based on the two n8n workflow exports in the ngo-audit-verification-automation repository.",
    flows: [
      {
        title: "Workflow 1: FieldAudit",
        steps: [
          { kind: "trigger", label: "Telegram Trigger", detail: "Field auditor sends a photo and field notes" },
          {
            kind: "logic",
            label: "Switch",
            detail: "Checks the submission is complete",
            branches: ["Missing caption: Telegram alert asks for field notes", "Missing photo: Telegram alert asks for visual proof"],
          },
          { kind: "ai", label: "Google Gemini", detail: "Analyses the submitted image" },
          { kind: "logic", label: "JavaScript code", detail: "Builds the structured audit record" },
          { kind: "data", label: "Google Sheets", detail: "Appends a row to the Field_Audit sheet" },
          {
            kind: "logic",
            label: "If AI_Status is VERIFIED",
            detail: "Routes the result",
            branches: ["Yes: Telegram message marks a low-risk verification", "No: Telegram message flags an anomaly for manual review"],
          },
        ],
      },
      {
        title: "Workflow 2: GrantOffice",
        steps: [
          { kind: "trigger", label: "Telegram Trigger", detail: "Grant officer taps an approve or reject button" },
          { kind: "action", label: "Telegram", detail: "Answers the button callback" },
          { kind: "logic", label: "JavaScript code", detail: "Reads the officer's decision" },
          { kind: "data", label: "Google Sheets", detail: "Updates the matching audit row" },
          {
            kind: "logic",
            label: "If approved",
            detail: "Routes the decision",
            branches: [
              "Yes: appends a grant transaction row, then notifies the grant officer (disbursement completed) and the trainer (milestone approved)",
              "No: notifies the grant officer (claim rejected or held) and the trainer (field audit notice)",
            ],
          },
        ],
      },
    ],
  },

  "smart-schedule": {
    source: "Based on the n8n workflow export in the smart-schedule-ai-agent repository.",
    diagram: "smart-schedule",
  },
};
