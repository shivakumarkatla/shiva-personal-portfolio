import {
  CornerDownRight,
  Database,
  GitBranch,
  Monitor,
  Send,
  Server,
  Sparkles,
  Zap,
} from "lucide-react";
import WorkflowDiagram from "../diagrams/WorkflowDiagram";
import "./ArchitectureFlow.css";

const kinds = {
  client: { icon: Monitor, tone: "accent" },
  api: { icon: Server, tone: "accent" },
  data: { icon: Database, tone: "accent" },
  trigger: { icon: Zap, tone: "signal" },
  ai: { icon: Sparkles, tone: "signal" },
  action: { icon: Send, tone: "signal" },
  logic: { icon: GitBranch, tone: "muted" },
};

/**
 * Renders a project's verified architecture: either the shared Smart Schedule
 * diagram or one or more ordered flows (with optional branches per step).
 */
function ArchitectureFlow({ architecture }) {
  if (architecture.diagram === "smart-schedule") {
    return (
      <div className="architecture">
        <WorkflowDiagram showCaseStudyLink={false} />
        <p className="architecture__source">{architecture.source}</p>
      </div>
    );
  }

  return (
    <div className="architecture">
      {architecture.flows.map((flow) => {
        const isLinear = flow.steps.length <= 4 && flow.steps.every((step) => !step.branches);
        return (
          <figure
            key={flow.title}
            className={`architecture__flow ${isLinear ? "architecture__flow--linear" : ""}`}
          >
            <figcaption className="architecture__title">{flow.title}</figcaption>
            <ol className="architecture__steps">
              {flow.steps.map((step, index) => {
                const { icon: Icon, tone } = kinds[step.kind];
                return (
                  <li key={`${step.label}-${index}`} className={`architecture__step architecture__step--${tone}`}>
                    <span className="architecture__icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                    <div className="architecture__text">
                      <span className="architecture__label">{step.label}</span>
                      <span className="architecture__detail">{step.detail}</span>
                      {step.branches && (
                        <ul className="architecture__branches">
                          {step.branches.map((branch) => (
                            <li key={branch}>
                              <CornerDownRight size={14} aria-hidden="true" />
                              {branch}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </figure>
        );
      })}
      <p className="architecture__source">{architecture.source}</p>
    </div>
  );
}

export default ArchitectureFlow;
