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
          <p>I&apos;m <strong>Muhammad Khan</strong>, a full-stack developer and product builder behind <strong>MK TECH</strong>. My hands-on work spans responsive websites, modern web applications, commercial desktop systems and IoT automation.</p>
          <p>My named products cover <strong>retail, restaurants, tailoring and motorcycle dealerships</strong>, but my work is not limited to those industries. I can create websites, web apps, automation and custom systems for organizations with workflows that can be improved through technology.</p>
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
