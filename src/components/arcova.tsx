import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MoveUpRight,
  Compass,
  Award,
  Building2,
  DraftingCompass,
  Home,
  LucideIcon,
} from "lucide-react";
import heroEntrance from "@/assets/madhubhan-hero-entrance.jpg";
import heroPool from "@/assets/madhubhan-hero-pool.jpg";
import heroFacade from "@/assets/madhubhan-hero-facade.jpg";
import heroILove from "@/assets/madhubhan-hero-ilove.jpg";
import hero from "@/assets/madhubhan-hero-entrance.jpg";
import edgewood from "@/assets/project-edgewood.jpg";
import interior from "@/assets/interior-living.jpg";
import spa from "@/assets/madhubhan-spa.jpg";
import suite from "@/assets/madhubhan-suite.jpg";
import dining from "@/assets/madhubhan-dining.jpg";

// Room assets
import sig1 from "@/assets/signature-suite-slider-1.webp";
import deluxe1 from "@/assets/deluxe_room1.webp";
import deluxePrem1 from "@/assets/deluxe__premium_room1.webp";
import mandavdi1 from "@/assets/mandavandi_gom_cottages1.webp";
import zamkudi1 from "@/assets/zamkudi-gom-cottage-1.webp";
import mandavdiDeluxe1 from "@/assets/mandavdi-gom-deluxe-cottage-1.webp";
import exec1 from "@/assets/executive-suite-slider-1.webp";
import zanz1 from "@/assets/zanzaryu-suite-1.webp";
import zula1 from "@/assets/zulaniya-bridal-suite-1.webp";
import pres1 from "@/assets/presidential-suite-1.webp";

// Blog assets
import blogPetFriendly from "@/assets/blog-pet-friendly.jpg";
import blogSpaResort from "@/assets/blog-spa-resort.jpg";
import blogWeddingPlanner from "@/assets/blog-wedding-planner.jpg";

// Unforgettable Moments assets
import unforgettableSpa from "@/assets/unforgettable-spa.jpg";
import unforgettableCelebrations from "@/assets/unforgettable-celebrations.jpg";

export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  alt: string;
}

export const heroSlides: HeroSlide[] = [
  {
    image: heroEntrance,
    title: "Palace Arrival",
    subtitle: "A world of timeless hospitality",
    alt: "Madhubhan Resort grand palace entrance at twilight",
  },
  {
    image: heroPool,
    title: "Azure Lagoon",
    subtitle: "Gujarat's longest luxury meandering pool",
    alt: "Tranquil blue swimming pool surrounded by lush tropical palms",
  },
  {
    image: heroFacade,
    title: "Heritage Living",
    subtitle: "Sanctuaries of quiet elegance and culture",
    alt: "Magnificent Madhubhan resort architecture and manicured garden lawns",
  },
  {
    image: heroILove,
    title: "Memories to Treasure",
    subtitle: "Moments made extraordinary across 22 acres",
    alt: "Iconic illuminated Madhubhan pool lagoon and garden setting",
  },
];

export const homeRooms = [
  {
    id: 1,
    name: "Signature Suite",
    area: "1,399 sq. ft",
    image: sig1,
  },
  {
    id: 2,
    name: "Deluxe Rooms",
    area: "355 sq. ft",
    image: deluxe1,
  },
  {
    id: 3,
    name: "Deluxe Premium Rooms",
    area: "355 sq. ft",
    image: deluxePrem1,
  },
  {
    id: 4,
    name: "Mandavdi Gom Cottages",
    area: "452 sq. ft",
    image: mandavdi1,
  },
  {
    id: 5,
    name: "Zamkudi Gom Cottages",
    area: "398 sq. ft",
    image: zamkudi1,
  },
  {
    id: 6,
    name: "Mandavdi Gom Deluxe Cottages",
    area: "538 sq. ft",
    image: mandavdiDeluxe1,
  },
  {
    id: 7,
    name: "Executive Suite",
    area: "700 sq. ft",
    image: exec1,
  },
  {
    id: 8,
    name: "Zanzariyu – The Deluxe Suite",
    area: "915 sq. ft",
    image: zanz1,
  },
  {
    id: 9,
    name: "Zulaniya – The Bridal Suite",
    area: "990 sq. ft",
    image: zula1,
  },
  {
    id: 10,
    name: "Madhubhan – Presidential Suite",
    area: "1,400 sq. ft",
    image: pres1,
  },
];

