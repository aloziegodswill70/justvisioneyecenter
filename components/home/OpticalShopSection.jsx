export default function OpticalShopSection() {
  return (
    <section className="section bg-white">
      <div className="container text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Optical Shop
        </h2>

        <p className="text-lg text-brand-muted max-w-3xl mx-auto mb-14 leading-relaxed">
          Our optical shop provides premium vision solutions including
          anti-blue light glasses for digital devices, UV protection
          sunglasses for outdoor eye safety, professionally recommended
          digital glasses and high-quality contact lenses. Every product
          is carefully selected to provide comfort, protection and clear vision.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Anti Blue Light */}
          <div className="group p-8 bg-brand-light rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
            <div className="text-brand-primary text-3xl mb-4">💻</div>

            <h3 className="text-xl font-semibold mb-3">
              Anti-Blue Light Glasses
            </h3>

            <p className="text-brand-muted text-sm leading-relaxed">
              Specially designed for laptop and phone users to reduce
              digital eye strain, headaches and sleep disruption caused
              by prolonged screen exposure.
            </p>
          </div>

          {/* UV Glasses */}
          <div className="group p-8 bg-brand-light rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
            <div className="text-brand-primary text-3xl mb-4">🕶</div>

            <h3 className="text-xl font-semibold mb-3">
              UV Protection Glasses
            </h3>

            <p className="text-brand-muted text-sm leading-relaxed">
              Protect your eyes from harmful ultraviolet rays during
              outdoor activities while maintaining clear and comfortable
              vision under bright sunlight.
            </p>
          </div>

          {/* Digital Glasses */}
          <div className="group p-8 bg-brand-light rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
            <div className="text-brand-primary text-3xl mb-4">👓</div>

            <h3 className="text-xl font-semibold mb-3">
              Digital Glasses
            </h3>

            <p className="text-brand-muted text-sm leading-relaxed">
              Professionally recommended lenses designed for modern
              digital lifestyles, helping reduce eye fatigue from
              prolonged screen work.
            </p>
          </div>

          {/* Contact Lenses */}
          <div className="group p-8 bg-brand-light rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
            <div className="text-brand-primary text-3xl mb-4">🔍</div>

            <h3 className="text-xl font-semibold mb-3">
              Contact Lenses
            </h3>

            <p className="text-brand-muted text-sm leading-relaxed">
              Comfortable and high-quality contact lenses available
              for patients seeking an alternative to glasses while
              maintaining clear and natural vision.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}