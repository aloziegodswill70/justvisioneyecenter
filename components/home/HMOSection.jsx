export default function HMOSection() {
  return (
    <section className="section bg-brand-light">
      <div className="container max-w-4xl text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          HMO & NHIS Accredited
        </h2>

        {/* Intro */}
        <p className="text-lg text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Just Vision Eye Center partners with selected Health Maintenance
          Organizations (HMOs) to ensure that quality eye care services remain
          accessible and affordable for individuals, families and corporate
          patients across Lagos.
        </p>

        {/* NHIS Highlight Card */}
        <div className="bg-white p-8 rounded-3xl shadow-soft mb-10">

          <div className="text-3xl mb-3">🏥</div>

          <h3 className="text-2xl font-semibold text-brand-primary mb-3">
            NHIS Accredited Eye Clinic
          </h3>

          <p className="text-brand-muted leading-relaxed max-w-2xl mx-auto">
            We are accredited under the National Health Insurance Scheme (NHIS),
            allowing eligible patients to receive professional eye examinations,
            diagnosis and treatment through approved health insurance coverage.
          </p>

        </div>

        {/* Coverage Info */}
        <div className="grid md:grid-cols-3 gap-8 text-left">

          <div className="bg-white p-6 rounded-2xl shadow-soft">
            <h4 className="font-semibold mb-2 text-brand-primary">
              Eye Examinations
            </h4>
            <p className="text-sm text-brand-muted">
              Comprehensive eye tests and vision assessments may be covered
              depending on your HMO plan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-soft">
            <h4 className="font-semibold mb-2 text-brand-primary">
              Diagnosis & Monitoring
            </h4>
            <p className="text-sm text-brand-muted">
              Screening and monitoring for conditions such as glaucoma,
              cataract and retina diseases.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-soft">
            <h4 className="font-semibold mb-2 text-brand-primary">
              Specialist Eye Care
            </h4>
            <p className="text-sm text-brand-muted">
              Professional consultation and eye care services provided by
              experienced eye specialists.
            </p>
          </div>

        </div>

        {/* CTA */}
        <p className="mt-10 text-brand-muted">
          Please contact our clinic to confirm whether your HMO plan is accepted
          and the services covered under your policy.
        </p>

      </div>
    </section>
  );
}