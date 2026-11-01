import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import "./CopyEmail.css";

const RESET_DELAY = 2500;

// Older browsers, or pages where clipboard permission is blocked, need the
// legacy copy command.
function copyWithSelection(text) {
  const previousFocus = document.activeElement;
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.append(field);
  field.select();
  const copied = document.execCommand("copy");
  field.remove();
  // Return focus to the button so keyboard users keep their place.
  previousFocus?.focus?.();
  return copied;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return copyWithSelection(text);
  }
}

/** Shows an email address and copies it to the clipboard, with visible and announced feedback. */
function CopyEmail({ email }) {
  const [localPart, domain] = email.split("@");
  const [status, setStatus] = useState("idle");
  const resetTimer = useRef();

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function handleCopy() {
    setStatus((await copyText(email)) ? "copied" : "failed");
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), RESET_DELAY);
  }

  const messages = {
    idle: "",
    copied: "Email address copied",
    failed: "Couldn't copy. Please select the address instead.",
  };

  // The visible text (address, then "Copy") forms the accessible name, so
  // speech-input users can say what they see (WCAG 2.5.3).
  return (
    <div className="copy-email">
      <button
        type="button"
        className={`copy-email__button copy-email__button--${status}`}
        onClick={handleCopy}
      >
        <span className="copy-email__address">
          {/* Allow a line break before "@" on narrow screens instead of truncating. */}
          {localPart}
          <wbr />@{domain}
        </span>
        <span className="copy-email__action">
          {status === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
          {status === "copied" ? "Copied" : "Copy"}
          <span className="sr-only"> email address</span>
        </span>
      </button>
      <p className="copy-email__status" role="status" aria-live="polite">
        {messages[status]}
      </p>
    </div>
  );
}

export default CopyEmail;
