import { PageBackground } from "@/components/layout/PageBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkWithMeSection } from "@/components/sections/WorkWithMeSection";
import { projects } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <PageBackground />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <ServicesSection />
        <ExperienceSection />
        <WorkWithMeSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
