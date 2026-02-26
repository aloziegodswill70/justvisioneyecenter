export default function OpticalShopSection() {
  return (
    <section className="section bg-white">
      <div className="container text-center">
        <h2 className="text-4xl mb-12">Optical Shop</h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="p-6 bg-brand-light rounded-2xl shadow-soft">
            Anti-Blue Light Glasses
          </div>

          <div className="p-6 bg-brand-light rounded-2xl shadow-soft">
            UV Protection Glasses
          </div>

          <div className="p-6 bg-brand-light rounded-2xl shadow-soft">
            Digital Glasses
          </div>

          <div className="p-6 bg-brand-light rounded-2xl shadow-soft">
            Contact Lenses
          </div>

        </div>
      </div>
    </section>
  );
}