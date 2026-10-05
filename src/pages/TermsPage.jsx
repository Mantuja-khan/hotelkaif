import heroFacade from "@/assets/madhubhan-hero-facade.jpg";
import {
  Clock,
  Coffee,
  CalendarCheck,
  CreditCard,
  UserCheck,
  Ban,
  ShieldCheck,
  FileCheck2,
  AlertCircle,
  Users
} from "lucide-react";

export default function TermsPage() {
  return (
    <>
      {/* Hero Banner with Hero Section Image */}
      <section className="relative w-full h-[38vh] min-h-[16rem] max-h-[26rem] flex items-center justify-center overflow-hidden bg-[#111] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={heroFacade}
            alt="Madhubhan Resort & Spa Facade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-semibold mb-2">
            Madhubhan Resort &amp; Spa
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-wide drop-shadow-md">
            Terms &amp; Conditions
          </h1>
        </div>
      </section>

      {/* Main Terms & Conditions Content */}
      <section className="bg-[#fbf9f5] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto bg-white border border-stone-200/90 shadow-sm p-6 sm:p-10 md:p-14 rounded-sm text-stone-800">
          <div className="border-b border-stone-200 pb-6 mb-10">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#a37c4c] font-semibold mb-2">
              <FileCheck2 className="w-4 h-4" />
              <span>Madhubhan Resort &amp; Spa Policies</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] font-normal">
              Resort Terms &amp; Reservation Guidelines
            </h2>
            <p className="text-xs text-stone-500 mt-2 font-mono">
              Please review our stay, payment, cancellation, and guest verification policies.
            </p>
          </div>

          <div className="space-y-10 text-sm sm:text-[0.95rem] leading-[1.8] text-stone-700 font-light">
            {/* 1. Check-In & Check-Out Timings */}
            <article className="space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a] font-normal flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#a37c4c] shrink-0" />
                Check-In &amp; Check-Out Timings
              </h3>
              <p>
                Our check-in time is <strong>14:00 hrs (2:00 PM)</strong> and check-out time is <strong>12:00 hrs (12:00 PM)</strong>.
              </p>
              <p>
                Early check-in is subject to availability of rooms. However, check-in before <strong>8:00 A.M.</strong> will be charged for a full day in advance.
              </p>
            </article>

            {/* 2. Breakfast & Dining Policies */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a] font-normal flex items-center gap-2.5">
                <Coffee className="w-5 h-5 text-[#a37c4c] shrink-0" />
                Breakfast &amp; Restaurant Inclusions
              </h3>
              <p>
                The room rates are inclusive of buffet breakfast at <strong>24 Seven - 24 hrs Coffee Shop</strong>. Breakfast ordered in room will be charged extra.
              </p>
              <p>
                <strong>The Banyan Tree</strong> is our speciality restaurant. Kindly reserve your table in advance to enjoy facilities.
              </p>
            </article>

            {/* 3. Special Rates & FIT Booking Conditions */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a] font-normal flex items-center gap-2.5">
                <Users className="w-5 h-5 text-[#a37c4c] shrink-0" />
                Special Rates &amp; FIT Bookings
              </h3>
              <p>
                Special rates offered are for <strong>FIT – corporate / leisure travelers</strong>. This rate is not applicable on conferences, meetings, seminars, and social groups / functions / group travelers.
              </p>
              <p>
                Special Rates offered are confidential as a long-term business commitment.
              </p>
              <p>
                The guests will be requested for their visiting cards or Voucher as identification for eligibility for special rates. In case they are not from your company / travel agency, please do inform us while making the reservation.
              </p>
              <p>
                In case of bonafide Travel agents, <strong>TAAI &amp; FHRAI</strong> conditions apply.
              </p>
            </article>

            {/* 4. Reservation Holding & Cancellation Policy */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a] font-normal flex items-center gap-2.5">
                <CalendarCheck className="w-5 h-5 text-[#a37c4c] shrink-0" />
                Reservation Holding &amp; Cancellation Policy
              </h3>
              <p>
                All reservations will be held till <strong>18:00 hrs (6:00 PM)</strong>, after which they will be released, unless intimation of late arrival has been received in advance.
              </p>
              <p>
                All FIT amendments and cancellations must be made at least <strong>72 hours prior to the expected arrival</strong>, beyond which retention equivalent to one night&apos;s room charges will be levied.
              </p>
            </article>

            {/* 5. Payment & Settlement Policies */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a] font-normal flex items-center gap-2.5">
                <CreditCard className="w-5 h-5 text-[#a37c4c] shrink-0" />
                Billing &amp; Payment Settlement
              </h3>
              <p>
                Payments pertaining to the stay of the guest must be settled directly prior to departure in cash or through an approved credit card, unless your travel agency / company is on our approved credit list.
              </p>
              <p>
                <strong>Cheque payment will not be accepted</strong> at the time of final settlement.
              </p>
              <p>
                We accept all major credit cards for payments.
              </p>
            </article>

            {/* 6. Child Policy */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a] font-normal flex items-center gap-2.5">
                <UserCheck className="w-5 h-5 text-[#a37c4c] shrink-0" />
                Child Policy
              </h3>
              <p>
                Child below <strong>5 Years is complimentary</strong> while sharing room with parents without an extra bed. However, in case of an extra bed, it will be charged as per resort charges.
              </p>
            </article>

            {/* 7. Photo-Identity & Security Procedures */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a] font-normal flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#a37c4c] shrink-0" />
                Mandatory Guest Photo-Identity Verification
              </h3>
              <p>
                In keeping with our heightened security procedures, we request all our guests to carry a valid government-approved photo-identity to present at check-in:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-stone-700">
                <li>
                  <strong>Foreign nationals:</strong> Required to present their valid Passport and valid Visa.
                </li>
                <li>
                  <strong>Indian nationals:</strong> Can present any one of the following: Passport, Driving License, Voter ID card, or PAN card.
                </li>
              </ul>
            </article>

            {/* 8. Government No-Smoking Legislation */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a] font-normal flex items-center gap-2.5 text-stone-900">
                <Ban className="w-5 h-5 text-red-600 shrink-0" />
                Government No-Smoking Legislation
              </h3>
              <p>
                The Government of India has introduced a <strong>&lsquo;No Smoking&rsquo; legislation</strong> for hotels, restaurants, and all public places. As a consequence, smoking is prohibited in all parts of the hotel except in designated areas.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
