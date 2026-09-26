import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Sparkles, X, Check } from "lucide-react";

// 7 Cuisine Images from assets
import banyanTreeImg from "@/assets/the-banyan-tree-thumb-1.webp";
import twentyFourSevenImg from "@/assets/24-seven-thumb-1.webp";
import kouzinaImg from "@/assets/kouzina-thumb-1.webp";
import tapasImg from "@/assets/tapas-thumb.jpg";
import foodGalleriaImg from "@/assets/madhubhan-food-galleria-thumb-6.webp";
import bakeACakeImg from "@/assets/bake-a-cake-thumb.jpg";
import chaiBaarImg from "@/assets/chai-bar-thumb.jpg";

import heroDining from "@/assets/madhubhan-dining.jpg";

export const cuisineOutlets = [
  {
    id: 1,
    name: "The Banyan Tree",
    subtitle: "Regional Gujarati & Contemporary Indian",
    image: banyanTreeImg,
    description:
      "Set beneath the majestic canopy of our 300-year-old banyan tree, experience an open-air culinary celebration of authentic regional Gujarati thalis and refined contemporary Indian gastronomy under the starlit sky.",
    timings: "12:30 PM – 3:30 PM | 7:30 PM – 11:00 PM",
    atmosphere: "Open-Air Heritage Al Fresco",
    highlights: [
      "Signature Kathiyawadi & Gujarati Thali",
      "Live Classical Music in the evenings",
      "Handcrafted Clay Oven Kebabs & Breads",
      "Specialty Rose & Saffron Shrikhand"
    ]
  },
  {
    id: 2,
    name: "24 Seven - The Coffee Shop",
    subtitle: "New World & Multi-Cuisine All-Day Dining",
    image: twentyFourSevenImg,
    description:
      "A perfect spot for food moments and conversation, at our 24 Seven - The Coffee Shop, We refresh your mood with our warm hospitality complemented with New World Cuisine giving you \"the view\" amidst water bodies and manicured lawns.",
    timings: "Open 24 Hours",
    atmosphere: "Lively Glass-Walled Pavilion",
    highlights: [
      "Lavish Breakfast, Lunch & Dinner Buffets",
      "Midnight Bites & Artisan Coffee",
      "Interactive Live Cooking Counters",
      "Pan-Asian, Continental & North Indian Classics"
    ]
  },
  {
    id: 3,
    name: "Kouzina - Italian Mediterranean Bistro",
    subtitle: "Authentic Italian & Mediterranean Trattoria",
    image: kouzinaImg,
    description:
      "An authentic Italian & Mediterranean trattoria serving hand-crafted pasta, wood-fired artisan pizzas, fresh herbs, and sun-ripened Mediterranean delights overlooking our serene azure poolside.",
    timings: "6:30 PM – 11:30 PM",
    atmosphere: "Poolside Romantic Trattoria",
    highlights: [
      "Hand-Tossed Wood-Fired Neapolitan Pizzas",
      "Truffle & Porcini Handmade Tagliatelle",
      "Authentic Greek Mezze Sharing Platters",
      "Signature Classic Tiramisu & Gelatos"
    ]
  },
  {
    id: 4,
    name: "Tapas - The Mexican Bar",
    subtitle: "Zesty Mexican Street Food & Concoctions",
    image: tapasImg,
    description:
      "Immerse yourself in spirited Mexican zest with zesty tacos, sizzling fajitas, fresh guacamole, and signature artisan mocktails & concoctions in an energetic, vibrant lounge setting.",
    timings: "5:00 PM – 11:30 PM",
    atmosphere: "Vibrant Mexican Lounge",
    highlights: [
      "Sizzling Vegetable & Cottage Cheese Fajitas",
      "Crispy Nachos with Molten Cheese & Salsa",
      "Fresh Guacamole Prepared Table-Side",
      "Exotic Tropical Mocktails & Shakes"
    ]
  },
  {
    id: 5,
    name: "Madhubhan Food Galleria",
    subtitle: "Interactive Live Multi-Cuisine Food Court",
    image: foodGalleriaImg,
    description:
      "A vibrant multi-station culinary food galleria showcasing live interactive cooking, street food delicacies, regional chaats, South Indian tiffins, and Pan-Asian wok specialties.",
    timings: "11:00 AM – 11:00 PM",
    atmosphere: "Bustling Food Galleria",
    highlights: [
      "Live Delhi & Mumbai Chaat Stations",
      "Crisp Ghee Dosas & Fluffy Idlis",
      "Sizzling Pan-Asian Wok Delicacies",
      "Family-friendly casual dining vibe"
    ]
  },
  {
    id: 6,
    name: "Bake a cake",
    subtitle: "Artisanal Patisserie & Cake Studio",
    image: bakeACakeImg,
    description:
      "The resort's artisanal patisserie and bakery, crafting exquisite custom celebration cakes, delicate French pastries, fresh morning croissants, and decadent gourmet chocolates.",
    timings: "9:00 AM – 10:00 PM",
    atmosphere: "Boutique Gourmet Patisserie",
    highlights: [
      "Custom Wedding & Anniversary Cakes",
      "Warm Belgian Chocolate Éclairs & Tarts",
      "Freshly Baked Croissants & Brioche",
      "Handcrafted Single-Origin Chocolates"
    ]
  },
  {
    id: 7,
    name: "Chai Baar - The chai junction",
    subtitle: "Traditional Indian Chai & Snacks Sanctuary",
    image: chaiBaarImg,
    description:
      "The quintessential Indian tea haven serving freshly brewed masala chai, kulhad ginger tea, handcrafted snacks, fafda, and steaming hot pakodas in a charming garden setting.",
    timings: "6:00 AM – 10:00 PM",
    atmosphere: "Tranquil Garden Tea Pavilion",
    highlights: [
      "Traditional Clay Kulhad Masala Chai",
      "Hot Monsoon Pakodas & Crispy Fafda",
      "Herbal Kahwa & Organic Green Teas",
      "Peaceful Morning & Sunset Garden Ambience"
    ]
  }
];

