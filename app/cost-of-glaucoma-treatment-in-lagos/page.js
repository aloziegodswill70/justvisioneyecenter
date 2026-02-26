// app/cost-of-glaucoma-treatment-in-lagos/page.js

export const metadata = {
  title: "Cost of Glaucoma Treatment in Lagos (2025 Guide)",
  description:
    "Learn the cost of glaucoma treatment in Lagos, Nigeria. See what affects pricing, medication, laser therapy and surgical options at Just Vision Eye Center in Ikeja & Surulere.",
  keywords: [
    "Cost of Glaucoma Treatment in Lagos",
    "Glaucoma Treatment Price Nigeria",
    "How much is glaucoma treatment in Lagos",
    "Glaucoma Specialist Ikeja",
    "Glaucoma Treatment Surulere",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does glaucoma treatment cost in Lagos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on the stage of glaucoma and treatment type such as medication, laser therapy or surgery."
      }
    },
    {
      "@type": "Question",
      name: "Is glaucoma treatment lifelong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, glaucoma management is long-term to prevent vision loss."
      }
    },
    {
      "@type": "Question",
      name: "Is glaucoma treatment covered by HMO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some HMOs may partially cover consultation and medication. Confirm coverage with the clinic."
      }
    }
  ]
};

export default function GlaucomaCostPage() {
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
          <a href="/glaucoma-treatment-lagos" className="ml-1 hover:text-brand-primary">
            Glaucoma Treatment
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
            Cost of Glaucoma Treatment in Lagos
          </h1>

          <p className="text-lg mb-6">
            A complete guide to glaucoma management costs in Ikeja and Surulere.
          </p>

          <a href="/appointment" className="btn-primary">
            Book Consultation
          </a>
        </div>
      </section>

      {/* PRICE OVERVIEW */}
      <section className="section bg-white">
        <div className="container max-w-4xl">

          <h2 className="text-4xl mb-6">
            What Affects the Cost of Glaucoma Treatment?
          </h2>

          <ul className="space-y-4 text-lg">
            <li>✔ Stage of glaucoma</li>
            <li>✔ Diagnostic tests required</li>
            <li>✔ Type of treatment (medication, laser or surgery)</li>
            <li>✔ Long-term follow-up care</li>
          </ul>

          <p className="mt-8">
            Learn more about our{" "}
            <a
              href="/glaucoma-treatment-lagos"
              className="text-brand-primary font-semibold"
            >
              glaucoma treatment services in Lagos
            </a>.
          </p>

        </div>
      </section>

      {/* TREATMENT TYPES */}
      <section className="section bg-brand-light">
        <div className="container max-w-5xl">

          <h2 className="text-4xl mb-10 text-center">
            Glaucoma Treatment Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-white rounded-2xl shadow-soft">
              <h3 className="font-semibold mb-3">Medication</h3>
              <p>Prescription eye drops to control intraocular pressure.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-soft">
              <h3 className="font-semibold mb-3">Laser Therapy</h3>
              <p>Improves fluid drainage to reduce eye pressure.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-soft">
              <h3 className="font-semibold mb-3">Surgical Treatment</h3>
              <p>Advanced surgical procedures for severe glaucoma cases.</p>
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
              href="/cataract-surgery-lagos"
              className="text-brand-primary font-semibold"
            >
              Cataract Surgery →
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

      {/* LONG-TERM MANAGEMENT */}
      <section className="section bg-brand-light">
        <div className="container max-w-4xl text-center">

          <h2 className="text-4xl mb-6">
            Glaucoma Requires Ongoing Monitoring
          </h2>

          <p className="text-lg mb-6">
            Glaucoma is a chronic condition. Early detection through regular
            eye examinations can prevent irreversible vision loss.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">

          <h2 className="text-4xl font-semibold mb-6">
            Get a Personalized Glaucoma Treatment Plan
          </h2>

          <p className="mb-8 text-lg">
            Book a consultation at our Ikeja or Surulere branch.
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