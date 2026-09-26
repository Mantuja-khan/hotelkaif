import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, X, Sparkles, Check, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/arcova";

// 1. Deluxe Rooms
import deluxe1 from "@/assets/deluxe_room1.webp";
import deluxe2 from "@/assets/deluxe_room2.webp";
import deluxe3 from "@/assets/deluxe_room3.webp";

// 2. Deluxe Premium Rooms
import deluxePrem1 from "@/assets/deluxe__premium_room1.webp";
import deluxePrem2 from "@/assets/deluxe__premium_room2.webp";
import deluxePrem3 from "@/assets/deluxe__premium_room3.webp";

// 3. Mandavdi Gom Cottages
import mandavdi1 from "@/assets/mandavandi_gom_cottages1.webp";
import mandavdi2 from "@/assets/mandavandi_gom_cottages2.webp";
import mandavdi3 from "@/assets/mandavandi_gom_cottages3.webp";

// 4. Zamkudi Gom Cottages
import zamkudi1 from "@/assets/zamkudi-gom-cottage-1.webp";
import zamkudi2 from "@/assets/zamkudi-gom-cottage-2.webp";
import zamkudi3 from "@/assets/Zamkundi_gom_cottege1.webp";

// 5. Mandavdi Gom - Deluxe Cottages
import mandavdiDeluxe1 from "@/assets/mandavdi-gom-deluxe-cottage-1.webp";
import mandavdiDeluxe2 from "@/assets/mandavdi-gom-deluxe-cottage-2.webp";
import mandavdiDeluxe3 from "@/assets/mandavdi-gom-deluxe-cottage-3.webp";

// 6. Executive Suite
import exec1 from "@/assets/executive-suite-slider-1.webp";
import exec2 from "@/assets/executive-suite-slider-2.webp";
import exec3 from "@/assets/executive-suite-slider-3.webp";

// 7. Signature Suite
import sig1 from "@/assets/signature-suite-slider-1.webp";
import sig2 from "@/assets/signature-suite-slider-2.webp";
import sig3 from "@/assets/signature-suite-slider-3.webp";

// 8. Zanzariyu – The Deluxe Suite
import zanz1 from "@/assets/zanzaryu-suite-1.webp";
import zanz2 from "@/assets/zanzaryu-suite-2.webp";
import zanz3 from "@/assets/zanzaryu-suite-3.webp";

// 9. Zulaniya – The Bridal Suite
import zula1 from "@/assets/zulaniya-bridal-suite-1.webp";
import zula2 from "@/assets/zulaniya-bridal-suite-2.webp";
import zula3 from "@/assets/zulaniya-bridal-suite-3.webp";

// 10. Madhubhan – Presidential Suite
import pres1 from "@/assets/presidential-suite-1.webp";
import pres2 from "@/assets/presidential-suite-2.webp";
import pres3 from "@/assets/presidential-suite-4.webp";

import accommodationHero from "@/assets/accommodation-pool-villa-hero.png";

