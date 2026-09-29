import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

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

      {/* Automatically moves page to top when route changes */}
      <ScrollToTop />

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}


export default App;