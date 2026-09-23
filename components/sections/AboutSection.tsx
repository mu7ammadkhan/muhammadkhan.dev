import { SectionHead } from "@/components/SectionHead";
import { stackRows } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section className="content-section" id="about">
      <SectionHead title="About" count="01 / 08" />
      <div className="about-grid">
        <div className="panel about-copy">
          <div className="panel-kicker">Product-minded developer</div>
          <h2>I don&apos;t just build interfaces. I build complete working systems.</h2>
          <p>I&apos;m <strong>Muhammad Khan</strong>, a full-stack developer and software product builder behind <strong>MK TECH</strong>. Over 2+ years of hands-on development, I&apos;ve worked across modern web applications, commercial desktop software and IoT automation.</p>
          <p>My named products currently cover <strong>retail, restaurants, tailoring and motorcycle dealerships</strong>. My work is not limited to those industries. I can design custom software for medical stores, hospitals, wholesalers, service centers, offices and other businesses with workflows that can be digitized. Commercial systems from this work are installed with <strong>8+ business customers</strong>.</p>
          <p>I begin with the business problem. I understand the workflow, design the system, build the product and improve it through real usage.</p>
        </div>
        <div className="panel stack-list">
          <div className="panel-kicker">Tools I use to ship products</div>
          {stackRows.map(([key, value]) => <div className="stack-row" key={key}><span>{key}</span><b>{value}</b></div>)}
        </div>
      </div>
    </section>
  );
}
