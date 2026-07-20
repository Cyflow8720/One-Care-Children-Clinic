import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
function Navbar() {
     const [isOpen, setIsOpen] = useState(false);
     const [scrolled, setScrolled] = useState(false);
     useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <nav
  className={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-[#FFF4ED] shadow-lg"
      : "bg-[#FFF4ED] shadow-none"
  }`}
>
      <div className="max-w-7xl mx-auto px-6 h-18 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
 <img
  src={logo}
  alt="One Care Children Clinic"
  className="h-28 md:h-20 w-auto"
/>

  
</div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">

          <a href="#home" className="text-[#0B2C6B] hover:text-[#B86A4D]">
            Home
          </a>

          <a href="#about" className="text-[#0B2C6B] hover:text-[#B86A4D]">
            About
          </a>

          <a href="#services" className="text-[#0B2C6B] hover:text-[#B86A4D]">
            Services
          </a>

          <a href="#appointment" className="text-[#0B2C6B] hover:text-[#B86A4D]">
            Appointment
          </a>

          <a href="#testimonials" className="text-[#0B2C6B] hover:text-[#B86A4D]">
            Testimonials
          </a>

          <a href="#contact" className="text-[#0B2C6B] hover:text-[#B86A4D]">
            Contact
          </a>

        </div>

        {/* Book Appointment Button */}
        {/* Desktop Button */}
<button className="hidden md:block bg-[#0B2C6B] text-white px-6 py-2 rounded-full hover:bg-[#B86A4D] transition duration-300">
  Book Appointment
</button>

{/* Mobile Menu Button */}
<div className="md:hidden">
  <button onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? (
      <FaTimes className="text-2xl text-[#0B2C6B]" />
    ) : (
      <FaBars className="text-2xl text-[#0B2C6B]" />
    )}
  </button>
</div>

      </div>
      {/* Mobile Navigation */}
{isOpen && (
  <div className="md:hidden bg-[#FAFAF8] shadow-md">
    <div className="flex flex-col items-center gap-6 py-6">

      <a href="#home" className="text-[#0B2C6B] hover:text-[#B86A4D]">
        Home
      </a>

      <a href="#about" className="text-[#0B2C6B] hover:text-[#B86A4D]">
        About
      </a>

      <a href="#services" className="text-[#0B2C6B] hover:text-[#B86A4D]">
        Services
      </a>

      <a href="#appointment" className="text-[#0B2C6B] hover:text-[#B86A4D]">
        Appointment
      </a>

      <a href="#testimonials" className="text-[#0B2C6B] hover:text-[#B86A4D]">
        Testimonials
      </a>

      <a href="#contact" className="text-[#0B2C6B] hover:text-[#B86A4D]">
        Contact
      </a>

      <button className="bg-[#0B2C6B] text-white px-6 py-2 rounded-full hover:bg-[#B86A4D] transition duration-300">
        Book Appointment
      </button>

    </div>
  </div>
)}

    </nav>

  );
}

export default Navbar;