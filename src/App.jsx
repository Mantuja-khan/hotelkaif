import React from "react";
import { Routes, Route } from "react-router-dom";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import { HomePage } from "@/components/arcova";
import { ScrollToTop } from "@/components/ScrollToTop";
import AboutPage from "@/pages/AboutPage";
import AccommodationPage from "@/pages/AccommodationPage";
import CuisinePage from "@/pages/CuisinePage";
import SpaWellnessPage from "@/pages/SpaWellnessPage";
import WeddingPage from "@/pages/WeddingPage";
import ExperiencePage from "@/pages/ExperiencePage";
import AttractionPage from "@/pages/AttractionPage";
import ServicesPage from "@/pages/ServicesPage";
import ProjectsPage from "@/pages/ProjectsPage";
import InsightsPage from "@/pages/InsightsPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/accommodations" element={<AccommodationPage />} />
          <Route path="/cuisine" element={<CuisinePage />} />
          <Route path="/dining" element={<CuisinePage />} />
          <Route path="/spa-wellness" element={<SpaWellnessPage />} />
          <Route path="/wellness" element={<SpaWellnessPage />} />
          <Route path="/spa" element={<SpaWellnessPage />} />
          <Route path="/wedding" element={<WeddingPage />} />
          <Route path="/weddings" element={<WeddingPage />} />
          <Route path="/celebration" element={<WeddingPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/experiences" element={<ExperiencePage />} />
          <Route path="/attractions" element={<AttractionPage />} />
          <Route path="/attraction" element={<AttractionPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
