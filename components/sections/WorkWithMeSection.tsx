import { SectionHead } from "@/components/SectionHead";
import { site } from "@/data/portfolio";

export function WorkWithMeSection() {
  const partnershipMail = `mailto:${site.email}?subject=${encodeURIComponent("Product Engineering Collaboration")}&body=${encodeURIComponent("Hi Muhammad,\n\nI would like to discuss a product engineering collaboration.\n\nCompany:\nProduct / challenge:\nScope:\nTimeline:\n")}`;
  const projectMail = `mailto:${site.email}?subject=${encodeURIComponent("Business Software Inquiry")}&body=${encodeURIComponent("Hi Muhammad,\n\nI would like to discuss a software system for my business.\n\nBusiness / Company:\nCurrent workflow:\nProblem to solve:\nRequired outcome:\nTimeline:\n")}`;

  return (
    <section className="content-section" id="hire">
      <SectionHead title="Ways to work together" count="07 / 08" />
      <div className="conversion-grid">
        <article className="conversion-card hiring-card">
          <div className="conversion-kicker">For product teams & strategic roles</div>
          <h2>End-to-end product engineering ownership.</h2>
          <p>I bring the perspective of a product founder. I define workflows, build interfaces and application logic, structure data, ship releases and improve systems through real usage. I consider collaborations where that ownership creates meaningful product value.</p>
          <div className="tag-row"><span>Product Engineering</span><span>React / Next.js</span><span>TypeScript</span><span>Desktop Systems</span><span>Remote Collaboration</span></div>
          <div className="conversion-actions"><a className="primary-btn" href={partnershipMail}>Discuss collaboration <span>→</span></a><a className="secondary-btn" href={site.cv} download>View credentials <span>↓</span></a></div>
        </article>
        <article className="conversion-card project-card-conversion" id="project-inquiry">
          <div className="conversion-kicker">For businesses investing in better systems</div>
          <h2>Turn an operational workflow into dependable software.</h2>
          <p>I build practical systems around the way businesses operate. These can include websites, web applications, billing, inventory, customer records, reporting, desktop workflows and connected automation.</p>
          <div className="project-qualifiers"><span>Website / Web App</span><span>Desktop Software</span><span>POS System</span><span>Business Management</span><span>IoT / Automation</span></div>
          <div className="conversion-actions"><a className="primary-btn" href={projectMail}>Discuss your system <span>→</span></a><a className="secondary-btn" href={site.whatsapp} target="_blank" rel="noreferrer">Business WhatsApp <span>↗</span></a></div>
        </article>
      </div>
    </section>
  );
}
