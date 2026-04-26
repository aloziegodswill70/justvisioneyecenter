export const metadata = {
  title: "Google Map Eye Clinic in Lagos | Just Vision Eye Centre",
  description:
    "Find Just Vision Eye Centre on Google Map. Visit our Ikeja and Surulere eye clinic branches for eye tests, glaucoma screening, digital glasses and optical care.",
  keywords: [
    "Google Map Eye Clinic in Lagos",
    "Eye Clinic on Google Map Lagos",
    "Eye Clinic Ikeja Google Map",
    "Eye Clinic Surulere Google Map",
    "Eye Test Near Me Lagos",
  ],
};

export default function GoogleMapEyeClinicPage() {
  return (
    <main className="bg-white">

      <section className="pt-28 pb-6 bg-white">
        <div className="container text-sm text-brand-muted">
          <a href="/" className="hover:text-brand-primary">Home</a> /
          <span className="ml-1 text-brand-dark">
            Google Map Eye Clinic in Lagos
          </span>
        </div>
      </section>

      <section className="pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Google Map Eye Clinic in Lagos
          </h1>

          <p className="text-lg text-brand-muted leading-relaxed mb-8">
            Looking for an eye clinic on Google Map in Lagos? Just Vision Eye
            Centre has convenient branches in Ikeja and Surulere for professional
            eye examinations, glaucoma screening, digital glasses and optical care.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=7+Odunuga+Street+Off+Opebi+Link+Bridge+Ikeja+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
            >
              Directions to Ikeja
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=7+Adeniran+Ogunsanya+Street+Surulere+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-primary text-brand-primary px-8 py-4 rounded-2xl font-semibold hover:bg-brand-primary hover:text-white transition"
            >
              Directions to Surulere
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid md:grid-cols-2 gap-10">

          <div className="bg-brand-light p-8 rounded-3xl shadow-soft">
            <h2 className="text-3xl font-semibold mb-4">
              Ikeja Eye Clinic Branch
            </h2>

            <p className="text-brand-muted mb-6 leading-relaxed">
              7, Odunuga Street,<br />
              Off Opebi Link Bridge,<br />
              Ikeja, Lagos State.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=7+Odunuga+Street+Off+Opebi+Link+Bridge+Ikeja+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary font-semibold"
            >
              Open Ikeja Branch on Google Map →
            </a>
          </div>

          <div className="bg-brand-light p-8 rounded-3xl shadow-soft">
            <h2 className="text-3xl font-semibold mb-4">
              Surulere Eye Clinic Branch
            </h2>

            <p className="text-brand-muted mb-6 leading-relaxed">
              7, Adeniran Ogunsanya Street,<br />
              Surulere,<br />
              Lagos State.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=7+Adeniran+Ogunsanya+Street+Surulere+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary font-semibold"
            >
              Open Surulere Branch on Google Map →
            </a>
          </div>

        </div>
      </section>

      <section className="section bg-brand-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-4xl font-bold mb-4">
              View Our Lagos Eye Clinic on Map
            </h2>

            <p className="text-brand-muted leading-relaxed">
              Use the embedded Google Map below to find the nearest Just Vision
              Eye Centre branch in Lagos.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-premium border border-gray-100">
            <iframe
              title="Just Vision Eye Centre Google Map Lagos"
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

      <section className="section bg-white">
        <div className="container max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Eye Care Services Available at Our Lagos Branches
          </h2>

          <p className="text-lg text-brand-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            Patients visit Just Vision Eye Centre for complete eye checks,
            glaucoma monitoring, retina screening, prescription updates,
            contact lenses, digital glasses and premium optical frames.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <a
              href="/eye-test-ikeja"
              className="p-8 bg-brand-light rounded-2xl shadow-soft hover:shadow-premium transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                Comprehensive Eye Test
              </h3>
              <p className="text-sm text-brand-muted">
                Vision testing, eye pressure checks, retina examination and
                prescription updates.
              </p>
            </a>

            <a
              href="/glaucoma-treatment-lagos"
              className="p-8 bg-brand-light rounded-2xl shadow-soft hover:shadow-premium transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                Glaucoma Management
              </h3>
              <p className="text-sm text-brand-muted">
                Early detection and continuous monitoring to protect long-term
                vision.
              </p>
            </a>

            <a
              href="/services"
              className="p-8 bg-brand-light rounded-2xl shadow-soft hover:shadow-premium transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                Optical & Digital Glasses
              </h3>
              <p className="text-sm text-brand-muted">
                Anti-blue light glasses, UV protection lenses, premium frames
                and contact lenses.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-semibold mb-6">
            Need Directions to an Eye Clinic in Lagos?
          </h2>

          <p className="mb-8 text-lg">
            Choose your preferred branch and book your appointment today.
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