export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="space-y-3">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-[var(--font-serif)] text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
      {description ? <p className="max-w-3xl text-[color:var(--muted)]">{description}</p> : null}
    </header>
  );
}
