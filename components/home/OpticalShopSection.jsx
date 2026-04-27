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

        {/* ✅ NEW IMAGE SECTION */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* IMAGE 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition">
            <img
              src="/images/optical1.png"
              alt="Premium eyeglasses frames"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="font-semibold mb-2">
                Premium Frames Collection
              </h4>
              <p className="text-sm text-brand-muted">
                Stylish, durable and comfortable frames for everyday use.
              </p>
            </div>
          </div>

          {/* IMAGE 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition">
            <img
              src="/images/optical2.png"
              alt="Blue light glasses for digital devices"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="font-semibold mb-2">
                Customize Optical Frame
              </h4>
              <p className="text-sm text-brand-muted">
                For screen use and proper anti-blue light lens fits.
              </p>
            </div>
          </div>

          {/* IMAGE 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition">
            <img
              src="/images/optical3.png"
              alt="Contact lenses and eye care accessories"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="font-semibold mb-2">
                Premium Frame
              </h4>
              <p className="text-sm text-brand-muted">
                Comfortable frame for clear and natural vision.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}