export const roomData = [
  {
    id: 1,
    name: "Deluxe Rooms",
    images: [deluxe1, deluxe2, deluxe3],
    description:
      "Experience ultra-modern amenities in the spacious and finesse interiors of our Deluxe Rooms. The rooms are furnished with plush facilities and safety & security measures are well in place to make your stay a memorable one.",
    capacity: 2,
    capacityText: "2",
    area: "33 sq m",
    features: [
      "Plush King Size / Twin Beds",
      "55-inch Smart High-Definition TV",
      "Spacious Marble Ensuite Bathroom",
      "High-Speed Wi-Fi & Work Desk",
      "Electronic In-Room Safe & Mini Bar",
      "Complimentary Tea & Coffee Maker"
    ]
  },
  {
    id: 2,
    name: "Deluxe Premium Rooms",
    images: [deluxePrem1, deluxePrem2, deluxePrem3],
    description:
      "Deluxe Premium Rooms feature smart technology, elegant interiors, and 55-inch smart TVs. Located on the third floor, they offer elevated views of the resort's lush lawns and landscaped greenery.",
    capacity: 2,
    capacityText: "2",
    area: "33 sq m",
    features: [
      "Elevated Third Floor Panoramic Views",
      "Smart Room Automation & Lighting",
      "Private Balcony / Sit-out Deck",
      "Luxury Bath Amenities & Rain Shower",
      "Signature Pillow Menu",
      "Complimentary High-Speed Wi-Fi"
    ]
  },
  {
    id: 3,
    name: "Mandavdi Gom Cottages",
    images: [mandavdi1, mandavdi2, mandavdi3],
    description:
      "Designed to experience royal Gujarati living culture, the row cottages are fashioned with Architecture of Karamsad, a village nearby and home to the man of steel, late Shri Sardar Vallabhbhai Patel.",
    capacity: 2,
    capacityText: "2",
    area: "42 sq m",
    features: [
      "Authentic Heritage Gujarati Architecture",
      "Private Verdant Lawn Sit-out",
      "Hand-carved Teakwood Furniture",
      "Spacious Dressing Area",
      "Direct Garden Access",
      "Heritage Decor with Modern Luxury"
    ]
  },
  {
    id: 4,
    name: "Zamkudi Gom Cottages",
    images: [zamkudi1, zamkudi2, zamkudi3],
    description:
      "The impressive Zamkudi Gom Cottages at Madhubhan Resort & Spa are a virtuoso to Gujarati living style. It is a community within the Resort, ideal for group bookings that gives you an exclusive Village theme to call it your own.",
    capacity: 2,
    capacityText: "2",
    area: "37 sq m",
    features: [
      "Exclusive Village-themed Enclave",
      "Ideal for Families & Group Celebrations",
      "Traditional Verandah Courtyard",
      "Custom Handcrafted Artifacts",
      "Lush Orchard Surroundings",
      "Attentive Personalized Service"
    ]
  },
  {
    id: 5,
    name: "Mandavdi Gom - Deluxe Cottages",
    images: [mandavdiDeluxe1, mandavdiDeluxe2, mandavdiDeluxe3],
    description:
      "Mesmerized in the soft tones of cream, sage, yellow, and beige, the rooms of Mandavdi Gom Deluxe Cottages are furnished in classic taste with a king-size bed or two full beds, a work area with a teak wood desk.",
    capacity: 2,
    capacityText: "2",
    area: "50 sq m",
    features: [
      "Open-to-Sky Sunken Floral Bathtub",
      "Serene Buddha Garden Courtyard View",
      "Handcrafted Teak Wood Executive Desk",
      "Expansive Wardrobe & Vanity Space",
      "Premium Cotton Linens & Robes",
      "Private Garden Patio"
    ]
  },
  {
    id: 6,
    name: "Executive Suite",
    images: [exec1, exec2, exec3],
    description:
      "Experience executive luxury and refined comfort with a separate living room, plush master bedroom, luxury bathroom with deep-soaking bathtub, and private sit-out overlooking verdant resort gardens.",
    capacity: 3,
    capacityText: "3",
    area: "65 sq m",
    features: [
      "Separate Living Lounge & Master Bedroom",
      "Private Garden-facing Balcony",
      "Deep Soaking Luxury Bathtub",
      "Two 55-inch Smart TVs",
      "Espresso Coffee Machine",
      "Dedicated Butler Service upon request"
    ]
  },
  {
    id: 7,
    name: "Signature Suite",
    images: [sig1, sig2, sig3],
    description:
      "An epitome of bespoke indulgence with handcrafted furnishings, generous lounging spaces, high-speed amenities, and sweeping views of Madhubhan's lush courtyards and water features.",
    capacity: 3,
    capacityText: "3",
    area: "75 sq m",
    features: [
      "Expansive Living & Dining Suite",
      "Panoramic Views of Resort Courtyards",
      "Custom Hand-carved Indian Art Pieces",
      "Whirlpool Hydro-Massage Tub",
      "Walk-in Closet & Dressing Parlor",
      "Complimentary Evening Cocktail Hour"
    ]
  },
  {
    id: 8,
    name: "Zanzariyu – The Deluxe Suite",
    images: [zanz1, zanz2, zanz3],
    description:
      "Exquisitely designed with traditional artistry and modern luxuries, featuring a private whirlpool bath, sunlit verandah, and secluded opulence for the ultimate restorative retreat.",
    capacity: 2,
    capacityText: "2",
    area: "85 sq m",
    features: [
      "Private Sunlit Verandah Sanctuary",
      "Whirlpool Bath with Garden Vista",
      "Royal Heritage King Bedding",
      "Private Dining Area in Suite",
      "Artisanal Botanical Bath Therapies",
      "VIP Arrival & Check-in Experience"
    ]
  },
  {
    id: 9,
    name: "Zulaniya – The Bridal Suite",
    images: [zula1, zula2, zula3],
    description:
      "A romantic sanctuary created especially for brides, couples, and honeymooners, featuring romantic four-poster canopy beds, sunken Roman floral bathtub, and dedicated dressing boudoir.",
    capacity: 2,
    capacityText: "2",
    area: "92 sq m",
    features: [
      "Four-Poster Royal Bridal Canopy Bed",
      "Sunken Roman Floral Bathtub & Jacuzzi",
      "Bridal Vanity & Full-length Mirrors",
      "Romantic Candlelight Setup upon arrival",
      "Private Secluded Garden Terrace",
      "Champagne Breakfast in Bed Service"
    ]
  },
  {
    id: 10,
    name: "Madhubhan – Presidential Suite",
    images: [pres1, pres2, pres3],
    description:
      "The pinnacle of royal grandeur spanning expansive living and dining pavilions, private temperature-controlled plunge pool, personal butler service, and unmatched exclusivity across 22 acres.",
    capacity: 4,
    capacityText: "4",
    area: "140 sq m",
    features: [
      "Private Temperature-Controlled Plunge Pool",
      "Master & Guest Bedrooms with En-suites",
      "Full Living Room, 8-Seater Dining & Bar",
      "24/7 Dedicated Royal Butler & Chef",
      "Private Sunken Garden Deck & Gazebo",
      "Complimentary Luxury Airport Transfers"
    ]
  }
];