export const homeBlogs = [
  {
    id: 1,
    title: "Pet-Friendly Resort",
    desc: "Hello, Pet Parents! Planning a getaway, but don't want to leave your furry companion behind? We hear you.",
    image: blogPetFriendly,
    link: "/insights",
  },
  {
    id: 2,
    title: "Best Spa Resort",
    desc: "When it comes to ultimate relaxation, luxurious body massages, and world-class spa experiences, Madhubhan Resort &...",
    image: blogSpaResort,
    link: "/insights",
  },
  {
    id: 3,
    title: "Destination Wedding Planner",
    desc: "Destination Wedding planning can feel overwhelming - but it doesn't have to be! With the right approach, expert...",
    image: blogWeddingPlanner,
    link: "/insights",
  },
];

export interface Insight {
  date: string;
  title: string;
  image: string;
}

export const insights: Insight[] = [
  { date: "May 13, 2026", title: "Pet-Friendly Resort Living", image: blogPetFriendly },
  { date: "Apr 26, 2026", title: "Best Spa Resort & Holistic Healing", image: blogSpaResort },
  { date: "Apr 10, 2026", title: "Destination Wedding Planner Guide", image: blogWeddingPlanner },
];

export interface Service {
  title: string;
  icon: LucideIcon;
  text: string;
}

export const services: Service[] = [
  { title: "Luxury Stays", icon: Home, text: "Beautiful rooms and suites shaped by comfort and quiet elegance." },
  { title: "Spa & Wellness", icon: Compass, text: "Restorative rituals inspired by nature and timeless traditions." },
  { title: "Fine Dining", icon: Award, text: "Memorable cuisine served in atmospheric settings." },
  { title: "Celebrations", icon: Building2, text: "Grand occasions planned with warmth, detail, and grace." },
  { title: "Curated Escapes", icon: DraftingCompass, text: "Thoughtful experiences for couples, families, and friends." },
];

export interface Project {
  name: string;
  location: string;
  image: string;
  shape: "tall" | "wide";
}

export const projects: Project[] = [
  { name: "The Palace Arrival", location: "Madhubhan Resort", image: hero, shape: "tall" },
  { name: "Heritage Suites", location: "Garden Wing", image: suite, shape: "wide" },
  { name: "The Spa Sanctuary", location: "Wellness Pavilion", image: spa, shape: "wide" },
  { name: "Moonlit Dining", location: "Poolside Terrace", image: dining, shape: "tall" },
  { name: "Tropical Courtyards", location: "Resort Gardens", image: edgewood, shape: "wide" },
  { name: "Private Retreats", location: "Villa Collection", image: interior, shape: "wide" },
];

export interface Service {
  title: string;
  icon: LucideIcon;
  text: string;
}

export const services: Service[] = [
  { title: "Luxury Stays", icon: Home, text: "Beautiful rooms and suites shaped by comfort and quiet elegance." },
  { title: "Spa & Wellness", icon: Compass, text: "Restorative rituals inspired by nature and timeless traditions." },
  { title: "Fine Dining", icon: Award, text: "Memorable cuisine served in atmospheric settings." },
  { title: "Celebrations", icon: Building2, text: "Grand occasions planned with warmth, detail, and grace." },
  { title: "Curated Escapes", icon: DraftingCompass, text: "Thoughtful experiences for couples, families, and friends." },
];

