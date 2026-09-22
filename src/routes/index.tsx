import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/arcova";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Madhubhan Resort & Spa | Luxury Experiences" },
    { name: "description", content: "Luxury experiences, restorative wellness, fine dining, and gracious hospitality at Madhubhan Resort & Spa." },
    { property: "og:title", content: "Luxury Experiences at Madhubhan Resort & Spa" },
    { property: "og:description", content: "Escape to tranquil suites, lush gardens, soulful dining, and exceptional wellness." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});
