import { PageHero } from "@/components/arcova";
import facadeHero from "@/assets/about-resort-facade-hero.png";
import aerialPool from "@/assets/about-aerial-pool.png";
import inspirationBg from "@/assets/about-inspiration-bg.png";

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-inspiration-section {
          position: relative;
          min-height: 440px;
          display: flex;
          align-items: center;
          overflow: hidden;
          color: #ffffff;
        }
        .about-inspiration-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }
        .about-inspiration-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.62) 58%, rgba(0, 0, 0, 0.28) 100%);
          z-index: 2;
        }
        .about-inspiration-content {
          position: relative;
          z-index: 3;
          max-width: 48rem;
          padding: 4.5rem max(5vw, 1.5rem);
        }
        @media (max-width: 768px) {
          .about-inspiration-shade {
            background: rgba(0, 0, 0, 0.78);
          }
          .about-inspiration-content {
            padding: 3.5rem 1.5rem;
          }
        }
      `}</style>
      {/* 1. Top CTA Hero Section (2nd Image) */}
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Rooted in Warmth.
            <br />
            <em>Made for Memories.</em>
          </>
        }
        text="Madhubhan is a peaceful resort sanctuary where nature, heritage, and heartfelt hospitality meet across 25 acres."
        image={facadeHero}
      />

      {/* 2. Main About Showcase: Left Content, Right Aerial Pool Image (3rd Image) */}
      <section className="bg-[#fcfaf6] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200/70">
        <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Requested text */}
          <div className="space-y-6">
            <div>
              <p className="celebration-eyebrow">ABOUT US</p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.6rem] text-[#1e1b18] font-normal leading-tight">
                Madhubhan Resort <em>&amp;</em> Spa
              </h2>
            </div>
            <div className="space-y-4 text-xs sm:text-sm text-[#524b43] leading-relaxed font-normal">
              <p>
                Developed with ethereal nature and a lavish ambience in mind, Madhubhan Resort and Spa is the perfect choice for your exotic vacation and events. Designed on 25 acres of land in the greenery of Charotar near Anand, Gujarat, India, this Award-winning Resort &amp; spa and wellness destination is at par with international standards.
              </p>
              <p>
                The place has a fusion of a classy traditional and sumptuous contemporary taste. The grand swimming pool, being Gujarat’s longest, lists the major hashtag in your experience here. The picturesque resort promises you and your family opulent leisure, eat-ertainment and rejuvenation.
              </p>
              <p>
                The well-appointed rooms, are all created with the finest interiors and select taste and will spellbind your living experience. Our hospitable and trained staff will ensure that your stay is a unique and a memorable one.
              </p>
            </div>
          </div>

          {/* Right Column: Aerial Pool Photography (3rd Image) */}
          <div className="relative overflow-hidden shadow-xl rounded-sm border border-stone-200/80 group">
            <img
              src={aerialPool}
              alt="Aerial top-down view of Gujarat's longest swimming pool and cottages at Madhubhan Resort"
              className="w-full h-full min-h-[380px] md:min-h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 3. Inspiration Section (Matching 4th Image) */}
      <section className="about-inspiration-section">
        <img
          src={inspirationBg}
          alt="Madhubhan traditional architecture and serenity"
          className="about-inspiration-bg"
          loading="lazy"
        />
        <div className="about-inspiration-shade" />
        <div className="about-inspiration-content">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-3 flex items-center gap-2">
            <span>•</span> ABOUT
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal mb-5 leading-tight">
            Inspiration
          </h2>
          <p className="text-sm sm:text-base text-stone-100/90 leading-relaxed font-light">
            The inspiration behind naming the resort &lsquo;Madhubhan&rsquo; is derived out of respect to an age old tradition where parents are revered above God himself. True to this tradition, the resort has been aptly named &ldquo;Madhubhan&rdquo; while fusing the names of Madhu ben (mother) and Bhanu bhai (father) of Mr. Prayasvin Patel, CMD Elecon Engineering Co. Ltd.
          </p>
        </div>
      </section>

      {/* 4. Guiding Values */}
      <section className="values section bg-background">
        <p className="eyebrow">What guides us</p>
        <div>
          {[
            [
              "01",
              "Warmth",
              "Every guest is welcomed with heartfelt Indian hospitality and personalized attention.",
            ],
            [
              "02",
              "Wellbeing",
              "Nature, Ayurveda, and mindful wellness rituals restore body, mind, and spirit.",
            ],
            [
              "03",
              "Wonder",
              "Across 25 acres of greenery and tranquility, every stay holds space for discovery.",
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
