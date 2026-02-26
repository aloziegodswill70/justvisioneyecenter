// app/doctors/dr-clara-adekunle/page.js

export const metadata = {
  title: "Dr. Clara Adekunle | Consultant Ophthalmologist in Ikeja & Surulere Lagos",
  description:
    "Meet Dr. Clara Adekunle, Consultant Ophthalmologist at Just Vision Eye Center, Lagos. Specialist in cataract surgery, glaucoma treatment and comprehensive eye care.",
  keywords: [
    "Dr Clara Adekunle",
    "Ophthalmologist in Ikeja",
    "Best Eye Doctor in Lagos",
    "Cataract Surgeon Lagos",
    "Glaucoma Specialist Lagos",
  ],
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Clara Adekunle",
  jobTitle: "Consultant Ophthalmologist",
  worksFor: {
    "@type": "MedicalBusiness",
    name: "Just Vision Eye Center",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ikeja",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  medicalSpecialty: [
    "Ophthalmology",
    "Cataract Surgery",
    "Glaucoma Treatment"
  ],
};

export default function DoctorProfile() {
  return (
    <main className="bg-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />

      {/* BREADCRUMB */}
      <section className="pt-24 pb-6 bg-white">
        <div className="container text-sm text-brand-muted">
          <a href="/" className="hover:text-brand-primary">Home</a> /
          <a href="/best-eye-clinic-in-ikeja" className="ml-1 hover:text-brand-primary">
            Eye Clinic Ikeja
          </a> /
          <span className="ml-1 text-brand-dark">
            Dr. Clara Adekunle
          </span>
        </div>
      </section>

      {/* HERO */}
      <section className="pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dr. Clara Adekunle
            </h1>

            <p className="text-xl text-brand-primary mb-6">
              Consultant Ophthalmologist | Cataract & Glaucoma Specialist
            </p>

            <p className="mb-8 text-lg max-w-xl">
              Dr. Clara Adekunle is an experienced ophthalmologist in Ikeja and Surulere, Lagos
              with expertise in advanced{" "}
              <a href="/cataract-surgery-lagos" className="text-brand-primary font-semibold">
                cataract surgery
              </a>,{" "}
              <a href="/glaucoma-treatment-lagos" className="text-brand-primary font-semibold">
                glaucoma treatment
              </a>{" "}
              and comprehensive eye care.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a href="/appointment" className="btn-primary">
                Book Consultation
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
              src="/dr-clara-adekunle.jpg"
              alt="Dr Clara Adekunle ophthalmologist in Lagos"
              className="rounded-2xl shadow-premium"
            />
          </div>

        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="section bg-white">
        <div className="container max-w-4xl">

          <h2 className="text-4xl mb-8 text-center">
            Qualifications & Training
          </h2>

          <ul className="space-y-4 text-lg">
            <li>✔ MBBS – University of Lagos</li>
            <li>✔ Fellowship in Ophthalmology</li>
            <li>✔ Certified Cataract Surgeon</li>
            <li>✔ Member, Ophthalmological Society of Nigeria</li>
          </ul>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section bg-brand-light">
        <div className="container max-w-4xl text-center">

          <h2 className="text-4xl mb-6">
            Professional Experience
          </h2>

          <p className="text-lg">
            With over 10 years of clinical experience, Dr. Clara Adekunle has
            successfully managed complex eye conditions and performed numerous{" "}
            <a href="/cataract-surgery-lagos" className="text-brand-primary font-semibold">
              cataract surgeries in Lagos
            </a>.
          </p>

        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="section bg-white">
        <div className="container grid md:grid-cols-3 gap-8 text-center">

          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-3">
              Cataract Surgery
            </h3>
            <p>
              Learn more about our{" "}
              <a href="/cost-of-cataract-surgery-in-lagos" className="text-brand-primary font-semibold">
                cataract surgery cost guide
              </a>.
            </p>
          </div>

          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-3">
              Glaucoma Care
            </h3>
            <p>
              Explore our{" "}
              <a href="/cost-of-glaucoma-treatment-in-lagos" className="text-brand-primary font-semibold">
                glaucoma treatment cost breakdown
              </a>.
            </p>
          </div>

          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-3">
              Comprehensive Eye Exams
            </h3>
            <p>
              Book a{" "}
              <a href="/eye-test-ikeja" className="text-brand-primary font-semibold">
                detailed eye examination
              </a>.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">

          <h2 className="text-4xl font-semibold mb-6">
            Book Appointment with Dr. Clara Adekunle
          </h2>

          <p className="mb-8 text-lg">
            Schedule a consultation at Just Vision Eye Center in Ikeja or Surulere.
          </p>

          <a
            href="/appointment"
            className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
          >
            Schedule Consultation
          </a>

        </div>
      </section>

    </main>
  );
}