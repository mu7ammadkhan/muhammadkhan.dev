import { SectionHead } from "@/components/SectionHead";
import { credentials, experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <>
      <section className="content-section" id="experience">
        <SectionHead title="Experience" count="05 / 08" />
        <div className="timeline">
          {experience.map((item) => {
            const isCurrent = "current" in item && item.current;
            return <article className={`timeline-item${isCurrent ? " current" : ""}`} key={`${item.period}-${item.title}`}>
              <div className="timeline-year">{item.period}</div><div><h3>{item.title}</h3><p>{item.description}</p></div>
              <span className={`timeline-tag${isCurrent ? " live-tag" : ""}`}>{isCurrent && <i />} {item.tag}</span>
            </article>;
          })}
        </div>
      </section>
      <section className="content-section" id="credentials">
        <SectionHead title="Proof & credentials" count="06 / 08" />
        <div className="cert-grid">{credentials.map(([title, detail, type]) => <article className="cert-card" key={title}><h3>{title}</h3><p>{detail}</p><span>{type}</span></article>)}</div>
      </section>
    </>
  );
}
