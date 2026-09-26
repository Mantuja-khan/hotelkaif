import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  Utensils,
  Sparkles,
  Heart,
  Compass,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

const experienceDropdownItems = [
  {
    label: "Cuisine",
    to: "/cuisine",
    desc: "Soulful dining & authentic flavors",
    icon: Utensils,
  },
  {
    label: "Wellness",
    to: "/spa-wellness",
    desc: "Ayurvedic spa & mindful rituals",
    icon: Heart,
  },
  {
    label: "Celebration",
    to: "/wedding",
    desc: "Weddings & grand banquets",
    icon: Sparkles,
  },
  {
    label: "Attraction",
    to: "/attractions",
    desc: "Resort pool & local sightseeing",
    icon: Compass,
  },
];

import madhubhanLogo from "@/assets/madhubhan-logo.png";

export function Brand({ className = "" }) {
  return (
    <Link to="/" className={`brand ${className}`} aria-label="Madhubhan Resort and Spa home">
      <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-sm shadow-sm hover:bg-white transition-all flex items-center">
        <img
          src={madhubhanLogo}
          alt="Madhubhan Resort & Spa"
          className="h-9 sm:h-11 md:h-12 w-auto object-contain"
        />
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(true);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setOpen(false);
  }, [location.pathname]);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isExperienceActive = [
    "/experience",
    "/experiences",
    "/cuisine",
    "/dining",
    "/spa-wellness",
    "/wellness",
    "/spa",
    "/wedding",
    "/weddings",
    "/celebration",
    "/attractions",
    "/attraction",
  ].includes(location.pathname);

  return (
    <header className="site-header">
      <Brand />

      <nav className="desktop-nav" aria-label="Main navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>

        <NavLink
          to="/accommodation"
          className={({ isActive }) =>
            isActive || location.pathname === "/accommodations" ? "active" : ""
          }
        >
          Accommodation
        </NavLink>

        <NavLink
          to="/cuisine"
          className={({ isActive }) =>
            isActive || location.pathname === "/dining" ? "active" : ""
          }
        >
          Cuisine
        </NavLink>

        <NavLink
          to="/spa-wellness"
          className={({ isActive }) =>
            isActive ||
            location.pathname === "/wellness" ||
            location.pathname === "/spa"
              ? "active"
              : ""
          }
        >
          Spa &amp; Wellness
        </NavLink>

        <NavLink
          to="/wedding"
          className={({ isActive }) =>
            isActive ||
            location.pathname === "/weddings" ||
            location.pathname === "/celebration"
              ? "active"
              : ""
          }
        >
          Wedding
        </NavLink>

        {/* Experience with Dropdown */}
        <div
          className="nav-dropdown-wrapper"
          ref={dropdownRef}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <div className="flex items-center">
            <NavLink
              to="/experience"
              className={`nav-dropdown-trigger ${
                isExperienceActive ? "active" : ""
              }`}
              onClick={(e) => {
                // Allows direct click to page or toggle
              }}
            >
              <span>Experience</span>
              <ChevronDown
                className={`dropdown-chevron ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </NavLink>
          </div>

          {dropdownOpen && (
            <div className="nav-dropdown-menu" role="menu">
              <div className="dropdown-menu-header">
                <p className="eyebrow !mb-0 !text-[0.6rem]">Resort Experiences</p>
              </div>
              <div className="dropdown-grid">
                {experienceDropdownItems.map((item) => {
                  const Icon = item.icon;
                  const isItemActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      role="menuitem"
                      className={`dropdown-item ${isItemActive ? "active-item" : ""}`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="dropdown-item-icon">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="dropdown-item-content">
                        <div className="dropdown-item-title">
                          <span>{item.label}</span>
                          <ArrowRight className="item-arrow w-3 h-3 text-primary" />
                        </div>
                        <p className="dropdown-item-desc">{item.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="dropdown-menu-footer">
                <Link
                  to="/experience"
                  className="dropdown-all-link"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span>Explore all experiences</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
                </Link>
              </div>
            </div>
          )}
        </div>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
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

      {/* Mobile Navigation */}
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
            <ArrowUpRight />
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
            <ArrowUpRight />
          </Link>
          <Link to="/accommodation" onClick={() => setOpen(false)}>
            Accommodation
            <ArrowUpRight />
          </Link>
          <Link to="/cuisine" onClick={() => setOpen(false)}>
            Cuisine
            <ArrowUpRight />
          </Link>
          <Link to="/spa-wellness" onClick={() => setOpen(false)}>
            Spa &amp; Wellness
            <ArrowUpRight />
          </Link>
          <Link to="/wedding" onClick={() => setOpen(false)}>
            Wedding
            <ArrowUpRight />
          </Link>

          {/* Mobile Experience Collapsible */}
          <div className="mobile-dropdown-section">
            <div
              className="mobile-dropdown-header"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              <span>Experience</span>
              <ChevronDown
                className={`w-5 h-5 text-primary transition-transform duration-300 ${
                  mobileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {mobileDropdownOpen && (
              <div className="mobile-dropdown-list">
                {experienceDropdownItems.map((sub) => {
                  const Icon = sub.icon;
                  return (
                    <Link
                      key={sub.label}
                      to={sub.to}
                      className="mobile-dropdown-link"
                      onClick={() => setOpen(false)}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-primary" />
                        <span>{sub.label}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                  );
                })}
                <Link
                  to="/experience"
                  className="mobile-dropdown-link !text-primary !font-semibold"
                  onClick={() => setOpen(false)}
                >
                  <span>All Experiences Overview</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
            <ArrowUpRight />
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#053728] text-[#e8eee9] pt-14 pb-10 border-t border-emerald-900/60 select-none">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
        {/* Column 1: Get in touch & Brand */}
        <div className="flex flex-col">
          <Link to="/" className="inline-block mb-4 w-fit" aria-label="Madhubhan Resort and Spa home">
            <div className="bg-white/95 px-3 py-1.5 rounded-sm shadow-md inline-block">
              <img
                src={madhubhanLogo}
                alt="Madhubhan Resort & Spa"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </div>
          </Link>
          <p className="font-medium text-sm text-[#ffffff] mb-1">
            Madhubhan Resort &amp; Spa
          </p>
          <p className="text-xs text-[#c2d3cb] leading-relaxed mb-4">
            Anand - Sojitra Road
            <br />
            Vallabh Vidyanagar - 388 120
            <br />
            Gujarat, India.
          </p>
          <div className="mb-6">
            <a
              href="mailto:reservations@madhubhan.com"
              className="text-xs text-[#ffffff] underline underline-offset-4 hover:text-[#d4af37] transition-colors"
            >
              reservations@madhubhan.com
            </a>
          </div>
          {/* Social circular icons */}
          <div className="flex items-center gap-3 mt-auto">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full border border-emerald-400/40 text-emerald-200 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all text-xs"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full border border-emerald-400/40 text-emerald-200 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all text-xs"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-emerald-400/40 text-emerald-200 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all text-xs"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://tripadvisor.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TripAdvisor"
              className="w-8 h-8 rounded-full border border-emerald-400/40 text-emerald-200 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all text-xs"
            >
              <Globe className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Column 2: Accommodation */}
        <div>
          <h3 className="font-serif text-[1.4rem] font-normal text-[#f4efe6] mb-5">
            Accommodation
          </h3>
          <ul className="space-y-2 text-xs text-[#c2d3cb]">
            {[
              "Deluxe Rooms",
              "Deluxe Premium Rooms",
              "Mandavdi Gom Cottages",
              "Zamkudi Gom Cottages",
              "Mandavdi Gom Deluxe Cottages",
              "Executive Suite",
              "Signature Suite",
              "Zanzariyu - The Deluxe Suite",
              "Zulaniya - The Bridal Suite",
              "Madhubhan - Presidential Suite",
            ].map((room) => (
              <li key={room}>
                <Link
                  to="/accommodation"
                  className="hover:text-[#ffffff] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-[#a37c4c] text-[10px]">•</span> {room}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Cuisine */}
        <div>
          <h3 className="font-serif text-[1.4rem] font-normal text-[#f4efe6] mb-5">
            Cuisine
          </h3>
          <ul className="space-y-2 text-xs text-[#c2d3cb]">
            {[
              "Madhubhan Food Galleria",
              "The Banyan Tree",
              "24 Seven - The Coffee Shop",
              "Kouzina - Italian Mediterranean Bistro",
              "Tapas - The Mexican Bar",
              "Bake A Cake",
              "Chai Bar",
              "Patellis - Pizza Bar",
            ].map((item) => (
              <li key={item}>
                <Link
                  to="/cuisine"
                  className="hover:text-[#ffffff] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-[#a37c4c] text-[10px]">•</span> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Wellness */}
        <div>
          <h3 className="font-serif text-[1.4rem] font-normal text-[#f4efe6] mb-5">
            Wellness
          </h3>
          <ul className="space-y-2 text-xs text-[#c2d3cb]">
            {["Salon", "Spa"].map((item) => (
              <li key={item}>
                <Link
                  to="/spa-wellness"
                  className="hover:text-[#ffffff] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-[#a37c4c] text-[10px]">•</span> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Explore */}
        <div>
          <h3 className="font-serif text-[1.4rem] font-normal text-[#f4efe6] mb-5">
            Explore
          </h3>
          <ul className="space-y-2 text-xs text-[#c2d3cb]">
            {[
              { label: "Experiences", to: "/experience" },
              { label: "Wellness", to: "/spa-wellness" },
              { label: "Celebrations", to: "/wedding" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="hover:text-[#ffffff] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-[#a37c4c] text-[10px]">•</span> {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 mt-12 pt-6 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-emerald-300/60">
        <span>© {new Date().getFullYear()} Madhubhan Resort &amp; Spa. All rights reserved.</span>
        <span>Privacy Policy &nbsp;&nbsp;|&nbsp;&nbsp; Terms &amp; Conditions</span>
      </div>
    </footer>
  );
}
