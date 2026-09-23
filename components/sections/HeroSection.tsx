import Image from "next/image";
import profileImage from "@/public/profile.png";
import { TypewriterHeadline } from "@/components/ui/TypewriterHeadline";
import { proofStats, site } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-layout">
        <div className="hero-left">
          <div className="profile-card">
            <div className="avatar-wrap"><Image src={profileImage} alt={site.name} priority /></div>
            <div className="profile-meta">
              <div className="profile-name">{site.name}</div>
              <div className="profile-role">{site.role}</div>
              <div className="profile-location">Karachi, Pakistan</div>
            </div>
          </div>

          <div className="hero-copy">
            <TypewriterHeadline />
            <p className="hero-tag">I design and build complete digital solutions around real operations, including business automation, responsive websites, web applications, POS products and custom management systems.</p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">Explore products <span>→</span></a>
              <a className="secondary-btn" href="#hire">Work together <span>↗</span></a>
              <a className="text-btn" href="#project-inquiry">Discuss a business system <span>→</span></a>
            </div>
            <div className="chip-row hero-chips">
              <span className="chip live">{site.availability}</span>
              <span className="chip">2+ years production experience</span>
              <span className="chip">Real business deployments</span>
              <span className="chip">Web · Desktop · IoT · Automation</span>
            </div>
          </div>

          <div className="proof-grid" aria-label="Experience highlights">
            {proofStats.map(([value, label]) => <div className="proof-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </div>

        <aside className="hero-showcase" aria-label={`${site.name}, ${site.role}`}>
          <Image className="showcase-portrait" src={profileImage} alt={`${site.name}, Full-Stack Developer`} priority />
          <div className="showcase-copy">
            <h2>{site.name}</h2>
            <p>Software Product Builder<br />&amp; Full-Stack Developer</p>
            <p className="showcase-summary">Building commercial products and custom systems around real business operations.</p>
            <small>Karachi, Pakistan</small>
          </div>
        </aside>
      </div>
    </section>
  );
}
