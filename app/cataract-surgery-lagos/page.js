// app/cataract-surgery-lagos/page.js

export const metadata = {
  title: "Cataract Surgery in Lagos | Best Cataract Surgeon in Ikeja",
  description:
    "Affordable and advanced cataract surgery in Ikeja and Surulere, Lagos at Just Vision Eye Center. Modern lens implants and expert ophthalmologists. Book appointment today.",
  keywords: [
    "Cataract Surgery in Lagos",
    "Cataract Surgery Ikeja",
    "Cataract Surgery Surulere",
    "Cost of Cataract Surgery in Lagos",
    "Best Cataract Surgeon in Nigeria",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the cost of cataract surgery in Lagos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost of cataract surgery in Lagos depends on the type of intraocular lens used and patient condition. Contact Just Vision Eye Center for accurate pricing."
      }
    },
    {
      "@type": "Question",
      name: "Is cataract surgery safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, modern cataract surgery is safe and effective when performed by an experienced ophthalmologist."
      }
    },
    {
      "@type": "Question",
      name: "How long does cataract surgery take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cataract surgery usually takes about 15 to 30 minutes and is performed as a day procedure."
      }
    }
  ]
};

export default function CataractPage() {
  return (
    <main className="bg-white">

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Advanced Cataract Surgery in Ikeja & Surulere, Lagos
            </h1>

            <p className="text-lg mb-8 max-w-xl">
              Restore clear vision with modern cataract surgery performed by
              experienced ophthalmologists at Just Vision Eye Center.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a href="/appointment" className="btn-primary">
                Book Surgery Consultation
              </a>

              <a
                href="tel:+2348031234567"
                className="border border-brand-primary text-brand-primary px-6 py-3 rounded-2xl hover:bg-brand-primary hover:text-white transition"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="/cataract-surgery.jpg"
              alt="Cataract surgery in Ikeja Lagos"
              className="rounded-2xl shadow-premium"
            />
          </div>

        </div>
      </section>

      {/* INTERNAL LINK BOOST */}
      <section className="section bg-white">
        <div className="container max-w-4xl text-center">
          <p className="text-lg">
            Looking for pricing details? Visit our{" "}
            <a
              href="/cost-of-cataract-surgery-in-lagos"
              className="text-brand-primary font-semibold"
            >
              Cost of Cataract Surgery in Lagos guide
            </a>{" "}
            for a complete breakdown.
          </p>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="section bg-white">
        <div className="container grid md:grid-cols-3 gap-8 text-center">

          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-3">Modern Technology</h3>
            <p>Advanced phacoemulsification and premium intraocular lenses.</p>
          </div>

          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-3">Experienced Surgeons</h3>
            <p>
              Skilled ophthalmologists with years of surgical expertise. Meet our{" "}
              <a href="/doctors/dr-jane-okafor" className="text-brand-primary">
                specialist doctors
              </a>.
            </p>
          </div>

          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-3">Fast Recovery</h3>
            <p>Safe outpatient procedure with minimal downtime.</p>
          </div>

        </div>
      </section>

      {/* ABOUT CATARACT */}
      <section className="section bg-brand-light">
        <div className="container max-w-4xl">

          <h2 className="text-4xl mb-6 text-center">
            What is Cataract?
          </h2>

          <p className="text-lg text-center mb-10">
            Cataract is a clouding of the natural lens of the eye that causes
            blurred vision, glare and difficulty seeing clearly. It is common
            with aging but can be safely treated with surgery.
          </p>

          <p className="text-center">
            Early detection through a{" "}
            <a href="/eye-test-ikeja" className="text-brand-primary font-semibold">
              comprehensive eye test in Ikeja
            </a>{" "}
            can help determine the right time for surgery.
          </p>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-white">
        <div className="container max-w-4xl">

          <h2 className="text-4xl mb-10 text-center">
            Why Choose Just Vision Eye Center?
          </h2>

          <ul className="space-y-6 text-lg">
            <li>✔ Located in Ikeja and accessible from Surulere</li>
            <li>✔ Premium intraocular lens options</li>
            <li>✔ Comprehensive pre-surgery assessment</li>
            <li>✔ Personalized post-operative care</li>
          </ul>

        </div>
      </section>

      {/* STRONG CTA SECTION */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-semibold mb-6">
            Don’t Let Cataract Affect Your Vision
          </h2>

          <p className="mb-8 text-lg">
            Schedule your cataract surgery consultation in Lagos today.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/appointment"
              className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
            >
              Book Appointment Now
            </a>

            <a
              href="/cost-of-cataract-surgery-in-lagos"
              className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-brand-primary transition"
            >
              View Cost Guide
            </a>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section bg-white">
        <div className="container max-w-4xl">

          <h2 className="text-4xl mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold mb-2">
                What is the cost of cataract surgery in Lagos?
              </h3>
              <p>
                Visit our{" "}
                <a href="/cost-of-cataract-surgery-in-lagos" className="text-brand-primary font-semibold">
                  detailed cost guide
                </a>{" "}
                for a complete pricing breakdown.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Is cataract surgery safe?
              </h3>
              <p>
                Yes. Modern cataract surgery is one of the safest procedures when
                performed by experienced ophthalmologists.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                How long does the procedure take?
              </h3>
              <p>
                The surgery typically takes 15–30 minutes and is performed as a day procedure.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}