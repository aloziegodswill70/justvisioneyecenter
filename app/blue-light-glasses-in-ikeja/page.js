export const metadata = {
  title: "Blue Light Glasses in Ikeja Lagos | Just Vision Eye Centre",
  description:
    "Get anti-blue light glasses in Ikeja Lagos at Just Vision Eye Centre. Protect your eyes from screen strain with digital glasses, UV protection lenses and premium frames.",
  keywords: [
    "Blue Light Glasses in Ikeja",
    "Anti Blue Light Glasses Lagos",
    "Digital Glasses Ikeja",
    "Computer Glasses Lagos",
    "Eye Clinic Ikeja Glasses",
    "UV Protection Glasses Lagos",
  ],
};

export default function BlueLightGlassesIkejaPage() {
  return (
    <main className="bg-white">

      {/* BREADCRUMB */}
      <section className="pt-28 pb-6 bg-white">
        <div className="container text-sm text-brand-muted">
          <a href="/" className="hover:text-brand-primary">Home</a> /
          <span className="ml-1 text-brand-dark">
            Blue Light Glasses in Ikeja
          </span>
        </div>
      </section>

      {/* HERO */}
      <section className="pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block mb-5 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">
              Digital Eye Protection
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Blue Light Glasses in Ikeja Lagos
            </h1>

            <p className="text-lg text-brand-muted mb-8 leading-relaxed">
              Protect your eyes from digital screen strain with professionally
              prescribed anti-blue light glasses at Just Vision Eye Centre in Ikeja.
              Ideal for laptop users, phone users, office workers and students.
            </p>

            <a
              href="https://wa.me/2348165557988?text=Hello%20Just%20Vision%20Eye%20Centre%20(Ikeja),%0A%0AI%20would%20like%20to%20get%20blue%20light%20glasses.%0A%0AThank%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-primary text-white px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
            >
              Order via WhatsApp
            </a>
          </div>

          <div className="relative">
            <img
              src="/images/hero1.jpeg"
              alt="Blue light glasses in Ikeja Lagos"
              className="rounded-3xl shadow-premium w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="section bg-white">
        <div className="container max-w-5xl text-center">

          <h2 className="text-4xl font-bold mb-6">
            Why You Need Blue Light Glasses
          </h2>

          <p className="text-lg text-brand-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            Long hours on phones, laptops and digital screens expose your eyes
            to blue light which can cause discomfort and visual fatigue.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
              <h3 className="text-xl font-semibold mb-3">
                Reduce Eye Strain
              </h3>
              <p className="text-brand-muted text-sm">
                Helps reduce tired eyes, headaches and discomfort from screen use.
              </p>
            </div>

            <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
              <h3 className="text-xl font-semibold mb-3">
                Better Sleep
              </h3>
              <p className="text-brand-muted text-sm">
                Filters blue light that can disrupt sleep patterns at night.
              </p>
            </div>

            <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
              <h3 className="text-xl font-semibold mb-3">
                Clear Vision
              </h3>
              <p className="text-brand-muted text-sm">
                Improves comfort and clarity for prolonged screen work.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section bg-brand-light">
        <div className="container">

          <h2 className="text-4xl font-bold mb-10 text-center">
            Our Optical Solutions in Ikeja
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <h3 className="text-xl font-semibold mb-3">
                Anti-Blue Light Glasses
              </h3>
              <p className="text-brand-muted text-sm">
                Special lenses designed to block harmful blue light from screens.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <h3 className="text-xl font-semibold mb-3">
                Digital Glasses
              </h3>
              <p className="text-brand-muted text-sm">
                Professionally prescribed glasses for heavy device users.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <h3 className="text-xl font-semibold mb-3">
                UV Protection Glasses
              </h3>
              <p className="text-brand-muted text-sm">
                Protect your eyes from sunlight and outdoor UV exposure.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* LOCATION */}
      <section className="section bg-white">
        <div className="container grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Visit Our Ikeja Branch
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
              Get Directions →
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-premium">
            <iframe
              title="Ikeja Eye Clinic Map"
              src="https://www.google.com/maps?q=7+Odunuga+Street+Ikeja+Lagos&output=embed"
              width="100%"
              height="350"
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">

          <h2 className="text-4xl font-semibold mb-6">
            Get Your Blue Light Glasses Today
          </h2>

          <p className="mb-8 text-lg">
            Visit our Ikeja clinic or chat with us to order your glasses.
          </p>

          <a
            href="https://wa.me/2348165557988?text=Hello%20Just%20Vision%20Eye%20Centre%20(Ikeja),%0A%0AI%20want%20blue%20light%20glasses.%0A%0AThank%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
          >
            Chat on WhatsApp
          </a>

        </div>
      </section>

    </main>
  );
}