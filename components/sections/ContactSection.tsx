import { SectionHead } from "@/components/SectionHead";

export function ContactSection() {
  return (
    <section className="content-section" id="contact">
      <SectionHead title="Contact" count="08 / 08" />
      <div className="contact-grid">
        <div className="panel contact-intro">
          <div>
            <div className="panel-kicker">Product &amp; business conversations</div>
            <h2>Build software that<br /><em>earns its place in the workflow.</em></h2>
            <p>For commercial POS products, custom business systems, full-stack product engineering and IoT automation.</p>
          </div>
          <div className="chip-row"><span className="chip live">Selective product focused collaborations</span></div>
        </div>
      </div>
    </section>
  );
}
