import PageHeader from "@/components/ui/PageHeader";

export default function IPKDPage() {
  const items = ["Dimensi Transparansi APBD", "Dimensi Keterbukaan Kinerja"];

  return (
    <section className="space-y-6">
      <PageHeader
        eyebrow="Data & Informasi"
        title="IPKD"
        description="Viewer PDF untuk dokumen indikator kinerja dan transparansi pengelolaan keuangan daerah."
      />
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="glass rounded-2xl px-4 py-3 neon-hover">
            {item}
          </li>
        ))}
      </ul>
      <iframe
        src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        className="h-[70vh] w-full rounded-2xl border border-[color:var(--border)]"
      />
    </section>
  );
}
