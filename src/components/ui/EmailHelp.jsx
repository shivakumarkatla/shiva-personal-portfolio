import { emailComposeUrl } from "../../data/profile";
import "./EmailHelp.css";

/**
 * A mailto link only works if the visitor has an email app set up. This note
 * explains that and offers Gmail's web compose as a fallback.
 */
function EmailHelp({ mentionCopy = false }) {
  return (
    <p className="email-help">
      Opens your email app. If nothing happens,{" "}
      <a href={emailComposeUrl} target="_blank" rel="noopener noreferrer">
        write in Gmail instead
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      {mentionCopy ? " or copy the address below." : "."}
    </p>
  );
}

export default EmailHelp;
