import { SectionHead } from "@/components/SectionHead";
import { CardSlider } from "@/components/ui/CardSlider";
import { services, whyMe } from "@/data/portfolio";

export function ServicesSection() {
  return (
    <>
      <section className="content-section" id="services">
        <SectionHead title="What I build" count="03 / 08" />
        <div className="section-intro-row"><p>Software built around the way your business actually works. Every system is shaped by the real problem instead of a generic template.</p><span>business problem → practical system</span></div>
        <div className="service-grid service-grid-3">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <header><div className="svc-number">{service.number}</div><div><div className="svc-kicker">{service.kicker}</div><h3>{service.title} <small>{service.subtitle}</small></h3></div></header>
              <p className="svc-lede">{service.lede}</p>
              <ul>{service.items.map(([key, value]) => <li key={key}><span>{key}</span><b>{value}</b></li>)}</ul>
              <div className="svc-pill">{service.pill}</div>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section" id="why-me">
        <SectionHead title="Why work with me" count="04 / 08" />
        <CardSlider label="Why work with me cards">
          {whyMe.map(([title, description, number]) => <article className="cert-card why-card" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
        </CardSlider>
      </section>
    </>
  );
}
