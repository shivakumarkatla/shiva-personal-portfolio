import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CalendarPlus,
  History,
  Mail,
  MessageSquareText,
  Send,
} from "lucide-react";
import "./WorkflowDiagram.css";

/*
 * Smart Schedule workflow, taken from the project's n8n export
 * (smart-schedule-ai-agent/workflows/smart-schedule.json):
 *   Telegram Trigger -> AI Agent -> Send a text message (Telegram)
 *   AI Agent uses: OpenAI Chat Model (model), Simple Memory (memory),
 *   Google Calendar "Create an event" and Gmail "Send a message" (tools).
 *
 * Desktop positions use a 1000 x 410 coordinate space shared by the SVG
 * connectors and the absolutely positioned HTML nodes.
 */
const mainNodes = [
  { id: "trigger", icon: Send, title: "Telegram Trigger", detail: "New message", x: 130, y: 105, w: 200 },
  { id: "agent", icon: Bot, title: "AI Agent", detail: "Interprets the request and picks a tool", x: 500, y: 105, w: 270, primary: true },
  { id: "reply", icon: MessageSquareText, title: "Telegram", detail: "Sends the result", x: 870, y: 105, w: 200 },
];

const subNodes = [
  { id: "model", icon: BrainCircuit, title: "OpenAI Chat Model", detail: "Language model", x: 215, y: 330, port: "model" },
  { id: "memory", icon: History, title: "Simple Memory", detail: "Conversation context", x: 405, y: 330, port: "memory" },
  { id: "calendar", icon: CalendarPlus, title: "Google Calendar", detail: "Create event", x: 595, y: 330, port: "tool" },
  { id: "gmail", icon: Mail, title: "Gmail", detail: "Send message", x: 785, y: 330, port: "tool" },
];

const VIEW_WIDTH = 1000;
const VIEW_HEIGHT = 410;
const AGENT_BOTTOM = 159;
const SUB_TOP = 286;
const PORT_X = { model: 430, memory: 485, tool: 565 };

function connectorPath(node) {
  const startX = PORT_X[node.port];
  const midY = (AGENT_BOTTOM + SUB_TOP) / 2;
  return `M${startX} ${AGENT_BOTTOM} C${startX} ${midY}, ${node.x} ${midY}, ${node.x} ${SUB_TOP}`;
}

const MAIN_PATH = "M230 105 L770 105";

function percent(value, total) {
  return `${(value / total) * 100}%`;
}

function Node({ node, className = "", style }) {
  const Icon = node.icon;

  return (
    <div className={`workflow-node ${className}`} style={style}>
      <span className="workflow-node__icon">
        <Icon size={18} strokeWidth={1.75} />
      </span>
      <span className="workflow-node__text">
        <span className="workflow-node__title">{node.title}</span>
        <span className="workflow-node__detail">{node.detail}</span>
      </span>
    </div>
  );
}

