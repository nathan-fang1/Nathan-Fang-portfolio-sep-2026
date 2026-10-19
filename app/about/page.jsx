import Html from "@/components/Html";
import html from "@/content/about";

export const metadata = { title: "About · Nathan Fang" };

export default function Page() {
  return <Html html={html} />;
}
