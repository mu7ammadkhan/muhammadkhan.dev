import { ContactSection } from "@/components/sections/ContactSection";
import { site } from "@/data/portfolio";

const links = [
  ["Email", `mailto:${site.email}`, "email", "@"],
  ["LinkedIn", site.linkedin, "linkedin", "in"],
  ["Fiverr", site.fiverr, "fiverr", "fi"],
  ["Indeed", site.indeed, "indeed", "i"],
  ["GitHub", site.github, "github", "GH"],
  ["WhatsApp", site.whatsapp, "whatsapp", "WA"],
  ["CV", site.cv, "cv", "CV"],
] as const;

function BrandIcon({ brand, mark }: { brand: string; mark: string }) {
  if (brand === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.1 20.45H3.54V8.98H7.1v11.47Z" /></svg>;
  if (brand === "github") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.24c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.26c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" /></svg>;
  if (brand === "email") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2 9 6 9-6H3Zm18 10V9.4l-8.45 5.63a1 1 0 0 1-1.1 0L3 9.4V17h18Z" /></svg>;
  if (brand === "fiverr") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 9.4h1.6V8.2c0-2.7 1.5-4.2 4.5-4.2.9 0 1.7.1 2.4.4v2.8c-.5-.2-1-.2-1.5-.2-1.2 0-1.8.5-1.8 1.6v.8h3v3h-3V20H9.6v-7.6H8v-3Zm8.8 0h3.6V20h-3.6V9.4Zm1.8-1.2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" /></svg>;
  if (brand === "indeed") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.2 2.7c2.5.4 4.5 1.7 5.5 3.5-2-1.1-4.2-1.7-6.7-1.5-2.5.1-4.7.9-6.5 2.3 1.4-2.8 4.3-4.9 7.7-4.3ZM9.5 8.8a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm.6 4h3.8V22h-3.8v-9.2Z" /></svg>;
  if (brand === "whatsapp") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.84 9.84 0 0 0-8.42 14.93L2 22l5.2-1.58A9.96 9.96 0 1 0 12.04 2Zm0 17.99a8.03 8.03 0 0 1-4.1-1.12l-.29-.17-3.08.94.99-3-.19-.31a7.84 7.84 0 1 1 6.67 3.66Zm4.42-5.87c-.24-.12-1.43-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.77.95-.14.16-.28.18-.52.06-1.42-.71-2.35-1.27-3.29-2.88-.25-.43.25-.4.71-1.33.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62 1.52.66 2.12.71 2.88.6.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" /></svg>;
  return <b aria-hidden="true">{mark}</b>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-inner">
    <ContactSection />
    <section className="footer-links-section"><div><span className="footer-kicker">Profiles and contact</span><h2>Connect with me</h2><p>Follow my work, discuss a project or view my professional profiles.</p></div>
      <nav className="footer-socials" aria-label="Social profiles and contact links">{links.map(([label, href, brand, mark]) => <a key={label} className={`footer-social ${brand}`} href={href} aria-label={label} title={label} target={brand === "email" ? undefined : "_blank"} rel={brand === "email" ? undefined : "noreferrer"}><span className="brand-icon"><BrandIcon brand={brand} mark={mark} /></span></a>)}</nav>
    </section>
    <div className="footer-bottom"><span>© 2026 Muhammad Khan. All rights reserved.</span><span>Karachi, Pakistan · Available globally</span></div>
  </div></footer>;
}