export function ArrowLink({
  to,
  children,
  light = false,
}: {
  to: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link to={to} className={light ? "outline-link light" : "outline-link"}>
      {children}
      <ArrowRight />
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image = hero,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  image?: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-img-wrap">
        <img
          src={image}
          alt="Madhubhan Resort and Spa"
          className="page-hero-img"
          width={1920}
          height={1080}
        />
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

export function HomeRoomsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = (currentIndex - 1 + homeRooms.length) % homeRooms.length;
  const nextIndex = (currentIndex + 1) % homeRooms.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + homeRooms.length) % homeRooms.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % homeRooms.length);
  };

  const currentRoom = homeRooms[currentIndex];
  const prevRoom = homeRooms[prevIndex];
  const nextRoom = homeRooms[nextIndex];

  return (
    <section className="home-rooms-showcase">
      <div className="home-section-header">
        <p className="home-section-eyebrow">Discover</p>
        <h2 className="home-section-title">
          Rooms <em>&amp;</em> Suites
        </h2>
        <p className="home-section-sub">Reserve the room you prefer.</p>
      </div>

      {/* Panoramic Slider Track */}
      <div className="relative w-full select-none pb-6 md:pb-8">
        <div className="flex items-center justify-center gap-3 md:gap-6 px-3 md:px-6 max-w-[1440px] mx-auto min-h-[340px] md:min-h-[480px]">
          {/* Left / Previous Slide Peek */}
          <div
            onClick={handlePrev}
            className="hidden md:block w-1/4 h-[300px] md:h-[420px] shrink-0 opacity-45 hover:opacity-75 transition-opacity cursor-pointer overflow-hidden shadow-md"
          >
            <img
              src={prevRoom.image}
              alt={prevRoom.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center / Active Slide with Floating View Card */}
          <div className="relative w-full md:w-1/2 h-[340px] md:h-[460px] shrink-0 shadow-2xl overflow-visible">
            <div className="w-full h-full overflow-hidden">
              <img
                src={currentRoom.image}
                alt={currentRoom.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Left & Right Nav Arrows inside Active Slide */}
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Previous room"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/45 hover:bg-black/75 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              type="button"
              aria-label="Next room"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/45 hover:bg-black/75 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Floating Room Info Card (Matching Image 1) */}
            <div className="absolute -bottom-4 md:-bottom-5 left-1/2 -translate-x-1/2 z-30 w-[94%] max-w-[480px]">
              <div className="bg-white text-stone-900 shadow-xl px-5 sm:px-7 py-3.5 sm:py-4.5 flex items-center justify-between gap-3 sm:gap-4 border border-stone-200/70">
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-[1.45rem] sm:text-[1.75rem] text-[#1a1a1a] font-normal leading-tight">
                    {currentRoom.name}
                  </h3>
                  <p className="text-[13px] text-[#78716c] mt-1 font-sans tracking-wide">
                    Area: {currentRoom.area}
                  </p>
                </div>
                <Link
                  to="/accommodation"
                  className="bg-[#a37c4c] hover:bg-[#8b6537] text-white px-5 sm:px-7 py-2.5 sm:py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all shrink-0 inline-flex items-center justify-center shadow-xs"
                >
                  VIEW
                </Link>
              </div>
            </div>
          </div>

          {/* Right / Next Slide Peek */}
          <div
            onClick={handleNext}
            className="hidden md:block w-1/4 h-[300px] md:h-[420px] shrink-0 opacity-45 hover:opacity-75 transition-opacity cursor-pointer overflow-hidden shadow-md"
          >
            <img
              src={nextRoom.image}
              alt={nextRoom.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Pagination Dots (Matching Image 1: ○○○○●○○○○○) */}
        <div className="flex items-center justify-center gap-2 mt-8 md:mt-10">
          {homeRooms.map((room, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={room.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}: ${room.name}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? "w-2.5 h-2.5 bg-[#a37c4c] ring-2 ring-[#a37c4c]/40 ring-offset-1"
                    : "w-2 h-2 border border-stone-400 bg-transparent hover:border-[#a37c4c]"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeUnforgettableMoments() {
  const moments = [
    {
      title: "Experiences",
      image: edgewood,
      to: "/experience",
      alt: "Lush tropical courtyards and experiences at Madhubhan Resort",
    },
    {
      title: "Spa & Wellness",
      image: unforgettableSpa,
      to: "/spa-wellness",
      alt: "Serene meditation and restorative wellness sanctuary",
    },
    {
      title: "Celebrations",
      image: unforgettableCelebrations,
      to: "/wedding",
      alt: "Luxury banquet celebrations and romantic dining",
    },
  ];

  return (
    <section className="bg-[#fbf9f5] py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-200/70">
      <div className="max-w-[1380px] mx-auto">
        {/* Section Header (Matching Image 2) */}
        <div className="mb-12">
          <p className="home-section-eyebrow">We Offer</p>
          <h2 className="home-section-title">Unforgettable Moments</h2>
          <p className="home-section-sub max-w-3xl">
            At Madhubhan, every sunrise brings serenity, every spa touch brings renewal, and every celebration becomes a memory.
          </p>
        </div>

        {/* 3 Full-Card Grid (Matching Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {moments.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group relative h-[380px] sm:h-[420px] md:h-[480px] overflow-hidden shadow-lg block select-none"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Bottom Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-6 sm:p-8">
                <h3 className="font-serif text-2xl sm:text-[1.85rem] text-white font-normal leading-tight group-hover:text-[#e8d5b5] transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeBlogsSection() {
  return (
    <section className="home-blogs-showcase">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matching Image 2) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-stone-200/80">
          <div>
            <p className="home-section-eyebrow">Explore</p>
            <h2 className="home-section-title">Blogs</h2>
            <p className="home-section-sub">
              Unwind with curated reads on luxury, lifestyle, and the Madhubhan way of living.
            </p>
          </div>
          <div>
            <Link
              to="/insights"
              className="inline-flex items-center justify-center bg-[#a37c4c] hover:bg-[#8b6537] text-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition-all shadow-sm"
            >
              VIEW ALL
            </Link>
          </div>
        </div>

        {/* 3 Blog Cards Grid (Matching Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {homeBlogs.map((blog) => (
            <article key={blog.id} className="home-blog-card group">
              <Link to={blog.link} className="home-blog-card-img-wrap block">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="home-blog-card-img"
                  loading="lazy"
                />
              </Link>
              <div className="home-blog-card-body">
                <div>
                  <h3 className="home-blog-card-title">
                    <Link to={blog.link} className="hover:text-[#a37c4c] transition-colors">
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="home-blog-card-desc">{blog.desc}</p>
                </div>
                <div className="pt-2">
                  <Link
                    to={blog.link}
                    aria-label={`Read more about ${blog.title}`}
                    className="home-blog-arrow-btn"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    } else if (diff < -45) {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    }
    touchStartX.current = null;
  };

  return (
    <>
      <style>{`
        .home-hero {
          position: relative;
          color: #f7f6f2;
          overflow: hidden;
          background: #1e1b18;
          height: min(52rem, 92vh);
          min-height: 43rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-slides {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        }
        .hero-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          visibility: hidden;
          transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), visibility 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-slide.active {
          opacity: 1;
          visibility: visible;
          z-index: 2;
        }
        .hero-slide-img {
          position: absolute;
          inset: 0;
          width: 100% !important;
          height: 100% !important;
          max-width: none !important;
          max-height: none !important;
          object-fit: cover;
          transform-origin: center center;
          will-change: transform;
          transform: scale(1.0) translate3d(0, 0, 0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .hero-slide.active .hero-slide-img {
          animation: hero-cinematic-zoom-in 7.5s linear forwards !important;
        }
        @keyframes hero-cinematic-zoom-in {
          0% {
            transform: scale(1.0) translate3d(0, 0, 0);
          }
          100% {
            transform: scale(1.28) translate3d(0, 0, 0);
          }
        }
        .hero-shade {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.04) 40%, rgba(0, 0, 0, 0.40) 100%);
          pointer-events: none;
        }
        .hero-copy {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 52rem;
          width: min(92%, 52rem);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .hero-copy h1 {
          font-size: clamp(2.4rem, 5.5vw, 5.5rem);
          line-height: 1.05;
          letter-spacing: 0;
          text-shadow: 0 2px 18px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.6);
        }
        .hero-copy p {
          text-align: center;
        }
        .hero-slide-nav {
          position: absolute;
          z-index: 4;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        @media (max-width: 1080px) {
          .home-hero {
            height: 45rem;
            min-height: 0;
          }
          .hero-copy {
            width: min(92%, 52rem);
            margin: 0 auto;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .hero-copy h1 {
            font-size: clamp(2.2rem, 6.5vw, 3.5rem);
            text-align: center;
          }
        }
        @media (max-width: 560px) {
          .home-hero {
            height: 42rem;
            padding: 0 1rem;
          }
          .hero-copy {
            width: 100%;
            max-width: 100%;
            margin: 0 auto;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .hero-copy h1 {
            font-size: clamp(2rem, 8.5vw, 2.8rem);
            text-align: center;
          }
          .hero-slide-nav {
            left: 50%;
            transform: translateX(-50%);
            bottom: 1.4rem;
            gap: 0.6rem;
          }
        }
      `}</style>
      <section
        className="home-hero"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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
          <h1>
            Luxury Experiences
            <br />
            at <em>Madhubhan</em>
            <br />
            Resort &amp; Spa
          </h1>
          <p>
            Discover a serene escape where gracious Indian hospitality, restorative
            wellness, and unforgettable dining come together.
          </p>
          <ArrowLink to="/projects" light>
            Explore the resort
          </ArrowLink>
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
              <span className="dot-label">
                0{index + 1} {slide.title}
              </span>
            </button>
          ))}
        </div>

        <div className="hero-scroll">
          <span>Discover</span>
          <i />
        </div>
      </section>

      {/* 1. Rooms & Suites Showcase Section (Image 1) */}
      <HomeRoomsSection />

      {/* Discover Madhubhan Spaces */}
      <section className="section projects-home">
        <div className="section-intro">
          <p className="eyebrow">Discover Madhubhan</p>
          <h2>
            Spaces
            <br />
            That Define
            <br />
            <em>Excellence</em>
          </h2>
          <p className="section-note">
            From tranquil suites to candlelit dining, every space is crafted to
            make your stay extraordinary.
          </p>
          <ArrowLink to="/projects">Explore all spaces</ArrowLink>
        </div>
        <div className="project-mosaic">
          {projects.map((p, i) => (
            <article
              className={`project-card ${p.shape}`}
              style={{ "--delay": `${i * 80}ms` }}
              key={p.name}
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={1200}
                height={p.shape === "tall" ? 1400 : 900}
              />
              <div>
                <h3>{p.name}</h3>
                <p>{p.location}</p>
                <span>
                  <MoveUpRight />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 2. Unforgettable Moments Section (Image 2) - replaces Meaningful Experiences and Come Away Renewed */}
      <HomeUnforgettableMoments />

      {/* 3. Blogs Section (Image 2) */}
      <HomeBlogsSection />
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