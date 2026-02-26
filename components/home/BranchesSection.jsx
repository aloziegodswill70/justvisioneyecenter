export default function BranchesSection() {
  return (
    <section className="section bg-white">
      <div className="container text-center">
        <h2 className="text-4xl mb-12">Our Branches</h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-4">
              Ikeja Branch – Lagos
            </h3>
            <p>
              Leading eye clinic in Ikeja offering modern ophthalmology services.
            </p>
            <a
              href="/best-eye-clinic-in-ikeja"
              className="text-brand-primary mt-4 inline-block"
            >
              Learn More →
            </a>
          </div>

          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-4">
              Surulere Branch – Lagos
            </h3>
            <p>
              Premium eye care services accessible to Surulere residents.
            </p>
            <a
              href="/best-eye-clinic-in-surulere"
              className="text-brand-primary mt-4 inline-block"
            >
              Learn More →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}