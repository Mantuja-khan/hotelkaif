import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHero, services } from "@/components/arcova";
import hero from "@/assets/project-edgewood.jpg";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resort experiences"
        title={
          <>
            Every Stay,
            <br />
            <em>Beautifully Yours.</em>
          </>
        }
        text="From quiet mornings to grand celebrations, discover experiences created around you."
        image={hero}
      />
      <section className="service-list section">
        {services.map(({ title, text, icon: Icon }, i) => (
          <article key={title}>
            <span>0{i + 1}</span>
            <Icon />
            <div>
              <h2>{title}</h2>
              <p>
                {text} Our attentive team brings every moment together with warmth and precision.
              </p>
            </div>
          </article>
        ))}
      </section>
      <section className="dark-callout">
        <p className="eyebrow">One seamless escape</p>
        <h2>
          More time to pause.
          <br />
          <em>More to remember.</em>
        </h2>
        <p>Let us shape a stay around your pace, your people, and the moments that matter most.</p>
        <Link to="/contact">
          Plan your stay <ArrowUpRight />
        </Link>
      </section>
    </>
  );
}
