import { Link } from "react-router-dom";
import { ArrowUpRight, Heart, Users, Sparkles, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/arcova";
import heroImg from "@/assets/madhubhan-resort-hero.jpg";
import auroraImg from "@/assets/project-aurora.jpg";
import edgewoodImg from "@/assets/project-edgewood.jpg";

export const weddingVenues = [
  {
    name: "The Royal Lotus Lawn",
    capacity: "Up to 2,500 Guests",
    type: "Open-Air Grand Lawn",
    image: heroImg,
    description: "An expansive lush green lawn bordered by royal palms and twinkling fairy lights, offering an enchanting backdrop for grand Indian wedding receptions and pheras under the stars."
  },
  {
    name: "The Grand Ballroom & Foyer",
    capacity: "Up to 600 Guests",
    type: "Pillarless Banquet",
    image: auroraImg,
    description: "An opulent, climate-controlled pillarless ballroom equipped with state-of-the-art acoustic design, sparkling chandeliers, and a private pre-function royal foyer."
  },
  {
    name: "The Mango Orchard & Courtyard",
    capacity: "Up to 450 Guests",
    type: "Heritage Open-Air Courtyard",
    image: edgewoodImg,
    description: "Shaded by mature mango trees, this idyllic rustic venue is perfect for vibrant Mehendi celebrations, sunny Haldi rituals, and intimate high-tea gatherings."
  }
];

export default function WeddingPage() {
  return (
    <>
      <PageHero
        eyebrow="Celebrations of Love"
        title={
          <>
            Weddings &amp;
            <br />
            <em>Grand Occasions.</em>
          </>
        }
        text="Turn your dream wedding into an unforgettable celebration surrounded by royal architecture, lavish banquet feasts, and picturesque gardens."
        image={heroImg}
      />

      <section className="section bg-background">
        <div className="section-intro mb-12">
          <p className="eyebrow">Destination Weddings</p>
          <h2>
            Where Love Meets
            <br />
            <em>Unmatched Splendour</em>
          </h2>
          <p className="section-note">
            From majestic baraat processions to starlit pheras and lavish multi-cuisine feasts, Madhubhan offers a timeless canvas for your fairytale wedding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {weddingVenues.map((v) => (
            <article
              key={v.name}
              className="bg-card border border-border/60 hover:border-primary/50 transition-all duration-300 rounded-sm overflow-hidden flex flex-col shadow-sm"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-background/90 text-foreground text-xs uppercase tracking-widest px-3 py-1 font-semibold border border-border/40">
                  {v.type}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>{v.capacity}</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-3 text-foreground">{v.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {v.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="text-xs uppercase tracking-widest text-primary font-semibold hover:underline inline-flex items-center gap-1.5"
                  >
                    Venue Tour <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="gold-button !text-xs !py-2 !px-4"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Wedding Services Banner */}
      <section className="section bg-card border-y border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">Comprehensive Planning</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">The Madhubhan Wedding Experience</h2>
            <p className="text-sm text-muted-foreground">Every nuance of your wedding is handled by our dedicated wedding concierges with flawless hospitality.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Bespoke Royal Catering", desc: "Customized sattvic, traditional Gujarati, Marwari, Pan-Asian, and international banquet menus." },
              { title: "Theme Decor & Lighting", desc: "Collaborations with top wedding designers for ethereal floral mandaps and magical illumination." },
              { title: "Bridal Spa Sanctuary", desc: "Pre-wedding wellness pampering and beauty therapies for the bride, groom, and wedding party." },
              { title: "Guest Accommodations", desc: "Luxurious suites and cottages ensuring absolute comfort for family and out-of-town guests." },
            ].map((s) => (
              <div key={s.title} className="p-6 bg-background border border-border/40 rounded-sm">
                <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-serif text-lg mb-2">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-callout">
        <p className="eyebrow">Plan Your Special Day</p>
        <h2>
          Speak with Our Wedding
          <br />
          <em>Concierge Today</em>
        </h2>
        <p>Let our specialists help you design a bespoke wedding package tailored to your traditions, date, and guest count.</p>
        <Link to="/contact">
          Schedule Consultation <ArrowUpRight />
        </Link>
      </section>
    </>
  );
}
