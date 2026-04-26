"use client";

export default function HeroSection() {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-br from-white to-brand-light">
      <div className="container grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          {/* Professional Badge */}
          <div className="mb-5 flex justify-center md:justify-start">
            <span className="px-4 py-2 bg-brand-primary/10 text-brand-primary text-xs sm:text-sm rounded-full font-medium">
              Trusted Eye Clinic in Lagos
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Comprehensive & Specialist{" "}
            <span className="text-brand-primary">
              Eye Care
            </span>{" "}
            in Ikeja & Surulere
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg text-brand-muted mb-7 md:mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed text-justify md:text-left">
            Welcome to Just Vision Eye Centre. We provide professional eye
            examinations, glaucoma management, digital glasses and modern
            optical care — delivered with precision and patient-focused care.
          </p>

          {/* APP-LIKE CTA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

            {/* IKEJA BUTTON */}
            <a
              href="https://wa.me/2348165557988?text=Hello%20Just%20Vision%20Eye%20Center%20(Ikeja),%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AService%20Required:%20%0APreferred%20Date:%20%0A%0AThank%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white p-4 rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-green-100 text-green-600 text-lg">
                💬
              </div>

              <div className="text-left">
                <p className="text-xs sm:text-sm text-brand-muted">
                  Book Appointment
                </p>
                <p className="font-semibold text-brand-dark">
                  Ikeja Branch
                </p>
              </div>
            </a>

            {/* SURULERE BUTTON */}
            <a
              href="https://wa.me/2348189440752?text=Hello%20Just%20Vision%20Eye%20Center%20(Surulere),%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AService%20Required:%20%0APreferred%20Date:%20%0A%0AThank%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white p-4 rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary text-lg">
                📍
              </div>

              <div className="text-left">
                <p className="text-xs sm:text-sm text-brand-muted">
                  Book Appointment
                </p>
                <p className="font-semibold text-brand-dark">
                  Surulere Branch
                </p>
              </div>
            </a>

          </div>

          {/* TRUST INDICATORS */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-brand-muted">
            <span>✔ Experienced Specialists</span>
            <span>✔ Modern Diagnostic Equipment</span>
            <span>✔ Two Convenient Locations</span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/images/hero1.jpeg"
            alt="Specialist Eye Clinic in Ikeja and Surulere Lagos"
            className="rounded-3xl shadow-premium w-full object-cover"
          />

          {/* Accent Glow */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
}