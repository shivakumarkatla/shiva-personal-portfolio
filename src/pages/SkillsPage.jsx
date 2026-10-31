import { ArrowRight } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import PageLayout from "../components/layout/PageLayout";
import SkillGroup from "../components/skills/SkillGroup";
import Button from "../components/ui/Button";
import ContactCta from "../components/ui/ContactCta";
import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import Tag from "../components/ui/Tag";
import { learningSkills, skillGroups } from "../data/skills";
import "./SkillsPage.css";

function SkillsPage() {
  return (
    <PageLayout
      title="Technical Skills"
      description="Shiva Kumar's skills across frontend and backend development, AI and workflow automation, and data analytics, each linked to the projects that use it."
    >
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Skills" }]}
        eyebrow="Skills & technologies"
        title="Tools for turning ideas into working software."
        lead={
          <>
            <p>
              An overview of the technologies I use across software
              development, data analytics, and AI automation, along with the
              skills I&apos;m actively developing.
            </p>
            <p>
              Each skill used in a project on this site links to that project,
              so you can see where and how I used it. I don&apos;t rate my own
              proficiency with percentages.
            </p>
          </>
        }
        actions={
          <Button to="/projects" variant="ghost">
            Browse the projects
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        }
      />

      <Section className="skills-page-v2" aria-label="Skill categories">
        <div className="skills-page-v2__groups">
          {skillGroups.map((group, index) => (
            <SkillGroup key={group.id} group={group} index={index} />
          ))}
        </div>
      </Section>

      <Section id="learning" labelledBy="learning-title" tone="raised">
        <div className="skills-page-v2__learning">
          <SectionHeader
            eyebrow="Currently developing"
            title="Always learning. Always improving."
            titleId="learning-title"
            description="I'm strengthening these areas through structured learning and practical projects. They represent my current learning priorities, not claims of mastery."
          />
          <ul className="skills-page-v2__learning-list">
            {learningSkills.map((skill) => (
              <li key={skill}>
                <Tag tone="accent">{skill}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <ContactCta />
    </PageLayout>
  );
}

export default SkillsPage;
