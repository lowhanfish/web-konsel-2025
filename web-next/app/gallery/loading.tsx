export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="skeleton h-12 rounded-2xl w-80" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="skeleton h-56 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
