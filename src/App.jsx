import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import PediatricServices from "./components/PediatricServices";
import About from "./components/About";
import AboutPage from "./components/AboutPage";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HealthcareCTA from "./components/HealthcareCTA";
import GoogleReviews from "./components/GoogleReviews";
import Footer from "./components/Footer";
import Attachments from "./components/Attachments";

// ========================================
// SERVICE PAGES
// ========================================

import NewbornCare from "./components/servicePages/NewbornCare";
import Vaccination from "./components/servicePages/Vaccination";
import GrowthDevelopment from "./components/servicePages/GrowthDevelopment";
import ChildNutrition from "./components/servicePages/ChildNutrition";
import ChildhoodIllness from "./components/servicePages/ChildhoodIllness";
import AdolescentCare from "./components/servicePages/AdolescentCare";

// ========================================
// SCROLL TO TOP WHEN PAGE CHANGES
// ========================================

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// ========================================
// HOME PAGE
// ========================================

function Home() {
  return (
    <>
      <Hero />
      <PediatricServices />
      <About />
      <Services />
      <WhyChooseUs />
      <HealthcareCTA />
      <GoogleReviews />
    </>
  );
}

// ========================================
// APP
// ========================================

function App() {
  return (
    <BrowserRouter>

      {/* Scroll to top whenever route changes */}
      <ScrollToTop />

      {/* Sticky Header */}
      <div className="sticky-header">
        <TopBar />
        <Navbar />
      </div>

      {/* ========================================
          ALL ROUTES
      ======================================== */}

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<AboutPage />} />

        {/* ATTACHMENTS */}
        <Route path="/attachments" element={<Attachments />} />

        {/* ========================================
            SERVICE PAGES
        ======================================== */}

        <Route
          path="/services/newborn-care"
          element={<NewbornCare />}
        />

        <Route
          path="/services/vaccination"
          element={<Vaccination />}
        />

        <Route
          path="/services/growth-development"
          element={<GrowthDevelopment />}
        />

        <Route
          path="/services/child-nutrition"
          element={<ChildNutrition />}
        />

        <Route
          path="/services/childhood-illness"
          element={<ChildhoodIllness />}
        />

        <Route
          path="/services/adolescent-care"
          element={<AdolescentCare />}
        />

      </Routes>

      {/* Footer appears on every page */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;