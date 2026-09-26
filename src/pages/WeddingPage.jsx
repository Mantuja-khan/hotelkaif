import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Users, Maximize2 } from "lucide-react";
import { PageHero } from "@/components/arcova";
import heroImg from "@/assets/madhubhan-resort-hero.jpg";
import cuisineLawnImg from "@/assets/wedding-cuisine-lawn-hd.jpg";
import helpNightImg from "@/assets/wedding-help-night-hd.jpg";
import gulmoharHallImg from "@/assets/venue-gulmohar-hall.png";
import magnoliaHallImg from "@/assets/venue-magnolia-hall.png";
import gulmoharLawnImg from "@/assets/venue-gulmohar-lawn.png";
import zamkudiLawnImg from "@/assets/venue-zamkudi-lawn.png";
import zamkudiMehendiImg from "@/assets/venue-zamkudi-mehendi.png";
import sanedoImg from "@/assets/venue-sanedo.png";

export const weddingVenuesData = [
  {
    name: "Gulmohar Hall",
    description:
      "3360 sq.ft. pillar less ballroom with large air conditioned pre-function area is a perfect venue to host the grandest of social and corporate events. It has a capacity to accommodate 300 guests.",
    guests: "300",
    area: "3360 sq. ft.",
    image: gulmoharHallImg,
  },
  {
    name: "Gulmohar Lawn",
    description:
      "The lush green expansive venue for the large functions and an ultimate imperial place for every major event has a capacity to comfortably accommodate more than 2500 guests. It has a beautiful amphitheatre with water fountains that makes it one of the most popular venues.",
    guests: "2500",
    area: null,
    image: gulmoharLawnImg,
  },
  {
    name: "Magnolia Hall",
    description:
      "With seating capacity of 70 guests, it is a perfect setup for conference, meetings and ceremonials like vidhi or Ganesh sthapna. It is located next to the Fish Pond that makes the ambiance perfect.",
    guests: "70",
    area: "1360 sq. ft.",
    image: magnoliaHallImg,
  },
  {
    name: "Zamkudi Lawn",
    description:
      "A perfectly manicured lush green lawn next to Zamkudi Gom complimented by guava and mango trees and can accommodate 500 guests.",
    guests: "500",
    area: null,
    image: zamkudiLawnImg,
  },
  {
    name: "Sanedo",
    description:
      "At the edge of 300 ft. long swimming pool under the canopy of trees, Sanedo is a picture perfect venue for mehandi, pool party or daylight events. This venue can comfortably accommodate 200 guests.",
    guests: "200",
    area: null,
    image: sanedoImg,
  },
  {
    name: "Gom ni Talavadi",
    description:
      "An impeccable venue for sangeet sandhya, mehandi a relaxed rendezvous or carnival fest. It is simply a seamless lush green lawn alongside the Gujarat's longest swimming pool and can accommodate 300 guests.",
    guests: "300",
    area: null,
    image: zamkudiMehendiImg,
  },
];

