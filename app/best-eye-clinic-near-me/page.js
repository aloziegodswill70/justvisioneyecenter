export const metadata = {
  title: "Best Eye Clinic Near Me in Lagos | Just Vision Eye Centre",
  description:
    "Looking for the best eye clinic near you in Lagos? Visit Just Vision Eye Centre in Ikeja and Surulere for eye tests, glaucoma management, digital glasses, optical care and NHIS/HMO services.",
  keywords: [
    "Best Eye Clinic Near Me",
    "Eye Clinic Near Me Lagos",
    "Eye Clinic in Ikeja",
    "Eye Clinic in Surulere",
    "Eye Test Near Me",
    "Optometrist Near Me Lagos",
    "Glaucoma Screening Lagos",
  ],
};

export default function BestEyeClinicNearMePage() {
  return (
    <main className="bg-white">

      {/* BREADCRUMB */}
      <section className="pt-28 pb-6 bg-white">
        <div className="container text-sm text-brand-muted">
          <a href="/" className="hover:text-brand-primary">Home</a> /
          <span className="ml-1 text-brand-dark">
            Best Eye Clinic Near Me
          </span>
        </div>
      </section>

      {/* HERO */}
      <section className="pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block mb-5 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">
              Eye Clinic Near You in Lagos
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Best Eye Clinic Near Me in Lagos
            </h1>

            <p className="text-lg text-brand-muted mb-8 leading-relaxed">
              If you are searching for a trusted eye clinic near you in Lagos,
              Just Vision Eye Centre provides professional eye examinations,
              glaucoma screening, retina checks, digital glasses, anti-blue light
              glasses and premium optical care in Ikeja and Surulere.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              <a
                href="https://wa.me/2348165557988?text=Hello%20Just%20Vision%20Eye%20Centre%20(Ikeja),%0A%0AI%20would%20like%20to%20book%20an%20eye%20appointment.%0A%0AService%20Required:%20%0APreferred%20Date:%20%0A%0AThank%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-white px-6 py-4 rounded-2xl font-semibold text-center shadow-premium hover:scale-105 transition"
              >
                Book Ikeja Branch
              </a>

              <a
                href="https://wa.me/2348189440752?text=Hello%20Just%20Vision%20Eye%20Centre%20(Surulere),%0A%0AI%20would%20like%20to%20book%20an%20eye%20appointment.%0A%0AService%20Required:%20%0APreferred%20Date:%20%0A%0AThank%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-primary text-brand-primary px-6 py-4 rounded-2xl font-semibold text-center hover:bg-brand-primary hover:text-white transition"
              >
                Book Surulere Branch
              </a>

            </div>
          </div>

          <div className="relative">
            <img
              src="/images/hero1.jpeg"
              alt="Best eye clinic near me in Lagos"
              className="rounded-3xl shadow-premium w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-white">
        <div className="container max-w-5xl text-center">

          <h2 className="text-4xl font-bold mb-6">
            Why Choose Just Vision Eye Centre?
          </h2>

          <p className="text-lg text-brand-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            We are focused on accurate diagnosis, patient comfort and long-term
            vision protection. Our clinics are equipped for detailed eye checks
            and optical care for adults, children, screen users and patients at
            risk of glaucoma or retina disease.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
              <h3 className="text-xl font-semibold mb-3">
                Comprehensive Eye Tests
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Vision testing, refraction, eye pressure checks, retina
                examination and prescription updates.
              </p>
            </div>

            <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
              <h3 className="text-xl font-semibold mb-3">
                Glaucoma Screening
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Early glaucoma detection and monitoring to help protect vision
                before serious damage occurs.
              </p>
            </div>

            <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
              <h3 className="text-xl font-semibold mb-3">
                Optical & Digital Glasses
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Premium frames, anti-blue light glasses, UV protection lenses
                and digital glasses for phone and laptop users.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* LOCATIONS */}
      <section className="section bg-brand-light">
        <div className="container">

          <h2 className="text-4xl font-bold mb-10 text-center">
            Visit the Branch Nearest to You
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* IKEJA */}
            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <h3 className="text-2xl font-semibold mb-4">
                Ikeja Branch
              </h3>

              <p className="text-brand-muted mb-5 leading-relaxed">
                7, Odunuga Street,<br />
                Off Opebi Link Bridge,<br />
                Ikeja, Lagos State.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=7+Odunuga+Street+Off+Opebi+Link+Bridge+Ikeja+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary font-semibold"
                >
                  Get Directions →
                </a>

                <a
                  href="/best-eye-clinic-in-ikeja"
                  className="text-brand-primary font-semibold"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* SURULERE */}
            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <h3 className="text-2xl font-semibold mb-4">
                Surulere Branch
              </h3>

              <p className="text-brand-muted mb-5 leading-relaxed">
                7, Adeniran Ogunsanya Street,<br />
                Surulere,<br />
                Lagos State.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=7+Adeniran+Ogunsanya+Street+Surulere+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary font-semibold"
                >
                  Get Directions →
                </a>

                <a
                  href="/best-eye-clinic-near-surulere"
                  className="text-brand-primary font-semibold"
                >
                  Learn More →
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* MAP EMBED */}
      <section className="section bg-white">
        <div className="container">

          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-4xl font-bold mb-4">
              Find Just Vision Eye Centre on Google Map
            </h2>

            <p className="text-brand-muted leading-relaxed">
              Use the map below to find our eye clinic locations in Lagos.
              You can also contact us directly to choose the most convenient
              branch for your appointment.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-premium border border-gray-100">
            <iframe
              title="Just Vision Eye Centre Lagos Map"
              src="https://www.google.com/maps?q=Just%20Vision%20Eye%20Centre%20Lagos&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="section bg-brand-light">
        <div className="container max-w-4xl text-center">

          <h2 className="text-3xl font-bold mb-6">
            Popular Eye Care Searches
          </h2>

          <div className="flex flex-wrap justify-center gap-5">

            <a href="/eye-test-ikeja" className="text-brand-primary font-semibold">
              Eye Test in Ikeja →
            </a>

            <a href="/glaucoma-treatment-lagos" className="text-brand-primary font-semibold">
              Glaucoma Treatment Lagos →
            </a>

            <a href="/best-optometrist-in-lagos" className="text-brand-primary font-semibold">
              Best Optometrist in Lagos →
            </a>

            <a href="/services" className="text-brand-primary font-semibold">
              Eye Care Services →
            </a>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">

          <h2 className="text-4xl font-semibold mb-6">
            Need an Eye Clinic Near You?
          </h2>

          <p className="mb-8 text-lg">
            Book an appointment at our Ikeja or Surulere branch today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="https://wa.me/2348165557988?text=Hello%20Just%20Vision%20Eye%20Centre%20(Ikeja),%0A%0AI%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
            >
              Book Ikeja
            </a>

            <a
              href="https://wa.me/2348189440752?text=Hello%20Just%20Vision%20Eye%20Centre%20(Surulere),%0A%0AI%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-brand-primary transition"
            >
              Book Surulere
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}