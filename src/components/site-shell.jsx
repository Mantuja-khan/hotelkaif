import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Madhubhan Resort and Spa home">
      <span className="brand-mark">M</span>
      <span>
        <b>MADHUBHAN</b>
        <small>RESORT &amp; SPA</small>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map(([label, to]) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <Button asChild variant="outline" className="header-cta">
        <Link to="/contact">Get in touch</Link>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X /> : <Menu />}
      </Button>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {nav.map(([label, to]) => (
            <Link key={to} to={to} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <p className="eyebrow">Your escape awaits</p>
          <h2>
            Make Time
            <br />
            For Something
            <br />
            <em>Extraordinary.</em>
          </h2>
          <Link className="gold-button" to="/contact">
            Plan your stay <ArrowUpRight />
          </Link>
        </div>
        <div className="footer-contact">
          <p>
            <Mail /> reservations@madhubhan.com
          </p>
          <p>
            <Phone /> +91 2692 239 268
          </p>
          <p>
            <MapPin /> Anand–Sojitra Road,
            <br />
            Gujarat, India
          </p>
          <div className="dotted-square" aria-hidden="true" />
        </div>
        <div className="footer-brand">
          <Brand />
          <p>
            A place of gracious hospitality, restorative wellness, and moments
            to treasure.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Madhubhan Resort &amp; Spa. All rights reserved.</span>
        <span>Privacy Policy &nbsp;&nbsp; Terms of Service</span>
      </div>
    </footer>
  );
}
