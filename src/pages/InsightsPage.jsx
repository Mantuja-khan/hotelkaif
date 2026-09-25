import { ArrowRight } from "lucide-react";
import { PageHero, insights } from "@/components/arcova";
import hero from "@/assets/interior-living.jpg";

export default function InsightsPage() {
  const all = [
    ...insights,
    ...insights.map((x, i) => ({
      ...x,
      title: [
        "Mornings Made for Stillness",
        "A Celebration of Local Flavours",
        "The Restorative Power of Nature",
      ][i],
    })),
  ];

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title={
          <>
            Stories. Rituals.
            <br />
            <em>Inspiration.</em>
          </>
        }
        text="Thoughts on slower travel, soulful cuisine, wellbeing, and the art of a beautiful stay."
        image={hero}
      />
      <section className="journal section">
        {all.map((a, i) => (
          <article key={`${a.title}-${i}`}>
            <img src={a.image} alt="" loading="lazy" width={1200} height={900} />
            <small>{a.date} · 6 min read</small>
            <h2>{a.title}</h2>
            <p>
              Discovering the details, traditions, and restorative moments that
              make time away truly meaningful.
            </p>
            <span>
              Read story <ArrowRight />
            </span>
          </article>
        ))}
      </section>
    </>
  );
}
