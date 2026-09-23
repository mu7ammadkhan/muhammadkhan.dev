export function SiteHeader() {
  return (
    <header className="os-bar">
      <div className="os-left">
        <span className="status-dot" />
        <span className="crumb"><b>Portfolio</b></span>
      </div>
      <nav className="mini-nav" aria-label="Primary navigation">
        <a href="/#projects">Work</a>
        <a href="/#hire">Collaborate</a>
        <a href="/#project-inquiry">Business systems</a>
      </nav>
    </header>
  );
}
