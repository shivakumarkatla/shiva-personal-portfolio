import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2 , ExternalLink} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageNavigation from "../components/layout/PageNavigation";
import { projects } from "../data/projects";
import ProjectScreenshotCarousel from "../components/ProjectScreenshotCarousel";
import PageMetadata from "../components/seo/PageMetadata";


const expenseTrackerCaseStudy = {
  introduction:
    "A full-stack expense management application that lets users manage personal expenses through a connected React frontend and backend API.",

    screenshots: [
      {
      src: "/images/projects/expense-tracker/register.png",
      title: "Registration",
      alt: "Expense Tracker registration page",
      description:
        "Create an account to start managing expenses.",
    },
    {
      src: "/images/projects/expense-tracker/login.png",
      title: "Login",
      alt: "Expense Tracker login page",
      description:
        "Sign in to access your expense records.",
    },
    {
      src: "/images/projects/expense-tracker/dashboard.png",
      title: "Dashboard",
      alt: "Expense Tracker dashboard",
      description:
        "View spending summaries, category breakdowns, and recent transactions.",
    },
    {
      src: "/images/projects/expense-tracker/transactions.png",
      title: "Transactions",
      alt: "Expense Tracker transactions page",
      description:
        "Review and manage recorded expenses.",
    },
    {
      src: "/images/projects/expense-tracker/add-expense.png",
      title: "Add Expense",
      alt: "Expense Tracker add expense form",
      description:
        "Enter the details needed to record an expense.",
    },
  ],

  problem: [
    "Expense records need to be easy to create, review, update, and remove.",
    "Each user's financial records must remain separate from other users' data.",
    "Users need useful summaries of their spending, not just a list of individual transactions.",
  ],

  solution:
    "I built a full-stack application with authentication, expense management, transaction discovery, and dashboard analytics. The frontend communicates with the backend API to retrieve and manage each user's expense data.",

  features: [
    {
      title: "Authentication",
      description:
        "Registration and login provide the entry point to the application.",
    },
    {
      title: "Expense management",
      description:
        "Create, view, edit, and delete expense records through the application.",
    },
    {
      title: "User-specific data",
      description:
        "Expense access is isolated by user so one account cannot access another user's expense records.",
    },
    {
      title: "Transaction discovery",
      description:
        "Search, category and date filtering, sorting, and pagination help users navigate expense records.",
    },
    {
      title: "Dashboard analytics",
      description:
        "Aggregated totals, monthly summaries, category-wise spending, and recent transactions provide an overview of expenses.",
    },
    {
      title: "Connected frontend",
      description:
        "Dashboard and transaction pages work with the backend API rather than relying only on static sample data.",
    },
  ],

  implementation: [
    {
      title: "Frontend",
      description:
        "React provides the interface for the dashboard and transaction management pages. The interface requests data from the backend API and displays the returned results.",
    },
    {
      title: "Backend API",
      description:
        "Node.js and Express handle application requests for authentication and expense management.",
    },
    {
      title: "Data storage",
      description:
        "MongoDB stores expense records used by the application.",
    },
    {
      title: "Access control",
      description:
        "JWT-based authentication supports protected access. User-specific data handling keeps expense operations scoped to the authenticated user.",
    },
    {
      title: "Filtering and aggregation",
      description:
        "The application supports transaction search and filtering, pagination, and aggregated dashboard results such as total spending and category-wise totals.",
    },
  ],

  learnings: [
    "Connecting frontend components to a backend requires consistent request handling and response structures.",
    "Authentication alone is not enough: data access must also be scoped to the correct user.",
    "Search, filters, sorting, and pagination need to work together with the API and the displayed transaction list.",
    "Dashboard summaries require aggregation logic that agrees with the underlying expense records.",
    "Testing with an empty account is useful for verifying that zero totals and empty transaction states are handled correctly.",
  ],
};

function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  <PageMetadata
  title={project.title}
  description={project.description}