function RoomImageSlider({ images, roomName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="room-slider-wrapper relative w-full h-full min-h-[22rem] sm:min-h-[26rem] lg:min-h-[28rem] overflow-hidden bg-[#111]">
      <img
        src={images[currentIndex]}
        alt={`${roomName} - View ${currentIndex + 1}`}
        className="room-slider-img w-full h-full object-cover transition-opacity duration-500"
        loading="lazy"
      />

      {/* Prev / Next Arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous photo"
            className="room-nav-arrow room-nav-prev absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/90 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full transition-all duration-200 focus:outline-none"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next photo"
            className="room-nav-arrow room-nav-next absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/90 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full transition-all duration-200 focus:outline-none"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              aria-label={`Slide ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/45 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Room Details Modal
function RoomModal({ room, onClose }) {
  if (!room) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white text-zinc-900 w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden my-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="h-72 sm:h-96 w-full">
          <RoomImageSlider images={room.images} roomName={room.name} />
        </div>

        <div className="p-6 sm:p-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-zinc-200 pb-4 mb-6">
            <div>
              <h2 className="text-3xl font-serif text-zinc-900">{room.name}</h2>
              <div className="flex items-center gap-6 mt-3 text-sm text-zinc-600">
                <span className="flex items-center gap-2">
                  <strong>Capacity:</strong> {room.capacityText} Guests
                </span>
                <span className="flex items-center gap-2">
                  <strong>Room Size:</strong> {room.area}
                </span>
              </div>
            </div>
            <Link
              to="/contact"
              className="gold-button !text-xs !py-3 !px-6"
              onClick={onClose}
            >
              Book This Room <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-8">
            {room.description}
          </p>

          <div>
            <h4 className="font-serif text-xl text-zinc-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#a37c4c]" />
              Room Highlights &amp; Inclusions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {room.features.map((feat) => (
                <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <Check className="w-4 h-4 text-[#a37c4c] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccommodationPage() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <>
      {/* Luxury Hero Banner matching Screenshot */}
      <section className="relative w-full h-[75vh] min-h-[32rem] max-h-[46rem] flex items-center justify-center overflow-hidden bg-[#111] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={accommodationHero}
            alt="Madhubhan Resort & Spa Accommodation Pool Villa"
            className="w-full h-full object-cover animate-kenburns-zoom-out"
            style={{ animation: "kenburns-zoom-out 12s cubic-bezier(0.2, 0.8, 0.3, 1) infinite alternate" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-[#c5a880] uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-4">
            Madhubhan Resort &amp; Spa
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-normal tracking-wide drop-shadow-md">
            Accommodation
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl text-xs sm:text-sm md:text-base font-light tracking-wider">
            Sanctuaries of quiet elegance, private gardens, and restorative luxury across 22 tranquil acres.
          </p>
        </div>

        {/* Scroll Pill Indicator matching Screenshot */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">
          <div className="w-5 h-9 rounded-full border border-white/60 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce mt-1" />
          </div>
        </div>
      </section>

      {/* Room Showcase Section (Alternating Left/Right) */}
      <section className="accommodation-showcase bg-[#fdfbf7] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            {roomData.map((room, index) => {
              const isEven = index % 2 === 1; // Alternating layout
              return (
                <div
                  key={room.id}
                  className="room-row bg-white border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2"
                >
                  {/* Slider Side */}
                  <div className={`w-full h-full ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <RoomImageSlider images={room.images} roomName={room.name} />
                  </div>

                  {/* Details Side */}
                  <div
                    className={`p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-white text-zinc-900 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <h3 className="room-title text-3xl sm:text-4xl font-serif text-[#1a1a1a] mb-5 tracking-tight font-normal">
                        {room.name}
                      </h3>
                      <p className="room-desc text-[#4a4a4a] text-sm sm:text-[0.93rem] leading-[1.75] mb-8 font-sans font-light">
                        {room.description}
                      </p>

                      {/* Icons Row: Guests & Size */}
                      <div className="flex items-center gap-10 sm:gap-14 mb-8 pt-2">
                        {/* Guests Icon & Count */}
                        <div className="flex flex-col items-center text-center">
                          <svg
                            className="w-7 h-7 text-[#222] mb-1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                          <span className="text-xs sm:text-sm font-sans text-[#333] font-normal">
                            {room.capacityText}
                          </span>
                        </div>

                        {/* Dimension / Area Icon & Size */}
                        <div className="flex flex-col items-center text-center">
                          <svg
                            className="w-7 h-7 text-[#222] mb-1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="1" />
                            <path d="M3 9h18" />
                            <path d="M9 21V9" />
                            <path d="M15 15h3v3" />
                          </svg>
                          <span className="text-xs sm:text-sm font-sans text-[#333] font-normal">
                            {room.area}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* View Button */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedRoom(room)}
                        className="room-view-btn inline-block bg-[#a37c4c] hover:bg-[#8b6537] text-white text-[0.72rem] font-medium tracking-[0.18em] uppercase px-8 py-3.5 transition-all duration-200 focus:outline-none shadow-sm cursor-pointer"
                      >
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Room Modal */}
      {selectedRoom && (
        <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}

      {/* Luxury Five-Star Accommodation CTA Section */}
      <section className="relative py-20 sm:py-28 bg-[#18181b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src={accommodationHero}
            alt="Madhubhan Resort"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-semibold mb-3">
            RESERVATIONS &amp; BESPOKE EXPERIENCES
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal mb-6">
            Make Time For Something
            <br />
            <em className="text-[#c5a880] italic">Extraordinary.</em>
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-10 font-light">
            Whether planning a restorative weekend getaway, an extended family celebration, or an intimate private pool villa stay, our reservation concierges are at your service.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-[#a37c4c] hover:bg-[#8b6537] text-white text-xs font-medium uppercase tracking-[0.2em] px-8 py-4 transition-all duration-200 shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>Book Your Stay</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+912692239268"
              className="w-full sm:w-auto border border-[#c5a880]/60 hover:bg-[#c5a880]/10 text-white text-xs font-medium uppercase tracking-[0.2em] px-8 py-4 transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <span>Call Concierge: +91 2692 239 268</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
