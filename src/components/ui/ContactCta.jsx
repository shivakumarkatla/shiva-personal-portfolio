import { ArrowRight, Mail } from "lucide-react";
import Button from "./Button";
import Container from "./Container";
import EmailHelp from "./EmailHelp";
import { mailtoUrl } from "../../data/profile";
import "./ContactCta.css";

/** Closing call to action used at the end of inner pages. */
function ContactCta({
  title = "Let's build something useful.",
  text = "I'm looking for software development roles and I'm open to freelance AI automation projects.",
}) {
  return (
    <section className="contact-cta" aria-labelledby="contact-cta-title">
      <Container>
        <div className="contact-cta__panel">
          <div>
            <h2 id="contact-cta-title" className="contact-cta__title">
              {title}
            </h2>
            <p className="contact-cta__text">{text}</p>
          </div>
          <div className="contact-cta__side">
            <div className="contact-cta__actions">
              <Button href={mailtoUrl}>
                <Mail size={17} aria-hidden="true" />
                Email me
              </Button>
              <Button to="/#contact" variant="ghost">
                All contact options
                <ArrowRight size={17} aria-hidden="true" />
              </Button>
            </div>
            <EmailHelp />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactCta;
