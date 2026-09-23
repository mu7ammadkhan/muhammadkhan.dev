import { SectionHead } from "@/components/SectionHead";
import { CardSlider } from "@/components/ui/CardSlider";
import { businessTypes } from "@/data/portfolio";

export function BusinessSoftwareSection() {
  return (
    <section className="content-section business-software" id="business-software">
      <SectionHead title="Software for every business" count="Capabilities" />
      <div className="section-intro-row">
        <p>The named POS products are proven examples. They do not define the limit of what I can build. I can design a complete system around the workflow of virtually any shop, office, clinic, showroom or service business.</p>
        <span>your workflow → your software</span>
      </div>
      <CardSlider label="Business software categories">
        {businessTypes.map(([business, description], index) => (
          <article className="business-type-card" key={business}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{business}</h3>
            <p>{description}</p>
          </article>
        ))}
      </CardSlider>
      <p className="business-any"><strong>Beyond these categories,</strong> custom software can be planned for any business with a repeatable operational workflow.</p>
    </section>
  );
}
