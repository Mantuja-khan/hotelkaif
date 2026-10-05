import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/arcova";
import hero from "@/assets/contact-reception-hero.png";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Plan your stay"
        title={
          <>
            Your Extraordinary
            <br />
            <em>Escape Awaits.</em>
          </>
        }
        text="Tell us how you would like to experience Madhubhan. Our team will help shape every detail."
        image={hero}
      />
      <section className="contact-section section">
        <div className="contact-details">
          <p className="eyebrow">Reservations &amp; enquiries</p>
          <h2>Begin your journey.</h2>
          <p>
            Share a little about your plans and our team will be in touch within
            two business days.
          </p>
          <div>
            <p>
              <Mail /> <a href="mailto:reservations@madhubhan.com" className="hover:text-primary transition-colors">reservations@madhubhan.com</a>
            </p>
            <p>
              <Phone /> <a href="tel:9828885481" className="hover:text-primary transition-colors font-medium">Click to Call Reservations</a>
            </p>
            <p>
              <MapPin /> Anand–Sojitra Road, Vallabh Vidyanagar, Gujarat, India
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-border/60">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Instant Booking Helpline</p>
            <a
              href="tel:9828885481"
              className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#a37c4c] text-white text-xs font-semibold uppercase tracking-wider px-5 py-3 transition-colors rounded-xs shadow-sm cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>CALL RESERVATIONS</span>
            </a>
          </div>
        </div>

        {sent ? (
          <div className="form-success">
            <span>Thank you.</span>
            <h2>Your escape starts here.</h2>
            <p>We’ve received your enquiry and will be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={submit}>
            <label>
              Name
              <input required name="name" />
            </label>
            <label>
              Email
              <input required type="email" name="email" />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" />
            </label>
            <label>
              Experience
              <select required defaultValue="">
                <option value="" disabled>
                  Select an experience
                </option>
                <option>Luxury stay</option>
                <option>Spa &amp; wellness</option>
                <option>Celebration</option>
                <option>Dining</option>
              </select>
            </label>
            <label className="full">
              Tell us about your plans
              <textarea required rows={5} />
            </label>
            <Button type="submit" className="gold-button">
              Book Now
            </Button>
          </form>
        )}
      </section>
    </>
  );
}
