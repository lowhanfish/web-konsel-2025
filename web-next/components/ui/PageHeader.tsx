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
        <p className="text-xs uppercase tracking-[0.3em] text-(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h1>
      {description ? <p className="max-w-3xl text-[(--muted)]">{description}</p> : null}
    </header>
  );
}
