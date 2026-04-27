export const metadata = {
  title: "Best Eye Doctor in Lagos | Just Vision Eye Centre",
  description:
    "Book an appointment with a trusted eye doctor in Lagos at Just Vision Eye Centre. Eye tests, glaucoma screening, retina checks and optical services available.",
};

export default function Page() {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Best Eye Doctor in Lagos
          </h1>
          <p className="text-lg text-brand-muted">
            Just Vision Eye Centre provides professional eye care for patients
            in Lagos, with branches in Ikeja and Surulere. Book eye tests,
            glaucoma screening, retina checks, contact lens consultation and
            optical services.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid md:grid-cols-3 gap-8">
          <a href="/eye-test-ikeja" className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-xl font-semibold mb-3">Comprehensive Eye Test</h3>
            <p className="text-brand-muted text-sm">
              Vision testing, refraction, eye pressure checks and retina examination.
            </p>
          </a>

          <a href="/glaucoma-treatment-lagos" className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-xl font-semibold mb-3">Glaucoma Screening</h3>
            <p className="text-brand-muted text-sm">
              Early detection and long-term monitoring to protect vision.
            </p>
          </a>

          <a href="/blue-light-glasses-in-ikeja" className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <h3 className="text-xl font-semibold mb-3">Digital Glasses</h3>
            <p className="text-brand-muted text-sm">
              Anti-blue light glasses, UV protection lenses and premium frames.
            </p>
          </a>
        </div>
      </section>

      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-semibold mb-6">
            Book an Appointment
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/2348165557988" target="_blank" className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold">
              Ikeja Branch
            </a>
            <a href="https://wa.me/2348189440752" target="_blank" className="border border-white px-8 py-4 rounded-2xl font-semibold">
              Surulere Branch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}