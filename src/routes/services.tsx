import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, services } from "@/components/arcova";
import hero from "@/assets/project-edgewood.jpg";

export const Route = createFileRoute("/services")({ head: () => ({ meta: [
  { title: "Resort Experiences | Madhubhan Resort & Spa" }, { name: "description", content: "Explore luxury stays, spa rituals, fine dining, celebrations, and curated escapes." },
  { property: "og:title", content: "Experiences at Madhubhan Resort & Spa" }, { property: "og:description", content: "Meaningful moments, graciously created." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ServicesPage });
function ServicesPage(){ return <><PageHero eyebrow="Resort experiences" title={<>Every Stay,<br /><em>Beautifully Yours.</em></>} text="From quiet mornings to grand celebrations, discover experiences created around you." image={hero}/><section className="service-list section">{services.map(({title,text,icon:Icon},i)=><article key={title}><span>0{i+1}</span><Icon/><div><h2>{title}</h2><p>{text} Our attentive team brings every moment together with warmth and precision.</p></div></article>)}</section><section className="dark-callout"><p className="eyebrow">One seamless escape</p><h2>More time to pause.<br /><em>More to remember.</em></h2><p>Let us shape a stay around your pace, your people, and the moments that matter most.</p><Link to="/contact">Plan your stay <ArrowUpRight /></Link></section></>}