import doctorImage from "../assets/doctor.png";
function Hero() {
  return (
    <section
  id="home"
  className="bg-[#FAFAF8] py-6 md:py-10"
>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="text-[#B86A4D] font-semibold uppercase tracking-wider">
              Welcome to One Care Children Clinic
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0B2C6B] mt-4 leading-tight">
              Expert Pediatric Care <br />
  With a Personal Touch{" "}
  <span className="inline-block ">🍁</span>
              
            </h1>

            <p className="text-gray-600 mt-6 text-base sm:text-lg leading-7">
              From newborn checkups to adolescent healthcare, One Care Children Clinic provides comprehensive pediatric services with warmth, expertise, and personalized medical attention.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-[#0B2C6B] text-white px-8 py-4 rounded-full hover:bg-[#B86A4D] transition">
                Book Appointment
              </button>

              <button className="border-2 border-[#0B2C6B] text-[#0B2C6B] px-8 py-4 rounded-full hover:bg-[#0B2C6B] hover:text-white transition">
                Call Now
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
  <img
    src={doctorImage}
    alt="Pediatric Doctor Illustration"
    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto animate-floating"
  />
</div>

        </div>
      </div>
    </section>
  );
}

export default Hero;