export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white to-brand-light">
      <div className="container grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Eye Clinic in Ikeja & Surulere, Lagos
          </h1>

          <p className="text-lg mb-8 max-w-xl">
            Advanced cataract surgery, glaucoma treatment, eye tests,
            digital glasses and contact lenses.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="/appointment" className="btn-primary">
              Book Appointment
            </a>
            <a
              href="tel:+2348031234567"
              className="border border-brand-primary text-brand-primary px-6 py-3 rounded-2xl hover:bg-brand-primary hover:text-white transition"
            >
              Call Now
            </a>
          </div>
        </div>

        <div>
          <img
            src="/hero-eye-clinic.jpg"
            alt="Best Eye Clinic in Lagos"
            className="rounded-2xl shadow-premium"
          />
        </div>

      </div>
    </section>
  );
}