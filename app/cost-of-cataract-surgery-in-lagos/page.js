// app/cost-of-cataract-surgery-in-lagos/page.js

export const metadata = {
  title: "Cost of Cataract Surgery in Lagos (2025 Guide)",
  description:
    "Learn the cost of cataract surgery in Lagos, Nigeria. See pricing factors, lens options and consultation details at Just Vision Eye Center in Ikeja & Surulere.",
  keywords: [
    "Cost of Cataract Surgery in Lagos",
    "Cataract Surgery Price Nigeria",
    "How much is cataract surgery in Lagos",
    "Affordable cataract surgery Ikeja",
    "Cataract surgery cost Surulere",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does cataract surgery cost in Lagos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on the type of intraocular lens, surgeon expertise and facility standards. Contact Just Vision Eye Center for an accurate quote."
      }
    },
    {
      "@type": "Question",
      name: "Is cataract surgery covered by HMO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some HMOs may partially cover cataract surgery. Confirm coverage with our clinic."
      }
    },
    {
      "@type": "Question",
      name: "What affects the cost of cataract surgery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Factors include lens type, surgical technology used and post-operative care."
      }
    }
  ]
};

export default function CataractCostPage() {
  return (
    <main className="bg-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* BREADCRUMB */}
      <section className="pt-24 pb-6 bg-white">
        <div className="container text-sm text-brand-muted">
          <a href="/" className="hover:text-brand-primary">Home</a> /
          <a href="/cataract-surgery-lagos" className="ml-1 hover:text-brand-primary">
            Cataract Surgery
          </a> /
          <span className="ml-1 text-brand-dark">
            Cost Guide
          </span>
        </div>
      </section>

      {/* HERO */}
      <section className="pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Cost of Cataract Surgery in Lagos
          </h1>

          <p className="text-lg mb-6">
            A complete guide to cataract surgery pricing in Ikeja and Surulere.
          </p>

          <a href="/appointment" className="btn-primary">
            Book Consultation
          </a>
        </div>
      </section>

      {/* PRICE GUIDE */}
      <section className="section bg-white">
        <div className="container max-w-4xl">

          <h2 className="text-4xl mb-6">
            How Much is Cataract Surgery in Lagos?
          </h2>

          <p className="mb-6 text-lg">
            The cost of cataract surgery in Lagos depends on:
          </p>

          <ul className="space-y-4 text-lg">
            <li>✔ Type of intraocular lens (standard or premium)</li>
            <li>✔ Surgical technology (phacoemulsification)</li>
            <li>✔ Surgeon experience</li>
            <li>✔ Pre- and post-operative care</li>
          </ul>

          <p className="mt-8">
            Learn more about the{" "}
            <a
              href="/cataract-surgery-lagos"
              className="text-brand-primary font-semibold"
            >
              cataract surgery procedure in Lagos
            </a>.
          </p>

        </div>
      </section>

      {/* LENS OPTIONS */}
      <section className="section bg-brand-light">
        <div className="container max-w-4xl">

          <h2 className="text-4xl mb-6 text-center">
            Types of Lens Implants
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-white rounded-2xl shadow-soft">
              <h3 className="font-semibold mb-3">Standard Monofocal Lens</h3>
              <p>Provides clear distance vision.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-soft">
              <h3 className="font-semibold mb-3">Premium Multifocal Lens</h3>
              <p>Corrects both near and distance vision.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-soft">
              <h3 className="font-semibold mb-3">Toric Lens</h3>
              <p>Designed for patients with astigmatism.</p>
            </div>

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
              href="/eye-test-ikeja"
              className="text-brand-primary font-semibold"
            >
              Comprehensive Eye Test →
            </a>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-brand-light">
        <div className="container max-w-4xl text-center">

          <h2 className="text-4xl mb-6">
            Why Choose Just Vision Eye Center?
          </h2>

          <p className="text-lg mb-6">
            We provide advanced cataract surgery in Ikeja and Surulere,
            performed by experienced ophthalmologists using modern equipment.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">

          <h2 className="text-4xl font-semibold mb-6">
            Get a Personalized Cost Estimate
          </h2>

          <p className="mb-8 text-lg">
            Schedule a consultation to receive accurate pricing information.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/appointment"
              className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
            >
              Book Consultation
            </a>

            <a
              href="tel:+2348031234567"
              className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-brand-primary transition"
            >
              Call Now
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}