
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageNavigation from "../components/layout/PageNavigation";
import { projects } from "../data/projects";

const expenseTrackerCaseStudy = {
  introduction:
    "A full-stack expense management application that lets users manage personal expenses through a connected React frontend and backend API.",

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
          </section>

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


export default ProjectDetails;
