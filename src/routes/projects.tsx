import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ProjectsGrid } from "@/components/arcova";
import hero from "@/assets/project-horizon.jpg";
export const Route = createFileRoute("/projects")({ head: () => ({ meta: [
  { title: "Resort Spaces | Madhubhan Resort & Spa" }, { name: "description", content: "Explore the suites, spa, restaurants, gardens, and gathering spaces at Madhubhan Resort & Spa." },
  { property: "og:title", content: "Discover Madhubhan Resort & Spa" }, { property: "og:description", content: "Spaces that define resort excellence." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ProjectsPage });
function ProjectsPage(){return <><PageHero eyebrow="Discover the resort" title={<>Spaces That Define<br /><em>Excellence.</em></>} text="A world of serene suites, lush gardens, soulful dining, and restorative wellness." image={hero}/><section className="section"><div className="project-heading"><p className="eyebrow">Stay · Dine · Spa · Celebrate</p><h2>Created with care.<br />Remembered for feeling.</h2></div><ProjectsGrid/></section></>}