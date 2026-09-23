import { SectionHead } from "@/components/SectionHead";
import { site } from "@/data/portfolio";

const externalLinks = [["linkedin", site.linkedin, "muhammad-khan-017b8829b"], ["github", site.github, "github.com/mu7ammadkhan"], ["fiverr", site.fiverr, "muhammad_khan67"], ["indeed", site.indeed, "Professional profile"], ["whatsapp", site.whatsapp, site.phone]] as const;

export function ContactSection() {
  return (
    <section className="content-section" id="contact">
      <SectionHead title="Contact" count="08 / 08" />
      <div className="contact-grid">
        <div className="panel contact-intro">
          <div><div className="panel-kicker">Product & business conversations</div><h2>Build software that<br /><em>earns its place in the workflow.</em></h2><p>For commercial POS products, custom business systems, full-stack product engineering and IoT automation.</p></div>
          <div className="chip-row"><span className="chip live">Selective product focused collaborations</span></div>
        </div>
        <div className="panel contact-links">
          <a href={`mailto:${site.email}`}><span><small>email</small><b>{site.email}</b></span><i>→</i></a>
          {externalLinks.map(([label, href, text]) => <a href={href} target="_blank" rel="noreferrer" key={label}><span><small>{label}</small><b>{text}</b></span><i>→</i></a>)}
          <a href={site.cv} download><span><small>credentials</small><b>Muhammad Khan. CV.pdf</b></span><i>↓</i></a>
        </div>
      </div>
    </section>
  );
}
