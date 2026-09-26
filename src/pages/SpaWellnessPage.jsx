import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Heart, Sun, Droplets, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/arcova";
import spaHeroImg from "@/assets/madhubhan-wellness-hero.png";
import salonImg from "@/assets/sallon.webp";
import spaTherapyImg from "@/assets/Saloon.webp";

export const therapies = [
  {
    title: "Signature Madhubhan Abhyanga",
    duration: "75 / 90 Minutes",
    category: "Ayurvedic Healing",
    description: "A synchronized full-body massage using warm, herb-infused cold-pressed oils selected specifically for your dosha type to release toxins and balance vital energies.",
    benefits: ["Improves blood circulation", "Relieves muscle tightness", "Induces deep restful sleep"]
  },
  {
    title: "Shirodhara Bliss Ritual",
    duration: "60 Minutes",
    category: "Mind & Stress Relief",
    description: "A continuous, gentle stream of warm medicated herbal oil poured over the forehead 'third eye' chakra, soothing the nervous system and washing away mental exhaustion.",
    benefits: ["Calms hyperactive thoughts", "Alleviates headaches & insomnia", "Enhances mental clarity"]
  },
  {
    title: "Rejuvenating Floral Body Polish",
    duration: "60 Minutes",
    category: "Exfoliation & Glow",
    description: "Organic sandalwood, crushed rose petals, wild turmeric, and honey gently buff away dead cells before an invigorating steam and botanical moisture bath.",
    benefits: ["Smooths and softens skin texture", "Restores radiant natural glow", "Deep lymphatic stimulation"]
  },
  {
    title: "Holistic Hydrotherapy & Steam",
    duration: "45 Minutes",
    category: "Detox & Vitality",
    description: "Invigorating thermal baths, eucalyptus steam chambers, and therapeutic rain showers designed to detoxify pores and invigorate the cardiovascular system.",
    benefits: ["Flushes deep-tissue toxins", "Relaxes joints and spine", "Boosts cellular metabolism"]
  }
];

export default function SpaWellnessPage() {
  return (
    <>
      <PageHero
        eyebrow="Sanctuary of Wellbeing"
        title={
          <>
            Restorative Rituals.
            <br />
            <em>Mindful Calm.</em>
          </>
        }
        text="Immerse yourself in centuries of Ayurvedic wisdom, restorative body rituals, and tranquil garden wellness pavilions."
        image={spaHeroImg}
      />

      {/* Featured Salon & Spa Showcase (Matching Image 3) */}
      <section className="spa-salon-showcase-section">
        {/* 1 :- Salon */}
        <div className="spa-salon-item">
          <div className="spa-salon-image-container">
            <div className="spa-salon-brand-badge flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <div>
                <span className="font-serif italic text-lg tracking-wide block leading-none">Madhubhan</span>
                <span className="text-[10px] tracking-widest uppercase opacity-90 block">Signature Salon</span>
              </div>
            </div>
            <img
              src={salonImg}
              alt="Madhubhan Signature Salon"
              loading="lazy"
            />
          </div>
          <div className="spa-salon-card spa-salon-card-overlap-right">
            <h2 className="spa-salon-card-title">Salon</h2>
            <p className="spa-salon-card-desc">
              Dedicated to your good looks, the Signature Salon at Madhubhan Resort and Spa is one beauty salon even the most protective of their beauty secrets can't keep to themselves. The Signature Salon is a unisex salon which offers haircuts, hair wash, blow drying, hair styling, colouring, protein and hair fall treatments along with deep conditioning and Hair Spa Treatments.
            </p>
            <Link to="/contact" className="spa-salon-view-btn">
              VIEW
            </Link>
          </div>
        </div>

        {/* 2 :- Spa */}
        <div className="spa-salon-item">
          <div className="spa-salon-image-container">
            <div className="spa-salon-brand-badge flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber-300" />
              <div>
                <span className="font-serif italic text-lg tracking-wide block leading-none">Madhubhan</span>
                <span className="text-[10px] tracking-widest uppercase opacity-90 block">Rejou – The Healing Spa</span>
              </div>
            </div>
            <img
              src={spaTherapyImg}
              alt="Rejou Spa - Ayurvedic Shirodhara Treatment"
              loading="lazy"
            />
          </div>
          <div className="spa-salon-card spa-salon-card-overlap-left">
            <h2 className="spa-salon-card-title">Spa</h2>
            <p className="spa-salon-card-desc">
              Immerse yourself in authentic Ayurvedic therapies, holistic healing, and transformative wellness rituals at Rejou – The Healing Spa. Our skilled therapists combine ancient herbal remedies, warm essential oils, and therapeutic massages including Shirodhara, Abhyanga, and natural botanical body wraps to restore complete balance and vitality.
            </p>
            <Link to="/contact" className="spa-salon-view-btn">
              VIEW
            </Link>
          </div>
        </div>
      </section>

      {/* Spa Therapies Section */}
      <section className="section bg-background">
        <div className="section-intro mb-12">
          <p className="eyebrow">The Spa Sanctuary</p>
          <h2>
            Harmonise Body,
            <br />
            <em>Mind &amp; Spirit</em>
          </h2>
          <p className="section-note">
            Surrounded by trickling water fountains and soothing botanical aromas, our wellness sanctuary offers transformative treatments tailored to your body's innate rhythm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {therapies.map((item) => (
            <article
              key={item.title}
              className="bg-card border border-border/60 p-8 rounded-sm shadow-sm hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                    {item.category}
                  </span>
                  <span className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-sm">
                    {item.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-serif mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="border-t border-border/40 pt-4 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/80 mb-2">Key Benefits</p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {item.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{b}</span>
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
                  Book Treatment <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="gold-button !text-xs !py-2 !px-4"
                >
                  Consult Specialist
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Wellness Facilities */}
      <section className="section bg-card border-y border-border/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <Sun className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-serif mb-2">Sunrise Yoga &amp; Pranayama</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Guided morning breathwork and gentle asanas at our open-air lotus deck.
            </p>
          </div>
          <div className="p-6 border-y md:border-y-0 md:border-x border-border/40">
            <Droplets className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-serif mb-2">Signature Vitality Pools</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Temperature-controlled hydrotherapy pools with massaging jet streams and cold plunge.
            </p>
          </div>
          <div className="p-6">
            <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-serif mb-2">Ayurvedic Doctors Consultation</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              One-on-one pulse diagnosis (Nadi Pariksha) and customized herbal diet recommendations.
            </p>
          </div>
        </div>
      </section>

      <section className="dark-callout">
        <p className="eyebrow">Wellness Retreats</p>
        <h2>
          3-Day &amp; 7-Day
          <br />
          <em>Rejuvenation Journeys</em>
        </h2>
        <p>Step away from daily demands and immerse yourself in all-inclusive detox, yoga, and wellness packages.</p>
        <Link to="/contact">
          Explore Retreat Packages <ArrowUpRight />
        </Link>
      </section>
    </>
  );
}
