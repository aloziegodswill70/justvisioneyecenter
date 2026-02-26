// app/eye-test-ikeja/page.js

export const metadata = {
  title: "Comprehensive Eye Test in Ikeja & Surulere Lagos",
  description:
    "Book a comprehensive eye test in Ikeja or Surulere Lagos at Just Vision Eye Center. Vision screening, glaucoma check, retina examination and prescription glasses.",
  keywords: [
    "Eye Test in Ikeja",
    "Eye Test in Lagos",
    "Eye Test Surulere",
    "Comprehensive Eye Exam Lagos",
    "Vision Test Near Me",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is an eye test in Lagos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost varies depending on the type of examination required. Contact Just Vision Eye Center for updated pricing."
      }
    },
    {
      "@type": "Question",
      name: "How long does an eye test take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A comprehensive eye test usually takes between 30 to 60 minutes."
      }
    },
    {
      "@type": "Question",
      name: "Do I need an appointment for an eye test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Appointments are recommended, but walk-ins may also be accommodated."
      }
    }
  ]
};

export default function EyeTestPage() {
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
          <span className="ml-1 text-brand-dark">
            Eye Test in Ikeja
          </span>
        </div>
      </section>

      {/* HERO */}
      <section className="pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Eye Test in Ikeja & Surulere, Lagos
            </h1>

            <p className="text-lg mb-8 max-w-xl">
              Get accurate vision screening, glaucoma check, retina examination
              and prescription updates at Just Vision Eye Center.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a href="/appointment" className="btn-primary">
                Book Eye Test
              </a>

              <a
                href="tel:+2348031234567"
                className="border border-brand-primary text-brand-primary px-6 py-3 rounded-2xl hover:bg-brand-primary hover:text-white transition"
              >
                Call Clinic
              </a>
            </div>
          </div>

          <div>
            <img
              src="/eye-test-ikeja.jpg"
              alt="Comprehensive eye test in Ikeja Lagos"
              className="rounded-2xl shadow-premium"
            />
          </div>

        </div>
      </section>

      {/* INTERNAL LINK BOOST */}
      <section className="section bg-white">
        <div className="container max-w-4xl text-center">
          <p className="text-lg">
            Our eye examination helps detect early signs of{" "}
            <a href="/glaucoma-treatment-lagos" className="text-brand-primary font-semibold">
              glaucoma
            </a>{" "}
            and determine if you need{" "}
            <a href="/cataract-surgery-lagos" className="text-brand-primary font-semibold">
              cataract surgery
            </a>.
          </p>
        </div>
      </section>

      {/* WHAT IS INCLUDED */}
      <section className="section bg-white">
        <div className="container max-w-4xl text-center">

          <h2 className="text-4xl mb-8">
            What is Included in Our Eye Test?
          </h2>

          <p className="text-lg mb-12">
            Our comprehensive eye examination checks both vision clarity and overall eye health.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">

            <div className="p-6 bg-brand-light rounded-2xl shadow-soft">
              ✔ Visual acuity test  
              <br />✔ Refraction test for glasses
              <br />✔ Eye pressure measurement
            </div>

            <div className="p-6 bg-brand-light rounded-2xl shadow-soft">
              ✔ Retina examination  
              <br />✔ Glaucoma screening
              <br />✔ Prescription update
            </div>

          </div>

        </div>
      </section>

      {/* WHO NEEDS EYE TEST */}
      <section className="section bg-brand-light">
        <div className="container max-w-4xl text-center">

          <h2 className="text-4xl mb-8">
            Who Needs an Eye Test?
          </h2>

          <ul className="space-y-4 text-lg text-left inline-block">
            <li>✔ Drivers renewing license</li>
            <li>✔ Students and office workers</li>
            <li>✔ Individuals over 40 years</li>
            <li>✔ Patients with diabetes or hypertension</li>
          </ul>

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
              href="/cost-of-cataract-surgery-in-lagos"
              className="text-brand-primary font-semibold"
            >
              Cataract Surgery Cost →
            </a>

            <a
              href="/cost-of-glaucoma-treatment-in-lagos"
              className="text-brand-primary font-semibold"
            >
              Glaucoma Treatment Cost →
            </a>

            <a
              href="/doctors/dr-clara-adekunle"
              className="text-brand-primary font-semibold"
            >
              Meet Dr. Clara Adekunle →
            </a>

          </div>

        </div>
      </section>

      {/* STRONG CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">

          <h2 className="text-4xl font-semibold mb-6">
            Protect Your Vision Today
          </h2>

          <p className="mb-8 text-lg">
            Early detection prevents serious eye conditions.
          </p>

          <a
            href="/appointment"
            className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
          >
            Schedule Eye Exam
          </a>

        </div>
      </section>

    </main>
  );
}