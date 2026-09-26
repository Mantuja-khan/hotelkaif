import { Link } from "react-router-dom";
import { ArrowUpRight, Utensils, Heart, Sparkles, Compass, Camera, MapPin, Award } from "lucide-react";
import { PageHero } from "@/components/arcova";
import diningImg from "@/assets/madhubhan-dining.jpg";
import spaImg from "@/assets/madhubhan-spa.jpg";
import heroImg from "@/assets/madhubhan-resort-hero.jpg";
import horizonImg from "@/assets/project-horizon.jpg";

export const experienceCategories = [
  {
    id: "cuisine",
    title: "Cuisine",
    eyebrow: "Flavours & Gastronomy",
    icon: Utensils,
    image: diningImg,
    link: "/cuisine",
    description: "Indulge in award-winning Gujarati thalis, open-air Banyan Tree dining, wood-fired Mediterranean delights, and custom starlit dinners.",
    highlights: ["The Banyan Tree Al Fresco", "24 Seven Global Kitchen", "Kouzina Italian Bistro", "Romantic Poolside Dinners"]
  },
  {
    id: "wellness",
    title: "Wellness",
    eyebrow: "Holistic Health & Spa",
    icon: Heart,
    image: spaImg,
    link: "/spa-wellness",
    description: "Reawaken your senses with restorative Ayurvedic massages, Shirodhara therapies, sunrise yoga, and invigorating vitality pools.",
    highlights: ["Signature Ayurvedic Abhyanga", "Hydrotherapy & Steam Sanctuary", "Open-Air Yoga Pavilions", "Naturopathy Consultations"]
  },
  {
    id: "celebration",
    title: "Celebration",
    eyebrow: "Weddings & Banquets",
    icon: Sparkles,
    image: heroImg,
    link: "/wedding",
    description: "Host royal weddings, milestone celebrations, and lavish banquets across 22 acres of landscaped gardens and grand ballrooms.",
    highlights: ["The Grand Lotus Lawn", "Pillarless Royal Ballroom", "Mango Orchard Sangeet Deck", "Dedicated Event Concierge"]
  },
  {
    id: "attraction",
    title: "Attraction",
    eyebrow: "Resort Leisure & Sightseeing",
    icon: Compass,
    image: horizonImg,
    link: "/attractions",
    description: "Discover the world's longest winding resort swimming pool, organic fruit orchards, Amul Heritage Museum, and serene bird-watching trails.",
    highlights: ["Longest Swimming Pool in Gujarat", "Resort Flora & Organic Walk", "Amul Dairy Museum (Anand)", "Sardar Patel Heritage Memorial"]
  }
];

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Unforgettable Moments"
        title={
          <>
            Curated Experiences.
            <br />
            <em>Crafted For You.</em>
          </>
        }
        text="Explore our four signature pillars of experiences designed to inspire, restore, and delight during every moment of your stay."
        image={horizonImg}
      />

      <section className="section bg-background">
        <div className="section-intro mb-12">
          <p className="eyebrow">Discover What Awaits</p>
          <h2>
            Four Pillars
            <br />
            <em>Of Madhubhan</em>
          </h2>
          <p className="section-note">
            Whether seeking tranquility, culinary discovery, joyous celebrations, or local wonders, immerse yourself in our signature experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {experienceCategories.map((exp) => {
            const Icon = exp.icon;
            return (
              <article
                key={exp.id}
                className="group bg-card border border-border/60 hover:border-primary/50 transition-all duration-300 rounded-sm overflow-hidden flex flex-col shadow-sm"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs uppercase tracking-widest px-3 py-1 font-semibold border border-border/40 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    <span>{exp.title}</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="eyebrow !mb-1 text-xs">{exp.eyebrow}</p>
                    <h3 className="text-2xl font-serif mb-3 group-hover:text-primary transition-colors">
                      {exp.title} Experience
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="border-t border-border/40 pt-4 mb-6">
                      <p className="text-xs uppercase tracking-widest font-semibold text-foreground/80 mb-3">
                        Featured Highlights
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                    <Link
                      to={exp.link}
                      className="text-xs uppercase tracking-widest text-primary font-semibold hover:underline inline-flex items-center gap-1.5"
                    >
                      Explore {exp.title} <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to={exp.link}
                      className="gold-button !text-xs !py-2.5 !px-5"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="dark-callout">
        <p className="eyebrow">Personalized Itineraries</p>
        <h2>
          Let Us Curate
          <br />
          <em>Your Perfect Getaway</em>
        </h2>
        <p>From private spa treatments to heritage tours and dinner reservations, let our experience designers plan your stay.</p>
        <Link to="/contact">
          Request Custom Itinerary <ArrowUpRight />
        </Link>
      </section>
    </>
  );
}
