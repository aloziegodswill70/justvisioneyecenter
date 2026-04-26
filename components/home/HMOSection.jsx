export default function HMOSection() {
  return (
    <section className="section bg-brand-light">
      <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="/images/nhis.jpeg"
            alt="NHIS accredited eye clinic in Lagos"
            className="rounded-3xl shadow-premium w-full object-cover"
          />

          {/* Glow */}
          <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-brand-primary/10 rounded-full blur-3xl"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left">

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            HMO & NHIS Accredited
          </h2>

          {/* Intro */}
          <p className="text-base md:text-lg text-brand-muted mb-8 leading-relaxed text-justify md:text-left">
            Just Vision Eye Centre partners with selected Health Maintenance
            Organizations (HMOs) to ensure that quality eye care services remain
            accessible and affordable for individuals, families and corporate
            patients across Lagos.
          </p>

          {/* NHIS Highlight */}
          <div className="bg-white p-6 rounded-2xl shadow-soft mb-8">
            <h3 className="text-xl font-semibold text-brand-primary mb-2">
              NHIS Accredited Eye Clinic
            </h3>

            <p className="text-sm text-brand-muted leading-relaxed">
              We are accredited under the National Health Insurance Scheme (NHIS),
              allowing eligible patients to receive professional eye examinations,
              diagnosis and treatment through approved health insurance coverage.
            </p>
          </div>

          {/* Coverage */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">

            <div className="bg-white p-4 rounded-xl shadow-soft">
              <h4 className="font-semibold text-brand-primary mb-1 text-sm">
                Eye Exams
              </h4>
              <p className="text-xs text-brand-muted">
                Comprehensive vision assessments covered under selected plans.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-soft">
              <h4 className="font-semibold text-brand-primary mb-1 text-sm">
                Diagnosis
              </h4>
              <p className="text-xs text-brand-muted">
                Screening for glaucoma, retina diseases and other conditions.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-soft">
              <h4 className="font-semibold text-brand-primary mb-1 text-sm">
                Specialist Care
              </h4>
              <p className="text-xs text-brand-muted">
                Expert consultation and ongoing eye health monitoring.
              </p>
            </div>

          </div>

          {/* CTA */}
          <p className="mt-6 text-sm text-brand-muted">
            Contact us to confirm your HMO coverage and eligible services.
          </p>

        </div>

      </div>
    </section>
  );
}