export const metadata = {
  title: "No. 1 Best Eye Clinic in Lagos | Just Vision Eye Centre",
  description:
    "Just Vision Eye Centre is a trusted eye clinic in Lagos offering comprehensive eye tests, glaucoma management, retina screening and optical services.",
};

export default function Page() {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              No. 1 Best Eye Clinic in Lagos
            </h1>
            <p className="text-lg text-brand-muted mb-8">
              Just Vision Eye Centre provides detailed eye examinations,
              glaucoma screening, retina checks, prescription updates,
              anti-blue light glasses and premium optical care in Lagos.
            </p>
            <a href="/services" className="btn-primary inline-block">
              View Our Services
            </a>
          </div>

          <img
            src="/images/hero1.jpeg"
            alt="Best eye clinic in Lagos"
            className="rounded-3xl shadow-premium w-full object-cover"
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Why Patients Choose Us
          </h2>
          <ul className="space-y-4 text-lg text-brand-muted">
            <li>✔ Comprehensive eye examinations</li>
            <li>✔ Glaucoma screening and monitoring</li>
            <li>✔ Diabetic and hypertensive retina checks</li>
            <li>✔ Premium frames and digital glasses</li>
            <li>✔ NHIS accredited and selected HMO support</li>
            <li>✔ Branches in Ikeja and Surulere</li>
          </ul>
        </div>
      </section>
    </main>
  );
}