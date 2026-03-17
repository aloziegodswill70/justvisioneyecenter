export const metadata = {
  title: "Best Optometrist in Lagos | Eye Test & Vision Care Experts",
  description:
    "Searching for the best optometrist in Lagos? Just Vision Eye Center offers comprehensive eye tests, prescription glasses, digital lenses and contact lenses in Ikeja and Surulere.",
  keywords: [
    "Best Optometrist in Lagos",
    "Optometrist in Ikeja",
    "Eye Test in Lagos",
    "Prescription Glasses Lagos",
    "Contact Lenses Lagos",
  ],
};

export default function OptometristPage() {
  return (
    <main className="bg-white">

      {/* BREADCRUMB */}
      <section className="pt-24 pb-6 bg-white">
        <div className="container text-sm text-brand-muted">
          <a href="/" className="hover:text-brand-primary">Home</a> /
          <span className="ml-1 text-brand-dark">
            Best Optometrist in Lagos
          </span>
        </div>
      </section>

      {/* HERO */}
      <section className="pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container max-w-4xl">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Best Optometrist in Lagos
          </h1>

          <p className="text-lg mb-8">
            Our experienced optometrists provide accurate vision testing,
            prescription updates and personalized eye care solutions in
            Ikeja and Surulere, Lagos.
          </p>

          <a href="/appointment" className="btn-primary">
            Book Eye Test
          </a>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section bg-white">
        <div className="container max-w-4xl">

          <h2 className="text-4xl mb-6">
            Comprehensive Optometry Services in Lagos
          </h2>

          <p className="mb-8 text-lg">
            Our optometrists provide full vision assessment and eye health
            screening including:
          </p>

          <ul className="space-y-4 text-lg">
            <li>
              ✔{" "}
              <a
                href="/eye-test-ikeja"
                className="text-brand-primary font-semibold"
              >
                Comprehensive Eye Test
              </a>
            </li>

            <li>
              ✔ Digital eye strain evaluation
            </li>

            <li>
              ✔ Prescription glasses & frames
            </li>

            <li>
              ✔ Contact lens fitting
            </li>

            <li>
              ✔ Glaucoma screening
            </li>
          </ul>

        </div>
      </section>

      {/* OPTICAL SHOP LINKING */}
      <section className="section bg-brand-light">
        <div className="container max-w-4xl">

          <h2 className="text-4xl mb-6 text-center">
            Digital & Anti-Blue Light Glasses
          </h2>

          <p className="text-lg text-center mb-6">
            Protect your eyes from screen-related strain with our premium
            digital and anti-blue light lenses.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <span>✔ Anti-blue light glasses</span>
            <span>✔ UV protection lenses</span>
            <span>✔ Digital screen glasses</span>
            <span>✔ Contact lenses</span>
          </div>

        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section bg-white">
        <div className="container max-w-4xl text-center">

          <h2 className="text-3xl mb-6">
            Related Eye Care Services
          </h2>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="/glaucoma-treatment-lagos"
              className="text-brand-primary font-semibold"
            >
              Glaucoma Treatment →
            </a>

            <a
              href="/cataract-surgery-lagos"
              className="text-brand-primary font-semibold"
            >
              Cataract Surgery →
            </a>

            <a
              href="/best-eye-clinic-in-ikeja"
              className="text-brand-primary font-semibold"
            >
              Eye Clinic in Ikeja →
            </a>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">

          <h2 className="text-4xl font-semibold mb-6">
            Need an Optometrist in Lagos?
          </h2>

          <p className="mb-8 text-lg">
            Visit Just Vision Eye Centre for professional vision care.
          </p>

          <a
            href="/appointment"
            className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
          >
            Schedule Eye Examination
          </a>

        </div>
      </section>

    </main>
  );
}