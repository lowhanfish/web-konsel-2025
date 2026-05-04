import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Agenda dan Pengumuman",
  description: "Informasi agenda pimpinan daerah dan pengumuman resmi.",
  path: "/agenda-pengumuman",
});

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Agenda dan Pengumuman" description="Agenda pimpinan daerah dan pengumuman resmi." />
      <div className="glass rounded-2xl p-5 neon-hover">
        Gunakan menu subhalaman untuk melihat agenda pimpinan atau pengumuman resmi beserta dokumen pendukung.
      </div>
    </section>
  );
}
