import Image from "next/image";
import { proofStats, site } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="profile-card">
        <div className="avatar-wrap"><Image src="/profile.png" alt={site.name} width={68} height={68} priority /></div>
        <div className="profile-meta"><div className="profile-name">{site.name}</div><div className="profile-role">{site.role}</div></div>
      </div>
      <div className="hero-eyebrow">Founder & Developer at {site.company} · {site.location}</div>
      <h1 id="hero-title">I build software<br />businesses <em>actually use.</em></h1>
      <p className="hero-tag">Commercial POS systems, desktop business software, full-stack React/Next.js applications and IoT automation — designed around real workflows, built end-to-end and deployed for real users.</p>
      <div className="hero-actions">
        <a className="primary-btn" href="#projects">View my work <span>→</span></a>
        <a className="secondary-btn" href="#hire">Hire me <span>↗</span></a>
        <a className="text-btn" href="#project-inquiry">Need software for your business? Start a project <span>→</span></a>
      </div>
      <div className="chip-row hero-chips">
        <span className="chip live">{site.availability}</span><span className="chip">{site.experience} experience</span>
        <span className="chip">{site.deployments}</span><span className="chip">Web · Desktop · IoT</span>
      </div>
      <div className="proof-grid" aria-label="Experience highlights">
        {proofStats.map(([value, label]) => <div className="proof-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div>
    </section>
  );
}