function WorkflowDiagram() {
  const prefersReducedMotion = useReducedMotion();
  const figureRef = useRef(null);
  const svgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Only animate while the diagram is on screen.
  useEffect(() => {
    const figure = figureRef.current;
    if (!figure) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(figure);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg?.pauseAnimations) return;

    if (isVisible) {
      svg.unpauseAnimations();
    } else {
      svg.pauseAnimations();
    }
  }, [isVisible]);

  const animate = !prefersReducedMotion;

  return (
    <figure
      ref={figureRef}
      className={`workflow ${animate ? "workflow--animated" : ""}`}
      aria-labelledby="workflow-caption"
    >
      <div className="workflow__panel">
        <div className="workflow__header" aria-hidden="true">
          <span className="workflow__name">Smart Schedule</span>
          <span className="workflow__platform">n8n workflow</span>
        </div>

        <p className="sr-only">
          A Telegram message triggers an n8n AI Agent. The agent uses an
          OpenAI chat model and simple memory, and can call two tools:
          create a Google Calendar event and send a Gmail message. The
          result is sent back to the user on Telegram.
        </p>

        {/* Wide layout: node canvas with connectors. */}
        <div className="workflow__canvas" aria-hidden="true">
          <svg
            ref={svgRef}
            className="workflow__lines"
            viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
            focusable="false"
          >
            <path className="workflow__edge workflow__edge--main" d={MAIN_PATH} pathLength="1" />

            {subNodes.map((node) => (
              <path
                key={node.id}
                className={`workflow__edge workflow__edge--${node.port === "tool" ? "tool" : "support"}`}
                d={connectorPath(node)}
              />
            ))}

            {Object.entries({ model: "Model", memory: "Memory", tool: "Tools" }).map(
              ([port, label]) => (
                <text
                  key={port}
                  className="workflow__port-label"
                  x={PORT_X[port] - 8}
                  y={AGENT_BOTTOM + 26}
                  textAnchor="end"
                >
                  {label}
                </text>
              ),
            )}

            {animate && (
              <>
                <circle className="workflow__pulse" r="4">
                  <animateMotion dur="3.2s" repeatCount="indefinite" path={MAIN_PATH} />
                </circle>
                <circle className="workflow__pulse workflow__pulse--tool" r="3.5" visibility="hidden">
                  {/* Stay hidden until the delayed motion starts, so the dot never sits at 0,0. */}
                  <set attributeName="visibility" to="visible" begin="1.2s" />
                  <animateMotion
                    dur="2.4s"
                    begin="1.2s"
                    repeatCount="indefinite"
                    path={connectorPath(subNodes[2])}
                  />
                </circle>
                <circle className="workflow__pulse workflow__pulse--tool" r="3.5" visibility="hidden">
                  {/* Stay hidden until the delayed motion starts, so the dot never sits at 0,0. */}
                  <set attributeName="visibility" to="visible" begin="2.4s" />
                  <animateMotion
                    dur="2.4s"
                    begin="2.4s"
                    repeatCount="indefinite"
                    path={connectorPath(subNodes[3])}
                  />
                </circle>
              </>
            )}
          </svg>

          {mainNodes.map((node, index) => (
            <Node
              key={node.id}
              node={node}
              className={`workflow-node--main ${node.primary ? "workflow-node--primary" : ""}`}
              style={{
                left: percent(node.x, VIEW_WIDTH),
                top: percent(node.y, VIEW_HEIGHT),
                width: percent(node.w, VIEW_WIDTH),
                "--i": index,
              }}
            />
          ))}

          {subNodes.map((node, index) => (
            <Node
              key={node.id}
              node={node}
              className={`workflow-node--sub ${node.port === "tool" ? "workflow-node--tool" : ""}`}
              style={{
                left: percent(node.x, VIEW_WIDTH),
                top: percent(node.y, VIEW_HEIGHT),
                "--i": index + 3,
              }}
            />
          ))}
        </div>

        {/* Narrow layout: the same workflow as a vertical flow. */}
        <ol className="workflow__stack" aria-hidden="true">
          <li>
            <Node node={mainNodes[0]} className="workflow-node--main" />
          </li>
          <li className="workflow__stack-agent">
            <Node node={mainNodes[1]} className="workflow-node--main workflow-node--primary" />
            <div className="workflow__stack-uses">
              {subNodes.map((node) => (
                <Node
                  key={node.id}
                  node={node}
                  className={`workflow-node--sub ${node.port === "tool" ? "workflow-node--tool" : ""}`}
                />
              ))}
            </div>
          </li>
          <li>
            <Node node={mainNodes[2]} className="workflow-node--main" />
          </li>
        </ol>
      </div>

      <figcaption id="workflow-caption" className="workflow__caption">
        <span>
          Illustrative diagram of my Smart Schedule workflow, based on its n8n
          export.
        </span>
        <Link to="/projects/smart-schedule" className="workflow__caption-link">
          View case study
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </figcaption>
    </figure>
  );
}

export default WorkflowDiagram;
