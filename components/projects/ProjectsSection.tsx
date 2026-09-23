"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import type { Project } from "@/types/portfolio";
import { SectionHead } from "@/components/SectionHead";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <article className="project-card">
      <button className="project-thumb" onClick={() => onOpen(project)} aria-label={`Open ${project.title} details`}>
        <Image src={project.image} alt={`${project.title} preview`} fill sizes="(max-width: 820px) 100vw, 50vw" />
        <span className="thumb-overlay" />
        {project.commercial && <span className="commercial-badge">commercial product</span>}
        <span className="view-pill">view case study</span>
      </button>
      <div className="project-head">
        <div>
          <h3>{project.title}</h3>
          <p>{project.headline}</p>
        </div>
        <span>{project.year}</span>
      </div>
      <div className="tag-row">
        {project.technologies.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <div className="project-category">{project.category}</div>
    </article>
  );
}

function DetailGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="detail-group">
      <div className="detail-label">{label}</div>
      <div className="detail-content">{children}</div>
    </div>
  );
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showMore, setShowMore] = useState(false);
  const featured = projects.filter((project) => project.featured).slice(0, 4);
  const more = projects.filter((project) => !featured.some((item) => item.id === project.id));

  useEffect(() => {
    if (!activeProject && !showMore) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
        setShowMore(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeProject, showMore]);

  return (
    <section id="projects" className="content-section">
      <SectionHead title="Selected work" count="02 / 08" />
      <div className="section-intro-row">
        <p>Real products first. These case studies show the business problem, what I built, my role and the technologies behind the solution.</p>
        <span>proof over feature-dumping</span>
      </div>
      <div className="project-grid">
        {featured.map((project) => <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />)}
      </div>

      {more.length > 0 && (
        <div className="show-more-wrap">
          <button className="show-more-btn" onClick={() => setShowMore(true)}>Explore all projects</button>
        </div>
      )}

      {showMore && (
        <div className="modal-shell" role="dialog" aria-modal="true" aria-label="More projects">
          <button className="modal-backdrop" onClick={() => setShowMore(false)} aria-label="Close more projects" />
          <div className="more-modal">
            <div className="modal-top"><div><small>portfolio archive</small><h3>More projects</h3></div><button onClick={() => setShowMore(false)}>✕</button></div>
            <div className="project-grid modal-project-grid">
              {more.map((project) => <ProjectCard key={project.id} project={project} onOpen={(item) => { setShowMore(false); setActiveProject(item); }} />)}
            </div>
          </div>
        </div>
      )}

      {activeProject && (
        <div className="modal-shell" role="dialog" aria-modal="true" aria-label={`${activeProject.title} project details`}>
          <button className="modal-backdrop" onClick={() => setActiveProject(null)} aria-label="Close project details" />
          <article className="project-modal case-study-modal">
            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close">✕</button>
            <div className="modal-image">
              <Image src={activeProject.image} alt={`${activeProject.title} preview`} fill sizes="92vw" priority />
              <div className="case-hero-copy">
                <span>{activeProject.category}</span>
                <h3>{activeProject.title}</h3>
                <p>{activeProject.headline}</p>
              </div>
            </div>
            <div className="modal-copy case-study-copy">
              <div className="case-meta">
                <span><small>period</small>{activeProject.year}</span>
                <span><small>role</small>{activeProject.role[0]}</span>
                <span><small>status</small>{activeProject.commercial ? "Commercial product" : "Project"}</span>
              </div>

              <DetailGroup label="Overview"><p>{activeProject.summary}</p></DetailGroup>
              <DetailGroup label="Problem"><p>{activeProject.problem}</p></DetailGroup>
              <DetailGroup label="Solution"><p>{activeProject.solution}</p></DetailGroup>
              <DetailGroup label="Outcome"><p>{activeProject.outcome}</p></DetailGroup>

              <DetailGroup label="My role">
                <div className="tag-row">{activeProject.role.map((item) => <span key={item}>{item}</span>)}</div>
              </DetailGroup>
              <DetailGroup label="Technology">
                <div className="tag-row">{activeProject.technologies.map((item) => <span key={item}>{item}</span>)}</div>
              </DetailGroup>
              <DetailGroup label="Key workflows">
                <ul className="feature-list">{activeProject.features.map((item) => <li key={item}>{item}</li>)}</ul>
              </DetailGroup>

              <div className="case-cta-row">
                <a className="primary-btn" href="#project-inquiry" onClick={() => setActiveProject(null)}>Build something similar <span>→</span></a>
                <a className="text-btn" href="#hire" onClick={() => setActiveProject(null)}>Need product engineering ownership? <span>→</span></a>
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
