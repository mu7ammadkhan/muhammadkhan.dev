import Image from "next/image";
import { TypewriterHeadline } from "@/components/ui/TypewriterHeadline";
import { proofStats, site } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="profile-card">
        <div className="avatar-wrap"><Image src="/profile.png" alt={site.name} width={68} height={85} priority /></div>
        <div className="profile-meta"><div className="profile-name">{site.name}</div><div className="profile-role">{site.role}</div><div className="profile-location">Karachi, Pakistan</div></div>
      </div>
      <div className="hero-main">
        <div className="hero-copy">
          <TypewriterHeadline />
          <p className="hero-tag">I design and build commercial software around real operations. This includes ready-to-deploy POS products and custom systems for any business workflow.</p>
          <div className="hero-actions"><a className="primary-btn" href="#projects">Explore products <span>→</span></a><a className="secondary-btn" href="#hire">Work together <span>↗</span></a><a className="text-btn" href="#project-inquiry">Discuss a business system <span>→</span></a></div>
          <div className="chip-row hero-chips"><span className="chip live">{site.availability}</span><span className="chip">{site.experience} experience</span><span className="chip">{site.deployments}</span><span className="chip">Web · Desktop · IoT</span></div>
        </div>
        <aside className="hero-showcase" aria-label={`${site.name}, ${site.role}`}>
          <Image className="showcase-portrait" src="/profile.png" alt={`${site.name}, Full-Stack Developer`} width={1080} height={1350} priority />
          <div className="showcase-copy"><h2>{site.name}</h2><p>Software Product Builder<br />& Full-Stack Developer</p><p className="showcase-summary">Building commercial products and custom systems around real business operations.</p><small>Karachi, Pakistan</small></div>
        </aside>
      </div>
      <div className="proof-grid" aria-label="Experience highlights">{proofStats.map(([value, label]) => <div className="proof-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    </section>
  );
}
