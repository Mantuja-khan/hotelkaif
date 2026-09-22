import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, Building2, Compass, DraftingCompass, Home, MoveUpRight, Users } from "lucide-react";
import hero from "@/assets/madhubhan-resort-hero.jpg";
import horizon from "@/assets/project-horizon.jpg";
import aurora from "@/assets/project-aurora.jpg";
import edgewood from "@/assets/project-edgewood.jpg";
import maple from "@/assets/project-maple.jpg";
import interior from "@/assets/interior-living.jpg";
import spa from "@/assets/madhubhan-spa.jpg";
import suite from "@/assets/madhubhan-suite.jpg";
import dining from "@/assets/madhubhan-dining.jpg";

export const heroSlides = [
  {
    image: hero,
    title: "Palace Arrival",
    subtitle: "A world of timeless hospitality",
    alt: "Madhubhan Resort and Spa grand palace entrance at golden hour",
  },
  {
    image: suite,
    title: "Heritage Suites",
    subtitle: "Sanctuaries of quiet elegance",
    alt: "Luxurious heritage suites and private retreats",
  },
  {
    image: spa,
    title: "Spa Sanctuary",
    subtitle: "Restorative wellness & mindful rituals",
    alt: "Tranquil spa sanctuary and wellness pavilion",
  },
  {
    image: dining,
    title: "Moonlit Dining",
    subtitle: "Soulful culinary creations",
    alt: "Atmospheric moonlit dining by the poolside",
  },
  {
    image: interior,
    title: "Resort Living",
    subtitle: "Lush gardens and timeless comfort",
    alt: "Serene living spaces and lush courtyards",
  },
];

export const projects = [
  { name: "The Palace Arrival", location: "Madhubhan Resort", image: hero, shape: "tall" },
  { name: "Heritage Suites", location: "Garden Wing", image: suite, shape: "wide" },
  { name: "The Spa Sanctuary", location: "Wellness Pavilion", image: spa, shape: "wide" },
  { name: "Moonlit Dining", location: "Poolside Terrace", image: dining, shape: "tall" },
  { name: "Tropical Courtyards", location: "Resort Gardens", image: edgewood, shape: "wide" },
  { name: "Private Retreats", location: "Villa Collection", image: interior, shape: "wide" },
];

export const services = [
  { title: "Luxury Stays", icon: Home, text: "Beautiful rooms and suites shaped by comfort and quiet elegance." },
  { title: "Spa & Wellness", icon: Compass, text: "Restorative rituals inspired by nature and timeless traditions." },
  { title: "Fine Dining", icon: Award, text: "Memorable cuisine served in atmospheric settings." },
  { title: "Celebrations", icon: Building2, text: "Grand occasions planned with warmth, detail, and grace." },
  { title: "Curated Escapes", icon: DraftingCompass, text: "Thoughtful experiences for couples, families, and friends." },
];

export const insights = [
  { date: "May 13, 2026", title: "A Slower Rhythm of Wellness", image: spa },
  { date: "Apr 26, 2026", title: "The Art of a Memorable Stay", image: suite },
  { date: "Apr 10, 2026", title: "Flavours Beneath the Evening Sky", image: dining },
];

export function ArrowLink({ to, children, light = false }: { to: "/projects" | "/services" | "/insights" | "/contact"; children: React.ReactNode; light?: boolean }) {
  return <Link to={to} className={light ? "outline-link light" : "outline-link"}>{children}<ArrowRight /></Link>;
}

