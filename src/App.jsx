import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// ========================================
// MAIN COMPONENTS
// ========================================

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

import Contact from "./components/Contact";
import BookAppointment from "./components/BookAppointment";

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
// SCROLL TO TOP
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

      {/* Scroll page to top whenever route changes */}
      <ScrollToTop />

      {/* Navbar appears on every page */}
      <Navbar />

      <Routes>

        {/* ==================================
            HOME
        ================================== */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ==================================
            ABOUT PAGE
        ================================== */}

        <Route
          path="/about"
          element={<AboutPage />}
        />


        {/* ==================================
            CONTACT PAGE
        ================================== */}

        <Route path="/contact" element={<Contact />} />


        {/* ==================================
            APPOINTMENT PAGE
        ================================== */}

        <Route
          path="/appointment"
          element={<BookAppointment />}
        />


        {/* ==================================
            SERVICE PAGES
        ================================== */}

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