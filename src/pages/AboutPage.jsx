import { PageHero } from "@/components/arcova";
import interior from "@/assets/interior-living.jpg";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Rooted in Warmth.
            <br />
            <em>Made for Memories.</em>
          </>
        }
        text="Madhubhan is a peaceful resort sanctuary where nature, heritage, and heartfelt hospitality meet."
        image={interior}
      />
      <section className="editorial-split section">
        <div>
          <p className="eyebrow">Our philosophy</p>
          <h2>
            Thoughtful by nature.
            <br />
            Gracious by tradition.
          </h2>
        </div>
        <div>
          <p className="lead">
            We believe true luxury is found in time, space, and the feeling of being genuinely cared for.
          </p>
          <p>
            From garden-facing rooms to restorative rituals and memorable meals,
            every experience is composed with warmth and quiet attention.
          </p>
        </div>
      </section>
      <section className="image-statement">
        <img
          src={interior}
          alt="Elegant Madhubhan resort interior"
          loading="lazy"
          width={1400}
          height={900}
        />
        <blockquote>
          “The finest journeys are remembered not only for where we went, but for
          how we felt.”
        </blockquote>
      </section>
      <section className="values section">
        <p className="eyebrow">What guides us</p>
        <div>
          {[
            [
              "01",
              "Warmth",
              "Every guest is welcomed with heartfelt Indian hospitality.",
            ],
            [
              "02",
              "Wellbeing",
              "Nature and mindful rituals restore body and spirit.",
            ],
            [
              "03",
              "Wonder",
              "Every stay holds space for discovery and delight.",
            ],
          ].map(([num, title, desc]) => (
            <article key={num}>
              <span>{num}</span>
              <h2>{title}</h2>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
