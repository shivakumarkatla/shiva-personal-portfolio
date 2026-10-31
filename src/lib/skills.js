import { projects } from "../data/projects";

// Projects whose technology list includes the skill (see `match` in skillGroups).
export function getSkillProjects(skill) {
  const names = skill.match ?? [skill.name];
  return projects.filter((project) =>
    project.technologies.some((technology) => names.includes(technology)),
  );
}