export function PageHero({ eyebrow, title, text, image = hero }: { eyebrow: string; title: React.ReactNode; text: string; image?: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-img-wrap">
        <img src={image} alt="Madhubhan Resort and Spa" className="page-hero-img" width={1920} height={1080} />
      </div>
      <div className="page-hero-shade" />
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    ["01", "Arrive", "A warm welcome and effortless check-in begin your escape."],
    ["02", "Unwind", "Settle into spaces designed for comfort and calm."],
    ["03", "Indulge", "Discover soulful dining and restorative spa rituals."],
    ["04", "Explore", "Enjoy gardens, pools, culture, and curated experiences."],
    ["05", "Remember", "Leave with moments that stay with you long after."],
  ];

  return (
    <>
      <section className="home-hero">
        <div className="hero-slides">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.title}
                className={`hero-slide ${isActive ? "active" : ""}`}
                aria-hidden={!isActive}
              >
                <img
                  key={isActive ? `hero-active-${index}` : `hero-idle-${index}`}
                  src={slide.image}
                  alt={slide.alt}
                  className="hero-slide-img"
                  width={1920}
                  height={1088}
                />
              </div>
            );
          })}
        </div>
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">A world of timeless hospitality</p>
          <h1>Luxury Experiences<br />at <em>Madhubhan</em><br />Resort &amp; Spa</h1>
          <p>Discover a serene escape where gracious Indian hospitality, restorative wellness, and unforgettable dining come together.</p>
          <ArrowLink to="/projects" light>Explore the resort</ArrowLink>
        </div>

        <div className="hero-slide-nav" role="tablist" aria-label="Hero carousel navigation">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`hero-slide-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}: ${slide.title}`}
              aria-selected={index === currentSlide}
              role="tab"
            >
              <span className="dot-bar" />
              <span className="dot-label">0{index + 1} {slide.title}</span>
            </button>
          ))}
        </div>

        <div className="hero-scroll"><span>Discover</span><i /></div>
      </section>

      <section className="stats">
        <div><Award /><strong>5★</strong><span>Luxury Hospitality</span></div>
        <div><Building2 /><strong>22</strong><span>Acres of Tranquility</span></div>
        <div><Users /><strong>98%</strong><span>Guest Satisfaction</span></div>
        <div><Award /><strong>20+</strong><span>Curated Experiences</span></div>
      </section>

      <section className="section projects-home">
        <div className="section-intro">
          <p className="eyebrow">Discover Madhubhan</p>
          <h2>Spaces<br />That Define<br /><em>Excellence</em></h2>
          <p className="section-note">From tranquil suites to candlelit dining, every space is crafted to make your stay extraordinary.</p>
          <ArrowLink to="/projects">Explore all spaces</ArrowLink>
        </div>
        <div className="project-mosaic">
          {projects.map((p, i) => (
            <article
              className={`project-card ${p.shape}`}
              style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              key={p.name}
            >
              <img src={p.image} alt={p.name} loading="lazy" width={1200} height={p.shape === "tall" ? 1400 : 900} />
              <div>
                <h3>{p.name}</h3>
                <p>{p.location}</p>
                <span><MoveUpRight /></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-band">
        <div className="services-title">
          <p className="eyebrow">Your stay, elevated</p>
          <h2>Meaningful<br /><em>Experiences</em></h2>
          <p>Every detail is considered, from the welcome at our doors to the memories you carry home.</p>
          <ArrowLink to="/services" light>Explore experiences</ArrowLink>
        </div>
        {services.map(({ title, icon: Icon, text }) => (
          <article className="service-card" key={title}>
            <Icon />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="process section">
        <div className="section-intro">
          <p className="eyebrow">Your journey</p>
          <h2>Come Away<br />Completely Renewed</h2>
          <ArrowLink to="/services">Plan your stay</ArrowLink>
        </div>
        <div className="steps">
          {steps.map(([n, t, d]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="insights-band">
        <div className="section-intro">
          <p className="eyebrow">Insights</p>
          <h2>Ideas. Trends.<br /><em>Inspiration.</em></h2>
          <ArrowLink to="/insights" light>View all articles</ArrowLink>
        </div>
        <div className="insight-grid">
          {insights.map((a) => (
            <article key={a.title}>
              <img src={a.image} alt="" loading="lazy" width={1200} height={900} />
              <div>
                <small>{a.date}</small>
                <h3>{a.title}</h3>
                <Link to="/insights">Read more <ArrowRight /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function ProjectsGrid() {
  return (
    <div className="all-projects">
      {projects.map((p, i) => (
        <article key={p.name} className={i % 3 === 0 ? "feature-project" : ""}>
          <img src={p.image} alt={p.name} loading="lazy" width={1200} height={1000} />
          <div>
            <span>0{i + 1}</span>
            <h2>{p.name}</h2>
            <p>{p.location} · Madhubhan Resort &amp; Spa</p>
          </div>
        </article>
      ))}
    </div>
  );
}