export const metadata = {
  title: "Best Eye Clinic Near Surulere Lagos | Just Vision Eye Center",
  description:
    "Looking for the best eye clinic near Surulere Lagos? Just Vision Eye Center offers cataract surgery, glaucoma treatment, eye tests and optical services easily accessible from Surulere.",
  keywords: [
    "Best Eye Clinic in Surulere",
    "Eye Clinic Near Surulere Lagos",
    "Cataract Surgery Near Surulere",
    "Glaucoma Treatment Surulere",
    "Optometrist Near Surulere",
  ],
};

export default function SurulerePage() {
  return (
    <main className="bg-white">

      {/* BREADCRUMB */}
      <section className="pt-24 pb-6 bg-white">
        <div className="container text-sm text-brand-muted">
          <a href="/" className="hover:text-brand-primary">Home</a> /
          <span className="ml-1 text-brand-dark">
            Best Eye Clinic Near Surulere
          </span>
        </div>
      </section>

      {/* HERO */}
      <section className="pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Best Eye Clinic Near Surulere, Lagos
          </h1>

          <p className="text-lg mb-6">
            Just Vision Eye Center provides premium eye care services for
            patients living in Surulere and surrounding areas in Lagos.
          </p>

          <a href="/appointment" className="btn-primary">
            Book Appointment
          </a>
        </div>
      </section>

      {/* SERVICES FOR SURULERE */}
      <section className="section bg-white">
        <div className="container max-w-4xl">

          <h2 className="text-4xl mb-6">
            Our Eye Care Services for Surulere Residents
          </h2>

          <p className="mb-8 text-lg">
            Patients from Surulere visit our clinic for comprehensive
            ophthalmology services including:
          </p>

          <ul className="space-y-4 text-lg">
            <li>
              ✔{" "}
              <a
                href="/cataract-surgery-lagos"
                className="text-brand-primary font-semibold"
              >
                Cataract Surgery in Lagos
              </a>
            </li>

            <li>
              ✔{" "}
              <a
                href="/glaucoma-treatment-lagos"
                className="text-brand-primary font-semibold"
              >
                Glaucoma Treatment
              </a>
            </li>

            <li>
              ✔{" "}
              <a
                href="/eye-test-ikeja"
                className="text-brand-primary font-semibold"
              >
                Comprehensive Eye Test
              </a>
            </li>

            <li>
              ✔ Anti-blue light glasses & optical services
            </li>
          </ul>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-brand-light">
        <div className="container max-w-4xl">

          <h2 className="text-4xl mb-6 text-center">
            Why Surulere Patients Choose Us
          </h2>

          <ul className="space-y-4 text-lg">
            <li>✔ Modern surgical technology</li>
            <li>✔ Experienced ophthalmologists</li>
            <li>✔ Easy access from Surulere</li>
            <li>✔ Personalized eye care</li>
          </ul>

        </div>
      </section>

      {/* RELATED COST GUIDES */}
      <section className="section bg-white">
        <div className="container max-w-4xl text-center">

          <h2 className="text-3xl mb-6">
            Cost Information
          </h2>

          <p className="mb-6">
            Learn more about treatment costs:
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/cost-of-cataract-surgery-in-lagos"
              className="text-brand-primary font-semibold"
            >
              Cost of Cataract Surgery →
            </a>

            <a
              href="/cost-of-glaucoma-treatment-in-lagos"
              className="text-brand-primary font-semibold"
            >
              Cost of Glaucoma Treatment →
            </a>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-semibold mb-6">
            Looking for an Eye Clinic Near Surulere?
          </h2>

          <p className="mb-8 text-lg">
            Visit Just Vision Eye Center for expert eye care in Lagos.
          </p>

          <a
            href="/appointment"
            className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
          >
            Schedule Appointment
          </a>
        </div>
      </section>

    </main>
  );
}