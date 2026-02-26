export const metadata = {
  title: "Eye Care Services in Ikeja & Surulere Lagos | Just Vision Eye Center",
  description:
    "Explore our eye care services including cataract surgery, glaucoma treatment, comprehensive eye tests and pediatric eye care in Ikeja and Surulere Lagos.",
  keywords: [
    "Eye Care Services in Ikeja",
    "Eye Clinic Services Lagos",
    "Cataract Surgery Lagos",
    "Glaucoma Treatment Ikeja",
    "Comprehensive Eye Test Lagos",
  ],
};

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* BREADCRUMB */}
      <section className="pt-24 pb-6 bg-white">
        <div className="container text-sm text-brand-muted">
          <a href="/" className="hover:text-brand-primary">Home</a> /
          <span className="ml-1 text-brand-dark">
            Eye Care Services
          </span>
        </div>
      </section>

      {/* HERO */}
      <section className="pb-16 bg-gradient-to-br from-white to-brand-light">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Eye Care Services in Ikeja & Surulere
          </h1>

          <p className="text-lg max-w-3xl mx-auto">
            Just Vision Eye Center provides advanced ophthalmology and optometry
            services in Lagos including cataract surgery, glaucoma treatment,
            comprehensive eye exams and optical solutions.
          </p>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="section bg-white">
        <div className="container grid md:grid-cols-3 gap-8">

          <a
            href="/cataract-surgery-lagos"
            className="p-8 bg-brand-light rounded-2xl shadow-soft hover:shadow-premium transition"
          >
            <h3 className="text-2xl mb-4 font-semibold">
              Cataract Surgery
            </h3>
            <p className="mb-4">
              Advanced lens replacement surgery using modern technology.
            </p>
            <span className="text-brand-primary font-semibold">
              Learn More →
            </span>
          </a>

          <a
            href="/glaucoma-treatment-lagos"
            className="p-8 bg-brand-light rounded-2xl shadow-soft hover:shadow-premium transition"
          >
            <h3 className="text-2xl mb-4 font-semibold">
              Glaucoma Treatment
            </h3>
            <p className="mb-4">
              Comprehensive eye pressure management and long-term care.
            </p>
            <span className="text-brand-primary font-semibold">
              Learn More →
            </span>
          </a>

          <a
            href="/eye-test-ikeja"
            className="p-8 bg-brand-light rounded-2xl shadow-soft hover:shadow-premium transition"
          >
            <h3 className="text-2xl mb-4 font-semibold">
              Comprehensive Eye Test
            </h3>
            <p className="mb-4">
              Full vision screening, retina exam and glaucoma detection.
            </p>
            <span className="text-brand-primary font-semibold">
              Learn More →
            </span>
          </a>

        </div>
      </section>

      {/* COST GUIDE LINKS */}
      <section className="section bg-brand-light">
        <div className="container text-center max-w-4xl">

          <h2 className="text-3xl mb-6">
            Cost Guides
          </h2>

          <p className="mb-8">
            Learn more about the cost of our treatments in Lagos:
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="/cost-of-cataract-surgery-in-lagos"
              className="text-brand-primary font-semibold"
            >
              Cost of Cataract Surgery →
            </a>

            <a
              href="/cost-of-glaucoma-treatment-in-lagos"
              className="text-brand-primary font-semibold"
            >
              Cost of Glaucoma Treatment →
            </a>

          </div>

        </div>
      </section>

      {/* DOCTOR LINK BOOST */}
      <section className="section bg-white">
        <div className="container text-center max-w-4xl">

          <h2 className="text-3xl mb-6">
            Meet Our Specialist
          </h2>

          <p className="mb-6">
            All procedures are performed or supervised by{" "}
            <a
              href="/doctors/dr-clara-adekunle"
              className="text-brand-primary font-semibold"
            >
              Dr. Clara Adekunle
            </a>, Consultant Ophthalmologist in Lagos.
          </p>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">

          <h2 className="text-4xl font-semibold mb-6">
            Need Professional Eye Care in Lagos?
          </h2>

          <p className="mb-8 text-lg">
            Book an appointment at our Ikeja or Surulere branch today.
          </p>

          <a
            href="/appointment"
            className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
          >
            Book Appointment
          </a>

        </div>
      </section>

    </main>
  );
}