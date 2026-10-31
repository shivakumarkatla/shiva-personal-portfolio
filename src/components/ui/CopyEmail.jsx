import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import "./CopyEmail.css";

const RESET_DELAY = 2500;

/** Shows an email address and copies it to the clipboard, with visible and announced feedback. */
function CopyEmail({ email }) {
  const [localPart, domain] = email.split("@");
  const [status, setStatus] = useState("idle");
  const resetTimer = useRef();

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }

    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), RESET_DELAY);
  }

  const messages = {
    idle: "",
    copied: "Email address copied",
    failed: "Couldn't copy. Please select the address instead.",
  };

  return (
    <div className="copy-email">
      <button
        type="button"
        className={`copy-email__button copy-email__button--${status}`}
        onClick={handleCopy}
        aria-label={`Copy email address ${email}`}
      >
        <span className="copy-email__address">
          {/* Allow a line break before "@" on narrow screens instead of truncating. */}
          {localPart}
          <wbr />@{domain}
        </span>
        <span className="copy-email__action" aria-hidden="true">
          {status === "copied" ? <Check size={16} /> : <Copy size={16} />}
          {status === "copied" ? "Copied" : "Copy"}
        </span>
      </button>
      <p className="copy-email__status" role="status" aria-live="polite">
        {messages[status]}
      </p>
    </div>
  );
}

export default CopyEmail;
