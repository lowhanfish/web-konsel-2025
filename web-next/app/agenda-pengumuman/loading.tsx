export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="skeleton h-12 rounded-2xl w-72" />
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="skeleton h-40 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
