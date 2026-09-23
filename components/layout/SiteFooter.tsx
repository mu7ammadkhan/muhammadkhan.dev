import { site } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© 2026 {site.name} · Commercial software through {site.company}</span>
      <span>Web · Desktop · IoT</span>
    </footer>
  );
}
