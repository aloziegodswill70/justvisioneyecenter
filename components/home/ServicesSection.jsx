export default function ServicesSection() {
  return (
    <section className="section bg-brand-light">
      <div className="container text-center">
        <h2 className="text-4xl mb-12">Our Eye Care Services</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <a href="/cataract-surgery-lagos" className="p-6 bg-white rounded-2xl shadow-soft">
            Cataract Surgery
          </a>

          <a href="/glaucoma-treatment-lagos" className="p-6 bg-white rounded-2xl shadow-soft">
            Glaucoma Treatment
          </a>

          <a href="/eye-test-ikeja" className="p-6 bg-white rounded-2xl shadow-soft">
            Comprehensive Eye Test
          </a>

        </div>
      </div>
    </section>
  );
}