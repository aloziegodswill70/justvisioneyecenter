export default function BranchesSection() {
  return (
    <section className="section bg-white">
      <div className="container text-center">
        <h2 className="text-4xl mb-12 font-bold">
          Our Branches in Lagos
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* IKEJA BRANCH */}
          <div className="p-8 bg-brand-light rounded-3xl shadow-soft hover:shadow-premium transition text-left">
            <h3 className="text-2xl font-semibold mb-4">
              Ikeja Branch – Lagos
            </h3>

            <p className="mb-4 text-brand-muted">
              7, Odunuga Street, <br />
              Off Opebi Link Bridge, <br />
              Ikeja, Lagos State.
            </p>

            <p className="mb-6">
              Our Ikeja branch offers advanced cataract surgery,
              glaucoma treatment and comprehensive eye tests.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="/best-eye-clinic-in-ikeja"
                className="text-brand-primary font-semibold"
              >
                Learn More →
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=7+Odunuga+Street+Off+Opebi+Link+Bridge+Ikeja+Lagos"
                target="_blank"
                className="text-brand-primary font-semibold"
              >
                Get Directions →
              </a>

            </div>
          </div>

          {/* SURULERE BRANCH */}
          <div className="p-8 bg-brand-light rounded-3xl shadow-soft hover:shadow-premium transition text-left">
            <h3 className="text-2xl font-semibold mb-4">
              Surulere Branch – Lagos
            </h3>

            <p className="mb-4 text-brand-muted">
              7, Adeniran Ogunsanya Street, <br />
              Surulere, <br />
              Lagos State.
            </p>

            <p className="mb-6">
              Premium eye care services including glaucoma management,
              eye examinations and optical solutions.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="/best-eye-clinic-in-surulere"
                className="text-brand-primary font-semibold"
              >
                Learn More →
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=7+Adeniran+Ogunsanya+Street+Surulere+Lagos"
                target="_blank"
                className="text-brand-primary font-semibold"
              >
                Get Directions →
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}