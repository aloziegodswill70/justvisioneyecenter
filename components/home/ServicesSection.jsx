export default function ServicesSection() {
  return (
    <section className="section bg-brand-light">
      <div className="container text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our Eye Care Services
        </h2>

        <p className="text-lg text-brand-muted max-w-3xl mx-auto mb-14 leading-relaxed">
          Just Vision Eye Center provides comprehensive eye care services
          including advanced cataract surgery, professional glaucoma
          management and detailed eye examinations. Our goal is early
          diagnosis, effective treatment and long-term vision protection
          using modern diagnostic technology.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {/* CATARACT */}
          <a
            href="/cataract-surgery-lagos"
            className="group p-8 bg-white rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-3xl mb-4 text-brand-primary">👁</div>

            <h3 className="text-xl font-semibold mb-3">
              Cataract Surgery
            </h3>

            <p className="text-brand-muted text-sm leading-relaxed">
              Advanced cataract surgery using modern techniques and
              high-quality intraocular lens implants to restore clear
              vision and improve quality of life.
            </p>

            <span className="inline-block mt-5 text-brand-primary font-medium">
              Learn More →
            </span>
          </a>

          {/* GLAUCOMA */}
          <a
            href="/glaucoma-treatment-lagos"
            className="group p-8 bg-white rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-3xl mb-4 text-brand-primary">🔬</div>

            <h3 className="text-xl font-semibold mb-3">
              Glaucoma Treatment
            </h3>

            <p className="text-brand-muted text-sm leading-relaxed">
              Early detection and management of glaucoma through
              detailed eye pressure testing, optic nerve evaluation
              and long-term vision monitoring.
            </p>

            <span className="inline-block mt-5 text-brand-primary font-medium">
              Learn More →
            </span>
          </a>

          {/* EYE TEST */}
          <a
            href="/eye-test-ikeja"
            className="group p-8 bg-white rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-3xl mb-4 text-brand-primary">👓</div>

            <h3 className="text-xl font-semibold mb-3">
              Comprehensive Eye Test
            </h3>

            <p className="text-brand-muted text-sm leading-relaxed">
              Detailed vision assessment including refraction testing,
              glaucoma screening, retina examination and prescription
              updates for optimal visual clarity.
            </p>

            <span className="inline-block mt-5 text-brand-primary font-medium">
              Learn More →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}