function DiningModal({ venue, onClose }) {
  if (!venue) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white text-zinc-900 w-full max-w-3xl rounded-sm shadow-2xl overflow-hidden my-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="h-64 sm:h-80 w-full relative">
          <img
            src={venue.image}
            alt={venue.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-6 text-white">
            <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
              {venue.atmosphere}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">{venue.name}</h2>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-4 mb-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600">
              <Clock className="w-4 h-4 text-[#a37c4c]" />
              <span><strong>Timings:</strong> {venue.timings}</span>
            </div>
            <Link
              to="/contact"
              className="gold-button !text-xs !py-2.5 !px-5"
              onClick={onClose}
            >
              Reserve a Table <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-6 font-light">
            {venue.description}
          </p>

          <div>
            <h4 className="font-serif text-lg text-zinc-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#a37c4c]" />
              Highlights &amp; Signatures
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {venue.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                  <Check className="w-4 h-4 text-[#a37c4c] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CuisinePage() {
  const [selectedVenue, setSelectedVenue] = useState(null);

  return (
    <>
      {/* Hero Banner matching Cuisine aesthetic */}
      <section className="relative w-full h-[70vh] min-h-[30rem] max-h-[44rem] flex items-center justify-center overflow-hidden bg-[#111] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={heroDining}
            alt="Madhubhan Resort & Spa Cuisine & Dining"
            className="w-full h-full object-cover animate-kenburns-zoom-out"
            style={{ animation: "kenburns-zoom-out 12s cubic-bezier(0.2, 0.8, 0.3, 1) infinite alternate" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-[#c5a880] uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-4">
            GASTRONOMIC EXPERIENCES
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-normal tracking-wide drop-shadow-md">
            Cuisine &amp; Dining
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl text-xs sm:text-sm md:text-base font-light tracking-wider">
            From al fresco banyan dining to round-the-clock coffee lounges, artisan bakeries, and authentic Italian trattorias.
          </p>
        </div>

        {/* Scroll Pill Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">
          <div className="w-5 h-9 rounded-full border border-white/60 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce mt-1" />
          </div>
        </div>
      </section>

      {/* 7 Dining Outlets Showcase Section (Matching 3rd Screenshot Style) */}
      <section className="cuisine-showcase bg-[#fdfbf7] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <p className="text-[#a37c4c] uppercase tracking-[0.25em] text-xs font-semibold mb-3">
              RESTAURANTS &amp; BARS
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
              A Symphony of Flavours
            </h2>
            <p className="text-[#666] text-sm sm:text-base font-light mt-4">
              Explore our seven distinct dining destinations crafted with passionate hospitality, freshest regional ingredients, and atmospheric settings.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {cuisineOutlets.map((outlet, index) => {
              const isEven = index % 2 === 1; // Alternating layout
              return (
                <div
                  key={outlet.id}
                  className="cuisine-card relative bg-white border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[24rem]"
                >
                  {/* Image Side (7 cols) */}
                  <div
                    className={`lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[20rem] lg:min-h-[28rem] overflow-hidden ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <img
                      src={outlet.image}
                      alt={outlet.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#c5a880] text-xs uppercase tracking-widest px-3 py-1 font-medium border border-white/10">
                      {outlet.atmosphere}
                    </div>
                  </div>

                  {/* Details Side (5 cols) */}
                  <div
                    className={`lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white text-zinc-900 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1a1a1a] mb-4 font-normal tracking-tight">
                        {outlet.name}
                      </h3>
                      <p className="text-[#4a4a4a] text-sm sm:text-[0.93rem] leading-[1.75] mb-6 font-sans font-light">
                        {outlet.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-[#777] mb-6">
                        <Clock className="w-3.5 h-3.5 text-[#a37c4c]" />
                        <span>{outlet.timings}</span>
                      </div>
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => setSelectedVenue(outlet)}
                        className="inline-block bg-[#a37c4c] hover:bg-[#8b6537] text-white text-[0.72rem] font-medium tracking-[0.18em] uppercase px-8 py-3.5 transition-all duration-200 focus:outline-none shadow-sm cursor-pointer"
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

      {/* Dining Modal */}
      {selectedVenue && (
        <DiningModal
          venue={selectedVenue}
          onClose={() => setSelectedVenue(null)}
        />
      )}

      {/* Private Dining CTA */}
      <section className="relative py-20 sm:py-28 bg-[#18181b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src={heroDining}
            alt="Private dining"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-semibold mb-3">
            BESPOKE CELEBRATIONS &amp; PRIVATE DINING
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-6">
            Private Candlelight
            <br />
            <em className="text-[#c5a880] italic">Poolside Dinners</em>
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-8 font-light">
            Celebrate birthdays, anniversaries, and precious milestones with a customized 5-course chef menu, personal butler, and starlit floral setup.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#a37c4c] hover:bg-[#8b6537] text-white text-xs font-medium uppercase tracking-[0.2em] px-8 py-4 transition-all duration-200 shadow-lg"
          >
            <span>Reserve Private Dining</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
