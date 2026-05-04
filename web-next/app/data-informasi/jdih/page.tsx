import { redirect } from "next/navigation";
import { directExternalRoutes } from "@/data/site";

export default function Page() {
  redirect(directExternalRoutes.get("/data-informasi/jdih") ?? "https://jdih.konaweselatankab.go.id");
}
