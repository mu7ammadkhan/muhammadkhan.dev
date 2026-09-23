import { PageBackground } from "@/components/layout/PageBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <>
      <PageBackground />
<main className="projects-page">
        <ProjectsSection projects={projects} archive />
      </main>
      <SiteFooter />
    </>
  );
}
