// app/glaucoma-treatment-lagos/page.js

export const metadata = {
  title: "Glaucoma Treatment in Lagos | Glaucoma Specialist in Ikeja & Surulere",
  description:
    "Advanced glaucoma treatment in Ikeja and Surulere, Lagos at Just Vision Eye Center. Early diagnosis, pressure control and long-term eye care by experienced ophthalmologists.",
  keywords: [
    "Glaucoma Treatment in Lagos",
    "Glaucoma Specialist Ikeja",
    "Glaucoma Treatment Surulere",
    "Eye Pressure Treatment Nigeria",
    "Best Glaucoma Doctor in Lagos",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is glaucoma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glaucoma is a group of eye conditions that damage the optic nerve, often caused by high eye pressure."
      }
    },
    {
      "@type": "Question",
      name: "Can glaucoma be cured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glaucoma cannot be cured, but early detection and proper treatment can prevent vision loss."
      }
    },
    {
      "@type": "Question",
      name: "How much does glaucoma treatment cost in Lagos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on the stage of glaucoma and treatment type. Contact Just Vision Eye Center for a personalized estimate."
      }
    }
  ]
};

export default function GlaucomaPage() {
  return (
    <main className="bg-white">

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Glaucoma Treatment in Ikeja & Surulere, Lagos
            </h1>

            <p className="text-lg mb-8 max-w-xl">
              Early diagnosis and advanced glaucoma management to protect your
              vision. Trust Just Vision Eye Center for long-term eye care in Lagos.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a href="/appointment" className="btn-primary">
                Book Glaucoma Consultation
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
              src="/glaucoma-treatment.jpg"
              alt="Glaucoma treatment in Ikeja Lagos"
              className="rounded-2xl shadow-premium"
            />
          </div>

        </div>
      </section>

      {/* COST INTERNAL LINK BOOST */}
      <section className="section bg-white">
        <div className="container max-w-4xl text-center">
          <p className="text-lg">
            Looking for pricing information? Visit our{" "}
            <a
              href="/cost-of-glaucoma-treatment-in-lagos"
              className="text-brand-primary font-semibold"
            >
              Cost of Glaucoma Treatment in Lagos guide
            </a>{" "}
            for a detailed breakdown.
          </p>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="section bg-white">
        <div className="container max-w-4xl text-center">

          <h2 className="text-4xl mb-6">
            What is Glaucoma?
          </h2>

          <p className="text-lg mb-8">
            Glaucoma is a silent vision-threatening disease that damages the
            optic nerve. It often develops without symptoms until vision loss
            becomes permanent.
          </p>

          <p>
            Early diagnosis through a{" "}
            <a href="/eye-test-ikeja" className="text-brand-primary font-semibold">
              comprehensive eye test in Ikeja
            </a>{" "}
            can help detect glaucoma before serious damage occurs.
          </p>

        </div>
      </section>

      {/* RISK SECTION */}
      <section className="section bg-brand-light">
        <div className="container max-w-4xl">

          <h2 className="text-4xl mb-10 text-center">
            Who is at Risk?
          </h2>

          <ul className="space-y-5 text-lg">
            <li>✔ Individuals over 40 years</li>
            <li>✔ Family history of glaucoma</li>
            <li>✔ High eye pressure</li>
            <li>✔ Diabetes or hypertension</li>
          </ul>

        </div>
      </section>

      {/* TREATMENT SECTION */}
      <section className="section bg-white">
        <div className="container grid md:grid-cols-3 gap-8 text-center">

          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-3">Medical Treatment</h3>
            <p>Prescription eye drops to reduce intraocular pressure.</p>
          </div>

          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-3">Laser Therapy</h3>
            <p>Advanced laser procedures to improve fluid drainage.</p>
          </div>

          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-3">Surgical Care</h3>
            <p>
              Modern glaucoma surgery performed by our{" "}
              <a href="/doctors/dr-jane-okafor" className="text-brand-primary">
                glaucoma specialists
              </a>.
            </p>
          </div>

        </div>
      </section>

      {/* STRONG CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">

          <h2 className="text-4xl font-semibold mb-6">
            Early Detection Saves Vision
          </h2>

          <p className="mb-8 text-lg">
            If you are at risk of glaucoma, schedule a comprehensive eye test today.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <a
              href="/appointment"
              className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
            >
              Book Eye Examination
            </a>

            <a
              href="/cost-of-glaucoma-treatment-in-lagos"
              className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-brand-primary transition"
            >
              View Treatment Cost
            </a>

          </div>

        </div>
      </section>

      {/* FAQ VISIBLE SECTION */}
      <section className="section bg-white">
        <div className="container max-w-4xl">

          <h2 className="text-4xl mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold mb-2">
                How much does glaucoma treatment cost in Lagos?
              </h3>
              <p>
                Visit our{" "}
                <a href="/cost-of-glaucoma-treatment-in-lagos" className="text-brand-primary font-semibold">
                  detailed glaucoma treatment cost guide
                </a>{" "}
                for more information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can glaucoma be cured?
              </h3>
              <p>
                It cannot be cured, but early treatment can prevent vision loss.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                How is glaucoma treated?
              </h3>
              <p>
                Treatment may include medications, laser therapy, or surgery.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}