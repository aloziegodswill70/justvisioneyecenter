export default function HeroSection() {
  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-24 bg-gradient-to-br from-white to-brand-light">
      <div className="container grid md:grid-cols-2 gap-14 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Professional Badge */}
          <div className="mb-6">
            <span className="px-4 py-2 bg-brand-primary/10 text-brand-primary text-sm rounded-full font-medium">
              Trusted Eye Clinic in Lagos
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-6">
            Comprehensive & Specialist <br />
            <span className="text-brand-primary">
              Eye Care
            </span>
            <br />
            in Ikeja & Surulere
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-brand-muted mb-8 md:mb-10 max-w-xl leading-relaxed">
            Welcome to Just Vision Eye Center. We provide advanced cataract surgery,
            precision glaucoma management, detailed eye examinations and modern
            optical care — delivered with professionalism and compassion.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-8">

            {/* WhatsApp Booking Button */}
            <a
              href="https://wa.me/2348033030008?text=Hello%20Just%20Vision%20Eye%20Center,%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0APreferred%20Branch:%20%0AService%20Required:%20%0APreferred%20Date:%20%0A%0AThank%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-brand-primary text-white px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition-all duration-300"
            >
              Book Appointment
            </a>

            {/* Call Button */}
            <a
              href="tel:+2348033030008"
              className="w-full sm:w-auto text-center border border-brand-primary text-brand-primary px-8 py-4 rounded-2xl font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300"
            >
              Call
            </a>

          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-brand-muted">
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
            className="rounded-3xl shadow-premium"
          />

          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
}