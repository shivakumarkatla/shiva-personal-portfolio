import { useSearchParams } from "react-router-dom";
import FilterChips from "../components/projects/FilterChips";
import ProjectCard from "../components/projects/ProjectCard";
import PageHero from "../components/layout/PageHero";
import PageLayout from "../components/layout/PageLayout";
import Button from "../components/ui/Button";
import ContactCta from "../components/ui/ContactCta";
import Container from "../components/ui/Container";
import { categoryGroups, getCategoryGroup, projects } from "../data/projects";
import "./ProjectsPage.css";

const ALL = "all";

function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("category");
  const activeGroup = categoryGroups.some((group) => group.id === requested) ? requested : ALL;

  const matches = (project) =>
    activeGroup === ALL || getCategoryGroup(project.category)?.id === activeGroup;
  const visible = projects.filter(matches);
  const featured = visible.filter((project) => project.featured);
  const more = visible.filter((project) => !project.featured);

  const filterOptions = [
    { id: ALL, label: "All", count: projects.length },
    ...categoryGroups.map((group) => ({
      id: group.id,
      label: group.label,
      count: projects.filter((project) => getCategoryGroup(project.category)?.id === group.id).length,
    })),
  ];

  function handleFilter(id) {
    setSearchParams(id === ALL ? {} : { category: id }, { replace: true, preventScrollReset: true });
  }

  const activeLabel = filterOptions.find((option) => option.id === activeGroup).label;

  return (
    <PageLayout
      title="Projects"
      description="Full-stack applications, AI agents, workflow automations and data projects by Shiva Kumar, each with a case study and real screenshots or source links."
    >
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
        eyebrow="Projects"
        title="Projects I've built."
        lead={
          <p>
            A collection of practical work across software development, AI,
            automation, voice interfaces, and data. Every project has a case
            study; the first four also include screenshots and source code.
          </p>
        }
      />

      <section className="projects-archive" aria-labelledby="projects-archive-title">
        <Container>
          <div className="projects-archive__toolbar">
            <h2 id="projects-archive-title" className="sr-only">
              All projects
            </h2>
            <FilterChips
              label="Filter projects by area"
              options={filterOptions}
              value={activeGroup}
              onChange={handleFilter}
            />
            <p className="projects-archive__count" role="status" aria-live="polite">
              Showing {visible.length} of {projects.length} projects
              {activeGroup !== ALL && ` in ${activeLabel}`}
            </p>
          </div>

          {featured.length > 0 && (
            <div className="projects-archive__group">
              <h3 className="projects-archive__heading">
                Featured work <span>{featured.length}</span>
              </h3>
              <div className="projects-archive__featured">
                {featured.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    headingLevel="h4"
                    // The first row is visible on load; the rest can wait.
                    imageLoading={index < 2 ? "eager" : "lazy"}
                  />
                ))}
              </div>
            </div>
          )}

          {more.length > 0 && (
            <div className="projects-archive__group">
              <h3 className="projects-archive__heading">
                More projects <span>{more.length}</span>
              </h3>
              <div className="projects-archive__more">
                {more.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    variant="compact"
                    headingLevel="h4"
                  />
                ))}
              </div>
            </div>
          )}

          {visible.length === 0 && (
            <div className="projects-archive__empty">
              <p>No projects in this area yet.</p>
              <Button variant="ghost" onClick={() => handleFilter(ALL)}>
                Show all projects
              </Button>
            </div>
          )}
        </Container>
      </section>

      <ContactCta />
    </PageLayout>
  );
}

export default ProjectsPage;
