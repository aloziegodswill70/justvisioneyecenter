export const metadata = {
  title: "Dr. Chara Adekunle | Best Eye Doctor in Ikeja Lagos",
  description:
    "Meet Dr. Chara Adekunle, an experienced eye doctor at Just Vision Eye Centre, Ikeja Lagos. Book eye tests, glaucoma screening, retina checks and optical consultations.",
  keywords: [
    "Dr Chara Adekunle",
    "Best Eye Doctor in Ikeja",
    "Eye Doctor in Ikeja Lagos",
    "Optometrist in Ikeja",
    "Eye Clinic in Ikeja",
    "Glaucoma Screening Ikeja",
  ],
};

const doctorSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Chara Adekunle",
  jobTitle: "Eye Care Specialist",
  worksFor: {
    "@type": "MedicalClinic",
    name: "Just Vision Eye Centre",
    url: "https://justvisioneyecenter.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "7, Odunuga Street, Off Opebi Link Bridge",
    addressLocality: "Ikeja",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  medicalSpecialty: [
    "Optometry",
    "Glaucoma Screening",
    "Comprehensive Eye Examination",
    "Retina Screening",
    "Optical Care",
  ],
};

export default function DrCharaAdekunlePage() {
  return (
    <main className="bg-white">

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />

      {/* BREADCRUMB */}
      <section className="pt-28 pb-6 bg-white">
        <div className="container text-sm text-brand-muted">
          <a href="/" className="hover:text-brand-primary">Home</a> /
          <a href="/doctors" className="ml-1 hover:text-brand-primary">
            Doctors
          </a> /
          <span className="ml-1 text-brand-dark">
            Dr. Chara Adekunle
          </span>
        </div>
      </section>

      {/* HERO */}
      <section className="pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block mb-5 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">
              Eye Doctor in Ikeja Lagos
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Dr. Chara Adekunle — Best Eye Doctor in Ikeja
            </h1>

            <p className="text-lg text-brand-muted mb-8 leading-relaxed">
              Dr. Chara Adekunle provides professional eye care at Just Vision
              Eye Centre, Ikeja. She focuses on comprehensive eye examinations,
              glaucoma screening, retina checks, prescription updates and
              premium optical care for patients in Lagos.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              <a
                href="https://wa.me/2348165557988?text=Hello%20Just%20Vision%20Eye%20Centre%20(Ikeja),%0A%0AI%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Chara%20Adekunle.%0A%0AService%20Required:%20%0APreferred%20Date:%20%0A%0AThank%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-white px-6 py-4 rounded-2xl font-semibold text-center shadow-premium hover:scale-105 transition"
              >
                Book Appointment
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=7+Odunuga+Street+Off+Opebi+Link+Bridge+Ikeja+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-primary text-brand-primary px-6 py-4 rounded-2xl font-semibold text-center hover:bg-brand-primary hover:text-white transition"
              >
                Get Directions
              </a>

            </div>
          </div>

          <div className="relative">
            <img
              src="/images/drclara.jpeg"
              alt="Dr Chara Adekunle best eye doctor in Ikeja Lagos"
              className="rounded-3xl shadow-premium w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </section>

      {/* PROFILE SUMMARY */}
      <section className="section bg-white">
        <div className="container max-w-5xl grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Professional Eye Care with Clinical Detail
            </h2>

            <p className="text-brand-muted leading-relaxed mb-6 text-justify">
              At Just Vision Eye Centre, Dr. Chara Adekunle attends to patients
              who need clear diagnosis, accurate prescriptions and careful eye
              health evaluation. Her consultations are suitable for adults,
              children, screen users, drivers, patients with diabetes or
              hypertension and anyone experiencing blurry vision, eye strain or
              frequent headaches.
            </p>

            <p className="text-brand-muted leading-relaxed text-justify">
              Patients in Ikeja and nearby Lagos communities visit our clinic
              for comprehensive eye tests, glaucoma checks, retina examinations,
              contact lens advice, anti-blue light glasses and UV protection
              lenses.
            </p>
          </div>

          <div className="bg-brand-light p-8 rounded-3xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-6">
              Areas of Focus
            </h3>

            <ul className="space-y-4 text-brand-dark">
              <li>✔ Comprehensive eye examinations</li>
              <li>✔ Glaucoma screening and monitoring</li>
              <li>✔ Retina checks for diabetic and hypertensive patients</li>
              <li>✔ Prescription glasses and lens recommendations</li>
              <li>✔ Anti-blue light and UV protection glasses</li>
              <li>✔ Contact lens consultation</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-brand-light">
        <div className="container text-center max-w-5xl">

          <h2 className="text-4xl font-bold mb-6">
            Services You Can Book with Dr. Chara Adekunle
          </h2>

          <p className="text-lg text-brand-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            Choose professional eye care services at our Ikeja branch based on
            your symptoms, visual needs and eye health history.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <a
              href="/eye-test-ikeja"
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-premium transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                Comprehensive Eye Test
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Full vision screening, refraction, eye pressure check and
                retina examination.
              </p>
            </a>

            <a
              href="/glaucoma-treatment-lagos"
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-premium transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                Glaucoma Screening
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Early detection and monitoring for patients at risk of glaucoma.
              </p>
            </a>

            <a
              href="/blue-light-glasses-in-ikeja"
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-premium transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                Digital Glasses
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Anti-blue light glasses for phone, laptop and office screen use.
              </p>
            </a>

          </div>

        </div>
      </section>

      {/* IKEJA LOCATION */}
      <section className="section bg-white">
        <div className="container grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Visit Dr. Chara Adekunle at Our Ikeja Branch
            </h2>

            <p className="text-brand-muted mb-6 leading-relaxed">
              Just Vision Eye Centre,<br />
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
              Open Ikeja Branch on Google Map →
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-premium border border-gray-100">
            <iframe
              title="Dr Chara Adekunle Ikeja Eye Clinic Map"
              src="https://www.google.com/maps?q=7+Odunuga+Street+Ikeja+Lagos&output=embed"
              width="100%"
              height="350"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-brand-light">
        <div className="container max-w-4xl">

          <h2 className="text-4xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Where does Dr. Chara Adekunle consult?
              </h3>
              <p className="text-brand-muted">
                She consults at Just Vision Eye Centre, 7, Odunuga Street,
                Off Opebi Link Bridge, Ikeja, Lagos State.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I book an eye test with Dr. Chara Adekunle?
              </h3>
              <p className="text-brand-muted">
                Yes. You can book a comprehensive eye test, glaucoma screening,
                retina check or optical consultation through WhatsApp.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Does the clinic provide glasses after examination?
              </h3>
              <p className="text-brand-muted">
                Yes. Just Vision Eye Centre provides prescription glasses,
                anti-blue light glasses, UV protection lenses, digital glasses
                and premium frames.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">

          <h2 className="text-4xl font-semibold mb-6">
            Book an Appointment with Dr. Chara Adekunle
          </h2>

          <p className="mb-8 text-lg">
            Visit our Ikeja branch for professional eye care and optical services.
          </p>

          <a
            href="https://wa.me/2348165557988?text=Hello%20Just%20Vision%20Eye%20Centre%20(Ikeja),%0A%0AI%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Chara%20Adekunle."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
          >
            Book via WhatsApp
          </a>

        </div>
      </section>

    </main>
  );
}