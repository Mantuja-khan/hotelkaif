import { Link } from "react-router-dom";
import { ArrowUpRight, Compass, MapPin, Camera, Trees, Waves, Landmark, Sparkles } from "lucide-react";
import { PageHero } from "@/components/arcova";
import horizonImg from "@/assets/project-horizon.jpg";
import heroImg from "@/assets/madhubhan-resort-hero.jpg";
import interiorImg from "@/assets/interior-living.jpg";

export const attractions = [
  {
    title: "Gujarat's Longest Meandering Pool",
    category: "Resort Highlight",
    icon: Waves,
    image: horizonImg,
    distance: "Within Resort Grounds",
    description: "Spanning across hundreds of feet through tropical palms, our winding signature pool features sunken lounge decks, baby pools, and serene sunbathing terraces.",
    highlights: ["Sunken pool lounges", "Poolside refreshments & mocktails", "Dedicated kids splash zone"]
  },
  {
    title: "22-Acre Flora & Bird Trails",
    category: "Resort Nature Sanctuary",
    icon: Trees,
    image: interiorImg,
    distance: "Within Resort Grounds",
    description: "Take tranquil morning guided walks through century-old trees, organic mango orchards, and flowering bougainvillea home to over 40 species of native and migratory birds.",
    highlights: ["Guided sunrise naturalist walks", "Over 40 native bird species", "Botanical garden taxonomy"]
  },
  {
    title: "Amul Dairy Heritage Museum",
    category: "Cultural Sightseeing",
    icon: Landmark,
    image: heroImg,
    distance: "6 km from Madhubhan (15 min drive)",
    description: "Visit the historic cradle of India's 'White Revolution' and the iconic Amul cooperative dairy movement with interactive exhibits and fresh dairy tastings.",
    highlights: ["Interactive cooperative exhibits", "Dr. Kurien memorial gallery", "Exclusive dairy tasting counter"]
  },
  {
    title: "Sardar Vallabhbhai Patel Memorial",
    category: "Heritage & History",
    icon: Compass,
    image: horizonImg,
    distance: "4 km from Madhubhan (10 min drive)",
    description: "Explore the ancestral home and memorial dedicated to the Iron Man of India, Sardar Vallabhbhai Patel, situated in historic Karamsad.",
    highlights: ["Preserved heritage residence", "Historical photo archives", "Peaceful memorial gardens"]
  }
];

export default function AttractionPage() {
  return (
    <>
      <PageHero
        eyebrow="Wonders &amp; Discovery"
        title={
          <>
            Attractions &amp;
            <br />
            <em>Local Discoveries.</em>
          </>
        }
        text="From Gujarat's longest resort pool to historic landmarks and serene bird trails, find wonder around every corner."
        image={horizonImg}
      />

      <section className="section bg-background">
        <div className="section-intro mb-12">
          <p className="eyebrow">Explore Anand &amp; Madhubhan</p>
          <h2>
            Resort Wonders
            <br />
            <em>&amp; Cultural Heritage</em>
          </h2>
          <p className="section-note">
            Whether relaxing within our tranquil 22-acre oasis or visiting world-renowned heritage sites nearby, discovery is always moments away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {attractions.map((att) => {
            const Icon = att.icon;
            return (
              <article
                key={att.title}
                className="bg-card border border-border/60 hover:border-primary/50 transition-all duration-300 rounded-sm overflow-hidden flex flex-col shadow-sm"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={att.image}
                    alt={att.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-background/90 text-foreground text-xs uppercase tracking-widest px-3 py-1 font-semibold border border-border/40 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    <span>{att.category}</span>
                  </span>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-primary font-medium mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{att.distance}</span>
                    </div>
                    <h3 className="text-2xl font-serif mb-3 text-foreground">{att.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {att.description}
                    </p>

                    <div className="border-t border-border/40 pt-4 mb-6">
                      <p className="text-xs uppercase tracking-widest font-semibold text-foreground/80 mb-2">Highlights</p>
                      <ul className="space-y-1.5 text-xs text-muted-foreground">
                        {att.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2">
                            <Sparkles className="w-3 h-3 text-primary shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="text-xs uppercase tracking-widest text-primary font-semibold hover:underline inline-flex items-center gap-1.5"
                    >
                      Arrange Day Trip <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="gold-button !text-xs !py-2 !px-4"
                    >
                      Plan Visit
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="dark-callout">
        <p className="eyebrow">Local Sightseeing Tours</p>
        <h2>
          Need Chauffeur or
          <br />
          <em>Guided Sightseeing?</em>
        </h2>
        <p>Our travel desk provides luxury transport and expert guides for local attractions, temple visits, and cultural tours.</p>
        <Link to="/contact">
          Speak with Travel Desk <ArrowUpRight />
        </Link>
      </section>
    </>
  );
}