/>

  if (!project) {
    return (
      <div className="site-shell">
        <Navbar />
        <main className="section">
          <div className="container">
            <span className="eyebrow">Project not found</span>
            <h1 className="display-title">
              This project doesn&apos;t exist.
            </h1>
            <p className="lead">
              The project may have been moved or the URL may be incorrect.
            </p>
            <Link className="text-link" to="/projects">
              <ArrowLeft size={16} /> Back to projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

const caseStudyBySlug = {
  "full-stack-expense-tracker": expenseTrackerCaseStudy,
  "full-stack-task-manager": taskManagerCaseStudy,
  "ngo-audit-verification": ngoAuditCaseStudy,
  "smart-schedule": smartScheduleCaseStudy,
"restaurant-reservation-voice-agent": vapiVoiceAgentCaseStudy,
"excel-lms": excelLmsCaseStudy,
"llm-learning-system": llmLearningSystemCaseStudy,
"power-bi-analytics-dashboard": powerBiCaseStudy,
"e-commerce-dashboard": ecommerceDashboardCaseStudy,
"youtube-scraper": youtubeScraperCaseStudy,
"slack-private-bot-channel": slackBotCaseStudy,
"airtable-make-slack": airtableMakeSlackCaseStudy,
};

const caseStudy = caseStudyBySlug[project.slug] ?? null;

  return (
    <div className="site-shell">
      <Navbar />

      <main className="project-detail-page">
        <div className="container">
          <PageNavigation
            backTo="/projects"
            backLabel="Back to Projects"
          />

          <section className="project-detail-hero">
            <span className="eyebrow">
              {project.category} / {project.status}
            </span>

            <h1 className="display-title">{project.title}</h1>

            <p className="lead">
              {caseStudy
                ? caseStudy.introduction
                : project.description}
            </p>

            <div className="project-detail__technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            
{(project.githubUrls?.length > 0 || project.liveDemoUrl) && (
  
<div className="project-detail__links">
  {project.githubUrls?.map((repo) => (
    <a
      key={repo.url}
      className="button button--secondary"
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>GitHub</span>
      <span>{repo.label}</span>
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  ))}

  {project.liveDemoUrl && (
    <a
      className="button button--primary"
      href={project.liveDemoUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ExternalLink size={17} aria-hidden="true" />
      <span>Live Demo</span>
    </a>
  )}
</div>
)}

          </section>


{[
  "full-stack-expense-tracker",
  "full-stack-task-manager",
  "ngo-audit-verification",
  "smart-schedule",
].includes(project.slug) &&
  caseStudy?.screenshots && (
    <ProjectScreenshotCarousel
      screenshots={caseStudy.screenshots}
    />
  )}

          {caseStudy ? (
            <>
              <section className="project-detail__section">
                <span className="eyebrow">01 / The Problem</span>
                <h2>What needed to be solved?</h2>
                <ul className="project-detail__list">
                  {caseStudy.problem.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="project-detail__section">
                <span className="eyebrow">02 / The Solution</span>
                <h2>From individual records to a connected application</h2>
                <p>{caseStudy.solution}</p>
              </section>

              <section className="project-detail__section">
                <span className="eyebrow">03 / Key Features</span>
                <h2>What the application can do</h2>

                <div className="project-detail__feature-grid">
                  {caseStudy.features.map((feature) => (
                    <article
                      className="project-detail__feature"
                      key={feature.title}
                    >
                      <CheckCircle2
                        size={18}
                        aria-hidden="true"
                      />
                      <div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="project-detail__section">
                <span className="eyebrow">04 / Technical Approach</span>
                <h2>How it was built</h2>

                <div className="project-detail__implementation">
                  {caseStudy.implementation.map((item) => (
                    <article
                      className="project-detail__implementation-item"
                      key={item.title}
                    >
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="project-detail__section">
                <span className="eyebrow">05 / Lessons Learned</span>
                <h2>What I learned building it</h2>

                <ul className="project-detail__list">
                  {caseStudy.learnings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            <section className="project-detail__section">
              <span className="eyebrow">Case study in progress</span>
              <h2>More about this project</h2>
              <p>
                This page currently presents the project summary.
                Its implementation details, key decisions, and
                lessons learned will be documented after the
                project-specific details are reviewed.
              </p>
            </section>
          )}

          <div className="project-detail__back">
            <Link className="text-link" to="/projects">
              <ArrowLeft size={16} /> All projects
            </Link>

            <Link className="text-link" to="/">
              Home <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


const taskManagerCaseStudy = {
  introduction:
    "A full-stack task management application for organizing tasks, updating their status, and managing work through a connected frontend and backend.",

  
screenshots: [
  {
    src: "/images/projects/task-manager/signup.png",
    title: "Registration",
    alt: "Task Manager registration screen",
    description:
      "Create an account to start organizing and managing tasks.",
  },
  {
    src: "/images/projects/task-manager/login.png",
    title: "Login",
    alt: "Task Manager login screen",
    description:
      "Sign in to access your tasks and dashboard.",
  },
  {
    src: "/images/projects/task-manager/forgot-password.png",
    title: "Forgot Password",
    alt: "Task Manager forgot password screen",
    description:
      "Start the password recovery process.",
  },
  {
    src: "/images/projects/task-manager/reset-password.png",
    title: "Reset Password",
    alt: "Task Manager reset password screen",
    description:
      "Set a new password through the reset flow.",
  },
  {
    src: "/images/projects/task-manager/dashboard-empty.png",
    title: "Empty Dashboard",
    alt: "Task Manager dashboard with no tasks",
    description:
      "A clean starting state before tasks are added.",
  },
  {
    src: "/images/projects/task-manager/dashboard-tasks.png",
    title: "Dashboard with Tasks",
    alt: "Task Manager dashboard displaying tasks",
    description:
      "View and manage tasks from the populated dashboard.",
  },
],

  
  problem: [
    "Tasks need a clear lifecycle from creation to completion.",
    "Users need to update and remove tasks without manually managing stored records.",
    "Invalid input and failed operations need to be handled without leaving the interface in an unclear state.",
  ],

  solution:
    "I built a task management application with registration and login, task creation and editing, deletion, status management, and a connected interface for working with tasks.",

  features: [
    {
      title: "Authentication",
      description:
        "Registration and login provide access to the task management application.",
    },
    {
      title: "Task management",
      description:
        "Create, view, update, and delete tasks through the application.",
    },
    {
      title: "Status and completion",
      description:
        "Manage task status and mark tasks as completed as work progresses.",
    },
    {
      title: "Connected frontend",
      description:
        "The task management interface connects to the backend to perform task operations.",
    },
    {
      title: "Input validation",
      description:
        "Validate task input to help prevent invalid data from being submitted.",
    },
    {
      title: "Error handling",
      description:
        "Handle invalid input and operation errors so failures can be communicated instead of silently ignored.",
    },
  ],

  implementation: [
    {
      title: "Frontend",
      description:
        "The frontend provides the task list and task management interface, allowing users to interact with tasks through the application.",
    },
    {
      title: "Backend API",
      description:
        "The backend handles authentication and task-related requests, keeping application operations separate from the user interface.",
    },
    {
      title: "Task lifecycle",
      description:
        "Task creation, retrieval, updates, deletion, and completion status are supported by the application.",
    },
    {
      title: "Validation and errors",
      description:
        "Input validation and error handling help the application respond to invalid data and unsuccessful operations.",
    },
  ],

  learnings: [
    "Building a full-stack application requires coordinating frontend actions with backend API behavior.",
    "Task status needs to remain consistent between the user interface and stored data.",
    "Validation should prevent invalid input from reaching the normal task workflow.",
    "Error handling is part of the user experience, not just a backend concern.",
    "Separating interface logic from API operations makes the application easier to reason about and maintain.",
  ],
};


const ngoAuditCaseStudy = {
  introduction:
    "An AI-assisted field-audit verification workflow built with n8n, Google Gemini, Google Sheets, and Telegram, combining automated image analysis with human review.",

    
screenshots: [
  {
    src: "/images/projects/ngo-audit/field-submission.png.png",
    title: "Field Submission",
    alt: "Field auditor submitting a report through Telegram",
    description:
      "The field auditor submits activity details and supporting visual evidence.",
  },
  {
    src: "/images/projects/ngo-audit/validation.png.png",
    title: "Photo Validation",
    alt: "Telegram field submission with photo evidence",
    description:
      "The bot checks whether the required field notes and visual proof have been provided.",
  },
  {
    src: "/images/projects/ngo-audit/field-audit-workflow.png",
    title: "Field Audit Workflow",
    alt: "n8n field audit verification workflow",
    description:
      "The workflow processes field submissions and records audit information.",
  },
  {
    src: "/images/projects/ngo-audit/grant-office-workflow.png",
    title: "Grant Office Workflow",
    alt: "n8n grant office approval workflow",
    description:
      "The grant office workflow handles the officer's review decision and related notifications.",
  },
  {
    src: "/images/projects/ngo-audit/approval-and-disbursement.png.png",
    title: "Approval and Disbursement",
    alt: "Telegram grant officer review and disbursement confirmation",
    description:
      "The officer reviews the audit and the interaction displays the resulting approval or release confirmation.",
  },
],


  problem: [
    "Field-audit submissions need to be checked for required information before they can be processed.",
    "Audit findings need to be organized into structured records for review.",
    "Grant-officer decisions need to be captured and communicated to the relevant people.",
  ],

  solution:
    "I built two connected n8n workflows. The first handles field-audit submissions, checks for missing information, analyzes images with Google Gemini, and records results in Google Sheets. The second processes grant-officer decisions and updates the corresponding audit record before sending notifications.",

  features: [
    {
      title: "Submission validation",
      description:
        "A Telegram Trigger receives submissions, and a Switch node routes cases with missing captions or images to separate alert paths.",
    },
    {
      title: "AI-assisted image analysis",
      description:
        "Google Gemini analyzes submitted images, providing an AI-assisted step in the field-audit workflow.",
    },
    {
      title: "Structured audit records",
      description:
        "JavaScript processing prepares the data before the workflow appends a row to the Field_Audit Google Sheet.",
    },
    {
      title: "Grant-officer decisions",
      description:
        "A separate workflow receives Telegram callback queries and processes the grant officer's decision.",
    },
    {
      title: "Record updates",
      description:
        "The decision workflow updates the relevant row in Google Sheets and uses conditional routing for subsequent actions.",
    },
    {
      title: "Notifications",
      description:
        "Telegram messages communicate workflow alerts and decision outcomes to the relevant participants.",
    },
  ],

  implementation: [
    {
      title: "Workflow 1 — FieldAudit",
      description:
        "A Telegram Trigger starts the workflow. A Switch node routes submissions according to whether the caption and image are present. Valid submissions proceed to Gemini image analysis, JavaScript processing, and a Google Sheets append operation.",
    },
    {
      title: "Workflow 2 — GrantOffice",
      description:
        "A Telegram Trigger receives callback queries. A JavaScript node processes the decision, Google Sheets updates the corresponding record, and an If node routes the result to notification actions.",
    },
    {
      title: "AI and data processing",
      description:
        "Gemini provides image analysis, while JavaScript prepares and processes workflow data before spreadsheet operations.",
    },
    {
      title: "Human oversight",
      description:
        "The workflow incorporates a grant-officer decision rather than treating AI image analysis as final approval.",
    },
  ],

  learnings: [
    "Splitting a workflow into submission processing and decision handling makes the stages easier to distinguish.",
    "Validating required inputs early allows missing information to be handled through dedicated alert paths.",
    "AI analysis, structured record keeping, and human decisions serve different purposes and should remain distinct.",
    "Conditional routing helps direct workflow execution according to the available data or decision.",
    "Notifications and record updates are important parts of an operational workflow, not just optional additions.",
  ],
};


const smartScheduleCaseStudy = {
  introduction:
    "An AI-powered scheduling assistant built with n8n that accepts conversational requests through Telegram, maintains context across messages, and integrates with Google Calendar and Gmail.",

    
screenshots: [
  {
    src: "/images/projects/smart-schedule/telegram-request.png",
    title: "Natural Language Request",
    alt: "Smart Schedule Telegram bot receiving a calendar meeting request",
    description:
      "Request a meeting using natural language, including its date, time, guest, and purpose.",
  },
  {
    src: "/images/projects/smart-schedule/smart-schedule-workflow.png",
    title: "Workflow Overview",
    alt: "Smart Schedule automation workflow",
    description:
      "The automation connects the conversational request to the relevant calendar and email actions.",
  },
  {
    src: "/images/projects/smart-schedule/telegram-confirmation.png",
    title: "Bot Confirmation",
    alt: "Smart Schedule bot confirming meeting creation and email invitation",
    description:
      "The bot reports that the calendar event was created and the email invitation was sent.",
  },
  {
    src: "/images/projects/smart-schedule/calendar-event.png",
    title: "Google Calendar Event",
    alt: "Google Calendar displaying the scheduled meeting",
    description:
      "Verify the created meeting in Google Calendar.",
  },
  {
    src: "/images/projects/smart-schedule/email-confirmation.png",
    title: "Email Invitation",
    alt: "Gmail displaying the meeting invitation and agenda",
    description:
      "The invitation includes the meeting time, agenda, and discussion points.",
  },
],


  problem: [
    "Scheduling through a conversational interface requires interpreting requests expressed in natural language.",
    "Follow-up messages need context so users can continue a conversation without restating everything.",
    "Calendar operations require the assistant to connect user requests to the appropriate tools and integrations.",
  ],

  solution:
    "I built an AI agent workflow in n8n that receives conversational requests through Telegram, uses conversational memory to maintain context, and selects available tools to handle scheduling tasks through Google Calendar and Gmail.",

  features: [
    {
      title: "Telegram interface",
      description:
        "Users interact with the scheduling assistant through conversational messages in Telegram.",
    },
    {
      title: "Conversational memory",
      description:
        "The workflow maintains conversational context across messages, supporting follow-up requests.",
    },
    {
      title: "Google Calendar integration",
      description:
        "The agent can use Google Calendar to create or modify calendar events.",
    },
    {
      title: "Gmail integration",
      description:
        "Gmail is connected as an available integration within the scheduling assistant workflow.",
    },
    {
      title: "AI request interpretation",
      description:
        "The AI agent interprets natural-language requests to determine the appropriate action.",
    },
    {
      title: "Tool selection",
      description:
        "The agent selects from its available integrations to carry out supported requests.",
    },
  ],

  implementation: [
    {
      title: "Workflow orchestration",
      description:
        "n8n connects the conversational entry point, AI agent, memory, and external integrations into a coordinated workflow.",
    },
    {
      title: "Conversational interface",
      description:
        "Telegram provides the interface for receiving user requests and continuing conversations.",
    },
    {
      title: "Context and memory",
      description:
        "Conversational memory helps the agent retain context between messages instead of treating each interaction as entirely separate.",
    },
    {
      title: "Calendar operations",
      description:
        "Google Calendar integration enables the agent to create or modify calendar events based on supported requests.",
    },
    {
      title: "Email integration",
      description:
        "Gmail is connected as another available tool. The specific email actions are not described here because they have not been confirmed.",
    },
    {
      title: "Agent tool selection",
      description:
        "The agent interprets requests and chooses from its configured tools rather than relying on a single fixed conversational response.",
    },
  ],

  learnings: [
    "Natural-language interfaces require translating flexible user requests into structured actions.",
    "Conversational memory is important when an interaction spans multiple messages.",
    "Connecting external services requires coordinating the agent's decisions with the capabilities of each integration.",
    "Tool selection is a key part of an AI workflow because different requests require different actions.",
    "A useful scheduling assistant needs to do more than generate text: it must connect requests to real application operations.",
  ],
};

const vapiVoiceAgentCaseStudy = {
  introduction:
    "A V1 restaurant reservation voice agent built with Vapi that speaks with callers, collects reservation preferences, and confirms the details gathered during the conversation.",

  problem: [
    "Making a reservation by phone requires callers to communicate their preferences through a natural conversation.",
    "Reservation details such as the restaurant, date, time, and party size need to be collected clearly.",
    "The caller needs an opportunity to review the collected details before the interaction ends.",
  ],

  solution:
    "I built a voice-based restaurant reservation assistant using Vapi. It handles a conversation with the caller, gathers the requested reservation details, and confirms the collected information conversationally.",

  features: [
    {
      title: "Voice interaction",
      description:
        "Accepts spoken requests through Vapi and provides a voice-based interface for the caller.",
    },
    {
      title: "Conversational handling",
      description:
        "Handles a back-and-forth conversation instead of requiring the caller to complete a static form.",
    },
    {
      title: "Reservation details",
      description:
        "Collects key details such as the requested date, time, and party size.",
    },
    {
      title: "Restaurant preferences",
      description:
        "Captures the restaurant name or the caller's stated reservation preference.",
    },
    {
      title: "Detail confirmation",
      description:
        "Repeats or confirms the collected reservation details with the caller.",
    },
    {
      title: "V1 implementation",
      description:
        "Demonstrates a conversational reservation flow while leaving real booking-system integration unclaimed.",
    },
  ],

  implementation: [
    {
      title: "Voice agent platform",
      description:
        "Vapi provides the voice-agent interface for interacting with callers.",
    },
    {
      title: "Conversation flow",
      description:
        "The agent guides the conversation to collect the required reservation information and confirm the details gathered.",
    },
    {
      title: "Information collection",
      description:
        "The flow focuses on identifying the restaurant preference, requested date and time, and party size.",
    },
    {
      title: "Current limitations",
      description:
        "This case study documents the confirmed V1 conversation capabilities. A successful conversation does not, by itself, establish that a restaurant reservation has been created or confirmed by a booking system.",
    },
  ],

  learnings: [
    "Voice interfaces need to gather structured information through flexible, natural conversation.",
    "Confirming collected details gives callers a chance to catch misunderstandings before proceeding.",
    "Date and time interpretation requires careful handling, including timezone context.",
    "A conversational confirmation must be distinguished from a confirmed booking in an external reservation system.",
    "A useful V1 makes its capabilities and limitations explicit so callers are not misled.",
  ],
};


const excelLmsCaseStudy = {
  introduction:
    "A V1 learning management system built in Microsoft Excel to organize learning resources, track progress, and summarize learning activity through formulas, data validation, and visual reports.",

  problem: [
    "Learning resources need to be organized so learners can find and manage their learning activities.",
    "Progress needs to be recorded consistently to make completed and ongoing learning visible.",
    "Learning activity becomes easier to review when individual records are summarized in a dashboard.",
  ],

  solution:
    "I built an Excel-based learning management system that combines structured learning records, progress tracking, formula-driven calculations, validated inputs, and visual summaries in one workbook.",

  features: [
    {
      title: "Learning-resource organization",
      description:
        "Organizes courses or learning resources in a structured format within Excel.",
    },
    {
      title: "Progress tracking",
      description:
        "Records learning progress or completion so learning activity can be monitored.",
    },
    {
      title: "Learning dashboard",
      description:
        "Provides a summary of learning activity to make progress easier to review.",
    },
    {
      title: "Formula-driven calculations",
      description:
        "Uses Excel formulas to calculate or update relevant learning information.",
    },
    {
      title: "Data validation",
      description:
        "Uses validation rules and dropdown lists to support consistent data entry.",
    },
    {
      title: "Visual reporting",
      description:
        "Uses charts or visual reports to present learning information in a more accessible format.",
    },
  ],

  implementation: [
    {
      title: "Structured learning records",
      description:
        "Excel provides the workbook structure for organizing courses or learning resources and recording progress.",
    },
    {
      title: "Progress calculations",
      description:
        "Formulas support calculations or summaries derived from the learning data entered into the workbook.",
    },
    {
      title: "Controlled data entry",
      description:
        "Data validation and dropdowns help standardize inputs and reduce inconsistent entries.",
    },
    {
      title: "Dashboard and charts",
      description:
        "A summary view and visual reports help present learning activity and progress without requiring users to inspect every individual record.",
    },
  ],

  learnings: [
    "A spreadsheet can serve as a practical learning-management tool when its data is structured carefully.",
    "Formula-driven calculations reduce the need to repeatedly summarize records manually.",
    "Data validation helps improve consistency when information is entered by users.",
    "Dashboards and charts make progress information easier to interpret than raw records alone.",
    "A spreadsheet-based solution can be useful for a defined workflow, while its suitability for larger or multi-user systems depends on requirements that this V1 does not establish.",
  ],
};


const llmLearningSystemCaseStudy = {
  introduction:
    "An LLM-powered learning system designed to turn learning materials into structured study resources, support questions and practice, evaluate answers, and retain learning history across sessions.",

  problem: [
    "Learning materials can be difficult to turn into organized, actionable study resources.",
    "Learners need ways to ask questions, review key concepts, and practice what they have learned.",
    "Without a record of previous learning activity, it can be harder to revisit earlier work and monitor progress.",
  ],

  solution:
    "I built a learning workflow that uses large language models to summarize learning materials, answer questions based on provided content, generate notes and quizzes, organize topics into a curriculum, evaluate answers, and retain learning history.",

  features: [
    {
      title: "Learning-material summaries",
      description:
        "Summarizes provided learning materials or documents into more concise content for review.",
    },
    {
      title: "Context-based question answering",
      description:
        "Answers questions based on the learning materials provided to the system.",
    },
    {
      title: "Structured notes",
      description:
        "Generates organized notes and key takeaways to support revision.",
    },
    {
      title: "Quizzes and practice",
      description:
        "Generates quizzes or practice questions from learning content.",
    },
    {
      title: "Curriculum organization",
      description:
        "Organizes topics into a structured learning curriculum.",
    },
    {
      title: "Answer evaluation",
      description:
        "Evaluates learner answers or learning progress as part of the learning workflow.",
    },
    {
      title: "Learning history",
      description:
        "Stores learning history or retains information from prior sessions to support continuity.",
    },
  ],

  implementation: [
    {
      title: "Learning-material processing",
      description:
        "The workflow uses LLM capabilities to transform provided learning materials into summaries, notes, and question-answering support.",
    },
    {
      title: "Learning activity generation",
      description:
        "Learning content is used to generate practice questions and quizzes that support active recall.",
    },
    {
      title: "Curriculum structure",
      description:
        "Topics are organized into a curriculum so learning can be approached in a more structured sequence.",
    },
    {
      title: "Evaluation",
      description:
        "Learner answers or progress are evaluated as part of the system's learning process. This does not imply independently validated assessment accuracy.",
    },
    {
      title: "History and continuity",
      description:
        "Learning history is stored or retained across sessions, allowing previous learning activity to be revisited.",
    },
  ],

  learnings: [
    "LLMs can support several stages of learning, from understanding material to generating practice and reviewing answers.",
    "Summaries and notes help organize information, while quizzes encourage learners to retrieve information actively.",
    "Grounding answers in provided learning materials helps align responses with the content being studied, though outputs still need verification.",
    "A structured curriculum gives learning activities a clearer sequence than treating every topic as an isolated request.",
    "Retaining learning history can support continuity, but meaningful progress evaluation depends on what is recorded and how it is assessed.",
  ],
};


const powerBiCaseStudy = {
  introduction:
    "An interactive Power BI analytics dashboard that transforms data into structured reports using Power Query, data modeling, DAX calculations, and interactive visualizations.",

  problem: [
    "Raw data often needs cleaning and transformation before it can support meaningful analysis.",
    "Related data needs to be modeled correctly so metrics and visualizations can work together.",
    "Users need a clear way to monitor summary metrics, explore data, and identify insights without relying only on raw tables.",
  ],

  solution:
    "I built a Power BI dashboard that combines data preparation, relationships between tables, DAX calculations, KPI summaries, and interactive reports. The dashboard allows users to explore the available data through slicers, filters, and drill-down interactions.",

  features: [
    {
      title: "Data preparation",
      description:
        "Uses Power Query to clean and transform data before it is used in reports.",
    },
    {
      title: "Data modeling",
      description:
        "Uses a data model with relationships between tables to support connected analysis.",
    },
    {
      title: "DAX calculations",
      description:
        "Uses DAX measures or calculated columns to derive values for analysis and reporting.",
    },
    {
      title: "KPI cards",
      description:
        "Presents key summary metrics in dedicated dashboard cards.",
    },
    {
      title: "Interactive visualizations",
      description:
        "Uses charts and visual elements to help users explore the available data.",
    },
    {
      title: "Filters and drill-downs",
      description:
        "Provides slicers, filters, and drill-down interactions to examine data at different levels.",
    },
    {
      title: "Business insights",
      description:
        "Uses the dashboard to identify and communicate insights derived from the underlying data.",
    },
    {
      title: "Data refresh",
      description:
        "Includes a configured data-refresh process to update the report from its connected data source.",
    },
  ],

  implementation: [
    {
      title: "Power Query transformations",
      description:
        "Data cleaning and transformation prepare the source data for analysis before it is loaded into the reporting model.",
    },
    {
      title: "Data model and relationships",
      description:
        "Relationships between tables organize how data is connected and analyzed across the report.",
    },
    {
      title: "DAX calculations",
      description:
        "Measures or calculated columns provide derived values used in the dashboard's metrics and visualizations.",
    },
    {
      title: "Report design",
      description:
        "KPI cards, summary metrics, and charts present information in a structured visual layout.",
    },
    {
      title: "Interactive analysis",
      description:
        "Slicers, filters, and drill-downs let users explore the report instead of viewing only fixed summaries.",
    },
    {
      title: "Data refresh",
      description:
        "A refresh process is configured to update report data. The exact schedule and refresh environment are not specified in this case study.",
    },
  ],

  learnings: [
    "Reliable reporting begins with preparing and validating the underlying data.",
    "Data relationships affect how metrics and visualizations interact, making data modeling an important part of dashboard development.",
    "DAX calculations help translate analytical requirements into reusable metrics.",
    "KPI cards provide quick summaries, while interactive charts allow users to investigate the details behind those summaries.",
    "Filters and drill-downs make dashboards more useful for exploration than static reports.",
    "Business insights should be grounded in the actual data and analysis rather than inferred from the presence of visualizations alone.",
  ],
};


const ecommerceDashboardCaseStudy = {
  introduction:
    "A responsive e-commerce analytics dashboard built with React, JavaScript, and CSS. It presents sales, revenue, and product performance information through summary cards, charts, and data tables using static sample data.",

  problem: [
    "E-commerce information can be difficult to understand when it is presented only as raw data.",
    "Users need a clear overview of important metrics alongside more detailed product or sales information.",
    "A dashboard should make information easy to explore through visualizations, search, filtering, or sorting.",
    "The interface should remain usable across different screen sizes.",
  ],

  solution:
    "I developed a frontend e-commerce dashboard that organizes sample business data into summary cards, visualizations, and tables. The interface supports data exploration through search, filtering, or sorting and uses a responsive layout for different screen sizes.",

  features: [
    {
      title: "Dashboard overview",
      description:
        "A structured dashboard layout with summary cards that highlight key information from the sample data.",
    },
    {
      title: "Sales and revenue analytics",
      description:
        "Displays sales and revenue information using the available sample dataset.",
    },
    {
      title: "Product performance",
      description:
        "Presents product-related performance information to support visual analysis.",
    },
    {
      title: "Charts and visualizations",
      description:
        "Uses visual representations of data to make information easier to understand and compare.",
    },
    {
      title: "Data tables",
      description:
        "Displays product or sales records in a structured tabular format.",
    },
    {
      title: "Search, filtering, and sorting",
      description:
        "Provides data exploration controls through implemented search, filter, or sorting functionality.",
    },
    {
      title: "Responsive interface",
      description:
        "Adapts the dashboard layout to different screen sizes.",
    },
    {
      title: "Sample data",
      description:
        "Uses static sample data to demonstrate dashboard features without requiring a live backend or database.",
    },
  ],

  implementation: [
    {
      title: "React interface",
      description:
        "React is used to build and organize the dashboard's user interface.",
    },
    {
      title: "Dashboard layout",
      description:
        "Summary cards, charts, and tables are arranged to provide both an overview and detailed information.",
    },
    {
      title: "Data presentation",
      description:
        "Static sample data is presented through visualizations, summary metrics, and tabular views.",
    },
    {
      title: "Data exploration",
      description:
        "Search, filtering, or sorting controls help users examine the available records.",
    },
    {
      title: "Responsive styling",
      description:
        "CSS is used to support the dashboard layout across different screen sizes.",
    },
  ],

  learnings: [
    "Organizing information into summary cards and detailed views helps make dashboards easier to navigate.",
    "Visualizations and tables serve different purposes and can complement each other in an analytics interface.",
    "Search, filtering, and sorting improve the usability of data-heavy interfaces.",
    "Responsive design is important when dashboards contain multiple information-dense components.",
    "Static datasets are useful for demonstrating frontend functionality, but they do not establish that an application supports live business data.",
  ],
};


const youtubeScraperCaseStudy = {
  introduction:
    "A YouTube data collection tool that accepts a URL, keyword, or search query, collects metadata for multiple videos, and exports results in structured formats such as CSV, Excel, or JSON.",

  problem: [
    "Collecting information about multiple YouTube videos manually can be repetitive.",
    "Video information is more useful for analysis when it can be collected into a structured dataset.",
    "Different workflows require different output formats, including spreadsheets and JSON.",
    "Invalid inputs and collection errors need to be handled so the tool can respond appropriately when a request cannot be processed.",
  ],

  solution:
    "I built a YouTube scraper that accepts a YouTube URL, keyword, or search query and collects metadata for multiple videos. The collected results can be exported to CSV or Excel, or returned or saved as JSON. The tool also handles invalid inputs and collection errors.",

  features: [
    {
      title: "Flexible input",
      description:
        "Accepts a YouTube URL, keyword, or search query as the starting point for data collection.",
    },
    {
      title: "Video metadata extraction",
      description:
        "Collects metadata associated with YouTube videos for structured output.",
    },
    {
      title: "Multiple-video collection",
      description:
        "Supports collecting metadata for multiple videos rather than processing only one video at a time.",
    },
    {
      title: "CSV export",
      description:
        "Exports collected results in CSV format for use in spreadsheet and data-analysis workflows.",
    },
    {
      title: "Excel export",
      description:
        "Supports exporting collected results in an Excel-compatible format.",
    },
    {
      title: "JSON output",
      description:
        "Returns or saves collected data as JSON for structured data handling.",
    },
    {
      title: "Error handling",
      description:
        "Handles invalid inputs and errors encountered during data collection.",
    },
  ],

  implementation: [
    {
      title: "Input processing",
      description:
        "Accepts a YouTube URL, keyword, or search query to initiate collection.",
    },
    {
      title: "Metadata collection",
      description:
        "Processes requests to gather metadata for multiple videos.",
    },
    {
      title: "Structured output",
      description:
        "Organizes the collected results into formats suitable for further use.",
    },
    {
      title: "Export options",
      description:
        "Provides CSV, Excel, and JSON output options.",
    },
    {
      title: "Error handling",
      description:
        "Accounts for invalid inputs and collection errors instead of assuming every request will succeed.",
    },
  ],

  learnings: [
    "Automating repetitive data collection can make it easier to assemble structured datasets.",
    "Supporting multiple input types makes a data tool useful for different collection workflows.",
    "Providing CSV, Excel, and JSON output makes collected data easier to reuse in other tools.",
    "Error handling is an important part of building a reliable collection workflow.",
    "A useful next step for this type of project is to evaluate collection reliability and document supported inputs and limitations through testing.",
  ],
};


const slackBotCaseStudy = {
  introduction:
    "A Slack bot integration that connects with a private Slack channel, responds to commands or user messages, processes Slack events, and supports automated messaging through configured integrations.",

  problem: [
    "Repeated communication in Slack can require manual effort when messages need to be sent consistently.",
    "Bot interactions need a way to receive commands or messages and respond to relevant events.",
    "Automated messaging requires a connection between the workflow and the intended Slack channel.",
    "Scheduled messages and dynamic content need to be handled without relying entirely on manual communication.",
  ],

  solution:
    "I built a Slack bot workflow that communicates with a configured private channel, responds to commands or user messages, and uses Slack events, webhooks, or APIs to support interactions. It also supports scheduled or recurring messages, dynamic message formatting, and handling failed requests or invalid inputs.",

  features: [
    {
      title: "Private channel integration",
      description:
        "Connects the bot to a specific private Slack channel using configured permissions.",
    },
    {
      title: "Message delivery",
      description:
        "Sends messages to the configured Slack channel.",
    },
    {
      title: "Command and message handling",
      description:
        "Responds to supported commands or user messages.",
    },
    {
      title: "Event-driven interactions",
      description:
        "Uses Slack events or triggers to initiate the relevant workflow.",
    },
    {
      title: "Webhook and API connectivity",
      description:
        "Uses a webhook or API connection to communicate with Slack.",
    },
    {
      title: "Dynamic message formatting",
      description:
        "Formats messages using dynamic data or templates.",
    },
    {
      title: "Scheduled messaging",
      description:
        "Supports scheduled or recurring messages.",
    },
    {
      title: "Error handling",
      description:
        "Handles failed requests or invalid inputs as part of the workflow.",
    },
  ],

  implementation: [
    {
      title: "Slack connectivity",
      description:
        "Connects the bot to Slack through a configured webhook or API and the necessary channel permissions.",
    },
    {
      title: "Interaction handling",
      description:
        "Processes supported commands, user messages, and Slack events to initiate bot behavior.",
    },
    {
      title: "Message composition",
      description:
        "Uses dynamic data or templates to construct messages for the configured channel.",
    },
    {
      title: "Scheduled execution",
      description:
        "Supports recurring or scheduled message delivery.",
    },
    {
      title: "Failure handling",
      description:
        "Accounts for invalid inputs and failed requests during workflow execution.",
    },
  ],

  learnings: [
    "Private-channel integrations depend on correct permissions and configuration.",
    "Event-driven interactions provide a way to respond to activity instead of relying only on manual execution.",
    "Dynamic templates make automated messages adaptable to different data.",
    "Scheduled messaging can support recurring communication workflows.",
    "Error handling is important because API requests and external integrations can fail.",
    "Reliable bot behavior depends on validating inputs and checking that the intended actions execute successfully.",
  ],
};


const airtableMakeSlackCaseStudy = {
  introduction:
    "An automation workflow connecting Airtable, Make, and Slack. It processes Airtable record changes, reads and transforms record data, applies conditions or filters, and sends Slack messages using the available record information.",

  problem: [
    "Monitoring Airtable records manually can require repeated checks when information changes.",
    "Relevant record details may need to be communicated through Slack so people can access them in their existing workflow.",
    "Not every record necessarily needs the same processing, making conditions and filters useful for controlling workflow execution.",
    "Automated workflows can also use scheduled execution when a process needs to run at configured intervals.",
  ],

  solution:
    "I built an automation workflow using Airtable, Make, and Slack. The workflow responds to Airtable record changes, reads the available record fields, transforms data, applies conditions or filters, and sends Slack messages using Airtable data. It also supports scheduled execution.",

  features: [
    {
      title: "Airtable record triggers",
      description:
        "Uses Airtable record changes to initiate the workflow.",
    },
    {
      title: "Record data retrieval",
      description:
        "Reads fields from Airtable records for use in subsequent workflow steps.",
    },
    {
      title: "Slack notifications",
      description:
        "Sends Slack messages containing information derived from Airtable records.",
    },
    {
      title: "Data transformation",
      description:
        "Formats or transforms record data before it is used in later workflow steps.",
    },
    {
      title: "Conditions and filters",
      description:
        "Applies conditions or filters to control which records proceed through the workflow.",
    },
    {
      title: "Scheduled execution",
      description:
        "Supports running the workflow on a configured schedule.",
    },
  ],

  implementation: [
    {
      title: "Airtable integration",
      description:
        "Connects the workflow to Airtable so record changes and field values can be used as inputs.",
    },
    {
      title: "Workflow orchestration",
      description:
        "Uses Make to coordinate the processing steps between Airtable and Slack.",
    },
    {
      title: "Conditional processing",
      description:
        "Evaluates configured conditions or filters before continuing with the relevant workflow path.",
    },
    {
      title: "Message preparation",
      description:
        "Formats or transforms record information into content suitable for a Slack message.",
    },
    {
      title: "Slack integration",
      description:
        "Sends the prepared message to Slack using the configured connection.",
    },
    {
      title: "Scheduled runs",
      description:
        "Supports scheduled execution in addition to record-change-triggered processing.",
    },
  ],

  learnings: [
    "Connecting tools through an automation platform can reduce the need to move information manually between applications.",
    "Record triggers provide a way to initiate workflows in response to changes in source data.",
    "Data transformation helps prepare source fields for downstream actions.",
    "Conditions and filters allow workflow execution to depend on the available record data.",
    "Scheduled execution and record-change triggers serve different purposes and should be configured according to the workflow's requirements.",
    "Automation should be tested with representative records and different conditions to verify that the intended messages are produced.",
  ],
};


export default ProjectDetails;
