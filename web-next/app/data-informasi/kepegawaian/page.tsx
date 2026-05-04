import { redirect } from "next/navigation";
import { directExternalRoutes } from "@/data/site";

export default function Page() {
  redirect(directExternalRoutes.get("/data-informasi/kepegawaian") ?? "https://bkpsdm.konaweselatankab.go.id");
}