export default function WeddingPage() {
  return (
    <>
      <style>{`
        .celebration-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-transform: uppercase;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          color: #a37c4c;
          margin-bottom: 0.5rem;
        }
        .celebration-eyebrow::before {
          content: "";
          display: inline-block;
          width: 2.5rem;
          height: 1.5px;
          background-color: #a37c4c;
        }
        .celebration-title {
          font-family: var(--font-serif, Georgia, serif);
          font-size: clamp(2.2rem, 3.8vw, 3.2rem);
          color: #1e1b18;
          font-weight: 400;
          line-height: 1.15;
          margin-bottom: 0.75rem;
        }
        .celebration-sub {
          font-size: 0.85rem;
          color: #6e675e;
          line-height: 1.65;
        }
        .venues-mosaic-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background-color: #fdfbf7;
          border: 1px solid #eee8df;
        }
        .venue-mosaic-cell {
          position: relative;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2.5rem 2.25rem;
          background-color: #ffffff;
          border: 1px solid #f2ede4;
        }
        .venue-mosaic-cell.img-cell {
          padding: 0;
          overflow: hidden;
          background-color: #1a1a1a;
        }
        .venue-mosaic-cell.img-cell img {
          width: 100%;
          height: 100%;
          min-height: 320px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .venue-mosaic-cell.img-cell:hover img {
          transform: scale(1.05);
        }
        .venue-card-title {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 1.75rem;
          color: #1c1815;
          font-weight: 400;
          margin-bottom: 0.85rem;
        }
        .venue-card-desc {
          font-size: 0.78rem;
          line-height: 1.7;
          color: #665f56;
          margin-bottom: 1.5rem;
        }
        .venue-card-specs {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          margin-top: auto;
          padding-top: 0.75rem;
          font-size: 0.75rem;
          color: #7d756b;
          font-weight: 500;
        }
        @media (max-width: 960px) {
          .venues-mosaic-grid {
            grid-template-columns: 1fr;
          }
          .venue-mosaic-cell {
            min-height: auto;
            padding: 2rem 1.5rem;
          }
          .venue-mosaic-cell.img-cell img {
            height: 260px;
            min-height: 260px;
          }
        }
        .happy-help-card {
          background-color: #ffffff;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
          padding: 3rem 2.5rem;
          position: relative;
          z-index: 10;
        }
        @media (min-width: 900px) {
          .happy-help-card-overlap {
            position: absolute;
            right: max(4vw, 2rem);
            top: 50%;
            transform: translateY(-50%);
            width: min(34rem, 48%);
          }
        }
        @media (max-width: 899px) {
          .happy-help-card {
            position: relative;
            margin-top: -2.5rem;
            width: 92%;
            margin-left: auto;
            margin-right: auto;
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
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

      {/* 1. Venues Section (Matching Image 2) */}
      <section className="bg-[#fcfaf6] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200/70">
        <div className="max-w-[1380px] mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <p className="celebration-eyebrow">MADHUBHAN</p>
            <h2 className="celebration-title">Venues</h2>
            <p className="celebration-sub">
              From manicured gardens to elegant banquet halls, choose your perfect setting for weddings, engagements, milestone celebrations, reunions – boutique luxury awaits.
            </p>
          </div>

          {/* 3-Column Alternating Mosaic Grid (Exact match to Image 2) */}
          <div className="venues-mosaic-grid shadow-sm rounded-sm overflow-hidden">
            {/* Row 1: Gulmohar Hall (Image) | Gulmohar Hall (Details) | Magnolia Hall (Image) */}
            <div className="venue-mosaic-cell img-cell">
              <img
                src={gulmoharHallImg}
                alt="Gulmohar Hall decorated wedding banquet stage"
                loading="lazy"
              />
            </div>

            <div className="venue-mosaic-cell">
              <h3 className="venue-card-title">Gulmohar Hall</h3>
              <p className="venue-card-desc">
                3360 sq.ft. pillar less ballroom with large air conditioned pre-function area is a perfect venue to host the grandest of social and corporate events. It has a capacity to accommodate 300 guests.
              </p>
              <div className="venue-card-specs">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#a37c4c]" />
                  <span>300</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#a37c4c]" />
                  <span>3360 sq. ft.</span>
                </div>
              </div>
            </div>

            <div className="venue-mosaic-cell img-cell">
              <img
                src={magnoliaHallImg}
                alt="Magnolia Hall banquet and dining seating"
                loading="lazy"
              />
            </div>

            {/* Row 2: Gulmohar Lawn (Details) | Gulmohar Lawn (Image) | Magnolia Hall (Details) */}
            <div className="venue-mosaic-cell">
              <h3 className="venue-card-title">Gulmohar Lawn</h3>
              <p className="venue-card-desc">
                The lush green expansive venue for the large functions and an ultimate imperial place for every major event has a capacity to comfortably accommodate more than 2500 guests. It has a beautiful amphitheatre with water fountains that makes it one of the most popular venues.
              </p>
              <div className="venue-card-specs">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#a37c4c]" />
                  <span>2500</span>
                </div>
              </div>
            </div>

            <div className="venue-mosaic-cell img-cell">
              <img
                src={gulmoharLawnImg}
                alt="Gulmohar Lawn expansive wedding garden banquet"
                loading="lazy"
              />
            </div>

            <div className="venue-mosaic-cell">
              <h3 className="venue-card-title">Magnolia Hall</h3>
              <p className="venue-card-desc">
                With seating capacity of 70 guests, it is a perfect setup for conference, meetings and ceremonials like vidhi or Ganesh sthapna. It is located next to the Fish Pond that makes the ambiance perfect.
              </p>
              <div className="venue-card-specs">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#a37c4c]" />
                  <span>70</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#a37c4c]" />
                  <span>1360 sq. ft.</span>
                </div>
              </div>
            </div>

            {/* Row 3: Zamkudi Lawn (Image) | Zamkudi Lawn (Details) | Zamkudi Mehendi (Image) */}
            <div className="venue-mosaic-cell img-cell">
              <img
                src={zamkudiLawnImg}
                alt="Zamkudi Lawn manicured open lawn and mango trees"
                loading="lazy"
              />
            </div>

            <div className="venue-mosaic-cell">
              <h3 className="venue-card-title">Zamkudi Lawn</h3>
              <p className="venue-card-desc">
                A perfectly manicured lush green lawn next to Zamkudi Gom complimented by guava and mango trees and can accommodate 500 guests.
              </p>
              <div className="venue-card-specs">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#a37c4c]" />
                  <span>500</span>
                </div>
              </div>
            </div>

            <div className="venue-mosaic-cell img-cell">
              <img
                src={zamkudiMehendiImg}
                alt="Vibrant colorful Mehendi decor on Zamkudi Lawn"
                loading="lazy"
              />
            </div>

            {/* Row 4: Sanedo (Details) | Sanedo (Image) | Gom ni Talavadi (Details) */}
            <div className="venue-mosaic-cell">
              <h3 className="venue-card-title">Sanedo</h3>
              <p className="venue-card-desc">
                At the edge of 300 ft. long swimming pool under the canopy of trees, Sanedo is a picture perfect venue for mehandi, pool party or daylight events. This venue can comfortably accommodate 200 guests.
              </p>
              <div className="venue-card-specs">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#a37c4c]" />
                  <span>200</span>
                </div>
              </div>
            </div>

            <div className="venue-mosaic-cell img-cell">
              <img
                src={sanedoImg}
                alt="Sanedo pool edge evening party and illuminated mandap"
                loading="lazy"
              />
            </div>

            <div className="venue-mosaic-cell">
              <h3 className="venue-card-title">Gom ni Talavadi</h3>
              <p className="venue-card-desc">
                An impeccable venue for sangeet sandhya, mehandi a relaxed rendezvous or carnival fest. It is simply a seamless lush green lawn alongside the Gujarat's longest swimming pool and can accommodate 300 guests.
              </p>
              <div className="venue-card-specs">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#a37c4c]" />
                  <span>300</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Cuisine Section (Matching Image 1) */}
      <section className="bg-[#f5f1eb] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1380px] mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <p className="celebration-eyebrow">CUISINE</p>
            <h2 className="celebration-title">Where memories are created for every palate</h2>
            <p className="celebration-sub">
              Forget the usual &quot;wedding food&quot; talk. At Madhubhan, prepare yourself for a symphony of compliments on your culinary choices.
            </p>
          </div>

          {/* 2-Column Split: Content & Photo (Matching Image 1) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Column: A World of Flavors */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl text-[#1e1b18] font-normal">
                A World of Flavors
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a37c4c] shrink-0 mt-0.5 stroke-[2.5]" />
                  <p className="text-xs sm:text-sm text-[#4a443e] leading-relaxed">
                    <strong className="text-[#1c1815] font-semibold">Global Gastronomy:</strong>{" "}
                    Embark on a culinary adventure with our signature dishes, spanning from Awadhi, Hyderabadi, Gujarati, and Rajasthani specialties to international delights like Italian, Mexican, Oriental, and Lebanese delicacies.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a37c4c] shrink-0 mt-0.5 stroke-[2.5]" />
                  <p className="text-xs sm:text-sm text-[#4a443e] leading-relaxed">
                    <strong className="text-[#1c1815] font-semibold">Signature Delights:</strong>{" "}
                    Don&apos;t miss our iconic dishes like Calzone, Arabic Meze, Focaccia, Eggplant Parmesan, Moussaka, Gnocchi, and of course, Madhubhan&apos;s famous wood-fired cheese chilli pizza and exotic dips.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a37c4c] shrink-0 mt-0.5 stroke-[2.5]" />
                  <p className="text-xs sm:text-sm text-[#4a443e] leading-relaxed">
                    <strong className="text-[#1c1815] font-semibold">Fresh &amp; Authentic:</strong>{" "}
                    Savor the taste of quality with produce, herbs, and grains sourced from our own organic farm or from locally grown sources.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a37c4c] shrink-0 mt-0.5 stroke-[2.5]" />
                  <p className="text-xs sm:text-sm text-[#4a443e] leading-relaxed">
                    <strong className="text-[#1c1815] font-semibold">Live Stations:</strong>{" "}
                    Indulge in interactive experiences with our live stations, offering pizzas, dahi bada, iddiappams, and even a country-style chaat counter.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a37c4c] shrink-0 mt-0.5 stroke-[2.5]" />
                  <p className="text-xs sm:text-sm text-[#4a443e] leading-relaxed">
                    <strong className="text-[#1c1815] font-semibold">Healthy &amp; Customized:</strong>{" "}
                    We believe in both taste and well-being. Enjoy cooking to order at live counters for freshness or let us know your dietary preferences in vegan, Jain, or gluten-free with a little notice.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Outdoor Banquet Lawn Photo */}
            <div className="relative overflow-hidden shadow-lg rounded-sm border border-stone-200/80">
              <img
                src={cuisineLawnImg}
                alt="Madhubhan wedding dining lawn banquet with hanging lanterns"
                className="w-full h-full min-h-[420px] max-h-[560px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Happy to help! Section (Matching Image 3) */}
      <section className="relative bg-[#fcfaf6] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1380px] mx-auto relative min-h-[560px] md:min-h-[620px] flex items-center">
          {/* Background Mandap Night Photo */}
          <div className="w-full h-[380px] md:h-[580px] overflow-hidden shadow-md rounded-sm">
            <img
              src={helpNightImg}
              alt="Illuminated wedding venue mandap aisle at night"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Overlapping Floating White Card (Exact match to Image 3) */}
          <div className="happy-help-card happy-help-card-overlap">
            <h3 className="font-serif text-3xl md:text-4xl text-[#1e1b18] font-normal mb-2">
              Happy to help!
            </h3>
            <p className="text-xs sm:text-sm text-[#5c544d] mb-6 font-medium">
              Our planners can assist with your bespoke needs
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Conceptualizing the event",
                "Planning and execution",
                "Preliminary preparation",
                "Bridal make-up, hair & beauty treatments",
                "Professional photography & video recording",
                "Travel arrangements",
                "Theme set-ups",
                "Planning a menu",
                "Organizing cultural activities",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#a37c4c] shrink-0 stroke-[2.5]" />
                  <span className="text-xs sm:text-sm text-[#403b36]">{item}</span>
                </div>
              ))}
            </div>

            <div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#a37c4c] hover:bg-[#8b6537] text-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition-all shadow-sm"
              >
                PLAN YOUR WEDDING <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Callout Consultation Banner */}
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
