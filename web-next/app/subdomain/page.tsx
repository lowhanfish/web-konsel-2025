import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Subdomain",
  description: "Daftar subdomain Pemerintah Kabupaten Konawe Selatan beserta informasi peruntukannya.",
  path: "/subdomain",
});

const items = [
  { name: "diskominfo", purpose: "Portal Dinas Komunikasi Informatika dan Persandian" },
  { name: "bkpsdm", purpose: "Layanan kepegawaian dan manajemen ASN" },
  { name: "webgis", purpose: "Sistem peta digital dan geospasial" },
];

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Subdomain" description="Daftar subdomain pemerintah daerah dan peruntukannya." />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.name} className="glass rounded-2xl p-5 neon-hover">
            <h2 className="text-lg font-semibold">{item.name}.konaweselatankab.go.id</h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">{item.purpose}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
