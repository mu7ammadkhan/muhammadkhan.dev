export function SectionHead({ title, count }: { title: string; count: string }) {
  return (
    <div className="sect-head">
      <h2>{title}</h2>
      <span>{count}</span>
    </div>
  );
}
