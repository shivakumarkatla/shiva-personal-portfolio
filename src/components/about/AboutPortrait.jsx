import ResponsiveImage from "../ui/ResponsiveImage";
import StatusPill from "../ui/StatusPill";
import { profile } from "../../data/profile";
import "./AboutPortrait.css";

function AboutPortrait() {
  return (
    <figure className="about-portrait">
      <div className="about-portrait__frame">
        <ResponsiveImage
          className="about-portrait__image"
          src="/images/profile-photo.png"
          alt={`Portrait of ${profile.name}`}
          sizes="(min-width: 1024px) 400px, 112px"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <figcaption className="about-portrait__caption">
        <span>Software Development · AI · Data</span>
        <ul aria-label="Availability">
          <li>
            <StatusPill>{profile.availability.employment}</StatusPill>
          </li>
          <li>
            <StatusPill tone="signal">{profile.availability.freelance}</StatusPill>
          </li>
        </ul>
      </figcaption>
    </figure>
  );
}

export default AboutPortrait;
