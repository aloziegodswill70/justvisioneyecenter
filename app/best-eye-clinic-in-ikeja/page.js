// app/glaucoma-treatment-lagos/page.js

export const metadata = {
  title: "Glaucoma Treatment in Lagos | Glaucoma Specialist in Ikeja & Surulere",
  description:
    "Advanced glaucoma treatment in Ikeja and Surulere, Lagos at Just Vision Eye Center. Early diagnosis, eye pressure control and long-term glaucoma management.",
  keywords: [
    "Glaucoma Treatment in Lagos",
    "Glaucoma Specialist Ikeja",
    "Glaucoma Treatment Surulere",
    "Eye Pressure Treatment Nigeria",
    "Cost of Glaucoma Treatment in Lagos",
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
        text: "The cost depends on the stage of glaucoma and treatment type. Visit our cost guide for detailed pricing information."
      }
    }
  ]
};

export default function GlaucomaPage() {
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
          <span className="ml-1 text-brand-dark">Glaucoma Treatment</span>
        </div>
      </section>

      {/* HERO */}
      <section className="pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Glaucoma Treatment in Ikeja & Surulere, Lagos
            </h1>

            <p className="text-lg mb-8 max-w-xl">
              Comprehensive glaucoma management including diagnosis,
              eye pressure monitoring, medication, laser therapy and surgery.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a href="/appointment" className="btn-primary">
                Book Glaucoma Consultation
              </a>

              <a
                href="/cost-of-glaucoma-treatment-in-lagos"
                className="border border-brand-primary text-brand-primary px-6 py-3 rounded-2xl hover:bg-brand-primary hover:text-white transition"
              >
                View Treatment Cost
              </a>
            </div>
          </div>

          <div>
            <img
              src="/glaucoma-treatment.jpg"
              alt="Glaucoma treatment in Lagos Nigeria"
              className="rounded-2xl shadow-premium"
            />
          </div>

        </div>
      </section>

      {/* COST LINK SECTION */}
      <section className="section bg-white">
        <div className="container max-w-4xl text-center">
          <p className="text-lg">
            For detailed pricing information, visit our{" "}
            <a
              href="/cost-of-glaucoma-treatment-in-lagos"
              className="text-brand-primary font-semibold"
            >
              Cost of Glaucoma Treatment in Lagos guide
            </a>.
          </p>
        </div>
      </section>

      {/* WHAT IS GLAUCOMA */}
      <section className="section bg-white">
        <div className="container max-w-4xl text-center">

          <h2 className="text-4xl mb-6">
            What is Glaucoma?
          </h2>

          <p className="text-lg mb-8">
            Glaucoma is a progressive eye disease that damages the optic nerve.
            Without treatment, it can lead to permanent vision loss.
          </p>

          <p>
            Early detection through a{" "}
            <a
              href="/eye-test-ikeja"
              className="text-brand-primary font-semibold"
            >
              comprehensive eye examination in Ikeja
            </a>{" "}
            is essential.
          </p>

        </div>
      </section>

      {/* RISK FACTORS */}
      <section className="section bg-brand-light">
        <div className="container max-w-4xl">

          <h2 className="text-4xl mb-10 text-center">
            Who is at Risk of Glaucoma?
          </h2>

          <ul className="space-y-5 text-lg">
            <li>✔ Adults over 40 years</li>
            <li>✔ Family history of glaucoma</li>
            <li>✔ High intraocular pressure</li>
            <li>✔ Diabetes or hypertension</li>
          </ul>

        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="section bg-white">
        <div className="container grid md:grid-cols-3 gap-8 text-center">

          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-3">Medication</h3>
            <p>Prescription eye drops to control eye pressure.</p>
          </div>

          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-3">Laser Therapy</h3>
            <p>Laser procedures to improve drainage and reduce pressure.</p>
          </div>

          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-3">Surgical Treatment</h3>
            <p>
              Performed by our experienced{" "}
              <a
                href="/doctors/dr-jane-okafor"
                className="text-brand-primary"
              >
                glaucoma specialists
              </a>.
            </p>
          </div>

        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section bg-brand-light">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl mb-6">Related Eye Care Services</h2>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="/cataract-surgery-lagos" className="text-brand-primary font-semibold">
              Cataract Surgery
            </a>
            <a href="/eye-test-ikeja" className="text-brand-primary font-semibold">
              Comprehensive Eye Test
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-semibold mb-6">
            Protect Your Vision Today
          </h2>

          <p className="mb-8 text-lg">
            Schedule a glaucoma consultation at our Ikeja or Surulere branch.
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