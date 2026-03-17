export default function ServicesSection() {
  return (
    <section className="section bg-brand-light">
      <div className="container text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our Eye Care Services
        </h2>

        <p className="text-lg text-brand-muted max-w-3xl mx-auto mb-14 leading-relaxed">
          Just Vision Eye Center provides comprehensive eye care services
          including glaucoma management, professional eye examinations,
          digital glasses and advanced optical solutions. Our focus is early
          diagnosis, accurate prescriptions and long-term vision protection
          using modern diagnostic technology.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {/* OPTICAL & DIGITAL GLASSES */}
          <a
            href="/services"
            className="group p-8 bg-white rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-3xl mb-4 text-brand-primary">🕶</div>

            <h3 className="text-xl font-semibold mb-3">
              Optical & Digital Glasses
            </h3>

            <p className="text-brand-muted text-sm leading-relaxed">
              Premium frames, anti-blue light glasses and UV protection lenses
              designed for screen use, outdoor activities and everyday vision
              comfort.
            </p>

            <span className="inline-block mt-5 text-brand-primary font-medium">
              Explore Optical Shop →
            </span>
          </a>

          {/* GLAUCOMA */}
          <a
            href="/glaucoma-treatment-lagos"
            className="group p-8 bg-white rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-3xl mb-4 text-brand-primary">🔬</div>

            <h3 className="text-xl font-semibold mb-3">
              Glaucoma Management
            </h3>

            <p className="text-brand-muted text-sm leading-relaxed">
              Early detection and long-term management of glaucoma through
              detailed eye pressure testing, optic nerve evaluation and
              continuous monitoring to prevent vision loss.
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
              retina examination, glaucoma screening and prescription updates
              for optimal visual clarity.
            </p>

            <span className="inline-block mt-5 text-brand-primary font-medium">
              Book Eye Test →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}