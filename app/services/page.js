export const metadata = {
  title: "Eye Care Services in Ikeja & Surulere Lagos | Just Vision Eye Center",
  description:
    "Explore our eye care services including glaucoma treatment, comprehensive eye tests, digital glasses and optical solutions in Ikeja and Surulere Lagos.",
  keywords: [
    "Eye Care Services in Ikeja",
    "Eye Clinic Services Lagos",
    "Glaucoma Treatment Ikeja",
    "Comprehensive Eye Test Lagos",
    "Optical Shop Lagos",
    "Digital Glasses Nigeria",
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
            Just Vision Eye Center provides professional eye care services in Lagos
            including glaucoma management, comprehensive eye examinations,
            digital glasses and premium optical solutions.
          </p>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="section bg-white">
        <div className="container grid md:grid-cols-3 gap-8">

          {/* OPTICAL */}
          <a
            href="/services"
            className="p-8 bg-brand-light rounded-2xl shadow-soft hover:shadow-premium transition"
          >
            <h3 className="text-2xl mb-4 font-semibold">
              Optical & Digital Glasses
            </h3>
            <p className="mb-4">
              Premium frames, anti-blue light lenses and UV protection glasses
              designed for laptops, phones and outdoor use.
            </p>
            <span className="text-brand-primary font-semibold">
              Explore Optical Shop →
            </span>
          </a>

          {/* GLAUCOMA */}
          <a
            href="/glaucoma-treatment-lagos"
            className="p-8 bg-brand-light rounded-2xl shadow-soft hover:shadow-premium transition"
          >
            <h3 className="text-2xl mb-4 font-semibold">
              Glaucoma Management
            </h3>
            <p className="mb-4">
              Early detection and management of glaucoma through eye pressure
              testing and optic nerve evaluation to prevent vision loss.
            </p>
            <span className="text-brand-primary font-semibold">
              Learn More →
            </span>
          </a>

          {/* EYE TEST */}
          <a
            href="/eye-test-ikeja"
            className="p-8 bg-brand-light rounded-2xl shadow-soft hover:shadow-premium transition"
          >
            <h3 className="text-2xl mb-4 font-semibold">
              Comprehensive Eye Test
            </h3>
            <p className="mb-4">
              Full vision screening including refraction, retina examination,
              glaucoma screening and prescription updates.
            </p>
            <span className="text-brand-primary font-semibold">
              Book Eye Test →
            </span>
          </a>

        </div>
      </section>

      {/* COST GUIDE LINKS */}
      <section className="section bg-brand-light">
        <div className="container text-center max-w-4xl">

          <h2 className="text-3xl mb-6">
            Cost Guide
          </h2>

          <p className="mb-8">
            Learn more about glaucoma treatment pricing in Lagos:
          </p>

          <div className="flex justify-center">

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
            Our services are provided by{" "}
            <a
              href="/doctors/dr-clara-adekunle"
              className="text-brand-primary font-semibold"
            >
              Dr. Clara Adekunle
            </a>, an experienced eye care specialist in Lagos.
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

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="https://wa.me/2348165557988?text=Hello%20Just%20Vision%20Eye%20Center%20(Ikeja),%0A%0AI%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
            >
              Book Ikeja Appointment
            </a>

            <a
              href="https://wa.me/2348189440752?text=Hello%20Just%20Vision%20Eye%20Center%20(Surulere),%0A%0AI%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-brand-primary transition"
            >
              Book Surulere Appointment
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}