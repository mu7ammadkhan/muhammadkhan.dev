import { SectionHead } from "@/components/SectionHead";
import { site } from "@/data/portfolio";

export function WorkWithMeSection() {
  const hiringMail = `mailto:${site.email}?subject=${encodeURIComponent("Job / Remote Opportunity")}&body=${encodeURIComponent("Hi Muhammad,\n\nI saw your portfolio and would like to discuss a role/opportunity with you.\n\nCompany:\nRole:\nLocation / Remote:\nDetails:\n")}`;
  const projectMail = `mailto:${site.email}?subject=${encodeURIComponent("Project Inquiry")}&body=${encodeURIComponent("Hi Muhammad,\n\nI saw your portfolio and would like to discuss a software project.\n\nBusiness / Company:\nWhat I need:\nProblem to solve:\nBudget range:\nTimeline:\n")}`;

  return (
    <section className="content-section" id="hire">
      <SectionHead title="Two ways to work together" count="07 / 08" />
      <div className="conversion-grid">
        <article className="conversion-card hiring-card">
          <div className="conversion-kicker">For employers & recruiters</div>
          <h2>Hiring a developer who can own more than just the UI?</h2>
          <p>I work across frontend, application logic, databases, desktop workflows, deployment and product iteration. I&apos;m open to Pakistan-based and remote opportunities in full-stack, React/Next.js, product development and software engineering.</p>
          <div className="tag-row"><span>Full-Stack</span><span>React / Next.js</span><span>TypeScript</span><span>Product Engineering</span><span>Remote</span></div>
          <div className="conversion-actions"><a className="primary-btn" href={hiringMail}>Discuss an opportunity <span>→</span></a><a className="secondary-btn" href={site.cv} download>Download CV <span>↓</span></a></div>
        </article>
        <article className="conversion-card project-card-conversion" id="project-inquiry">
          <div className="conversion-kicker">For businesses & international clients</div>
          <h2>Have a process you want to turn into software?</h2>
          <p>Tell me what your team currently manages manually, where time is being lost and what the finished workflow should achieve. I can help translate that into a practical web, desktop or automation solution.</p>
          <div className="project-qualifiers"><span>Website / Web App</span><span>Desktop Software</span><span>POS System</span><span>Business Management</span><span>IoT / Automation</span></div>
          <div className="conversion-actions"><a className="primary-btn" href={projectMail}>Start a project <span>→</span></a><a className="secondary-btn" href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a></div>
        </article>
      </div>
    </section>
  );
}
