import type { ReactNode } from "react";
import PageHeader from "./PageHeader";

export default function Section({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-6">
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      {children}
    </section>
  );
}
