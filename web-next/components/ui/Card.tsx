import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`glass rounded-2xl p-5 neon-hover transition duration-300 ease-out ${className}`}>{children}</div>;
}
