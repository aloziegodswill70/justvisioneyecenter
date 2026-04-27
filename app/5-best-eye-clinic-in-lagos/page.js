export const metadata = {
  title: "5 Best Eye Clinics in Lagos | Just Vision Eye Centre",
  description:
    "Looking for one of the best eye clinics in Lagos? Just Vision Eye Centre offers eye tests, glaucoma care, digital glasses and optical services in Ikeja and Surulere.",
};

export default function Page() {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            5 Best Eye Clinics in Lagos
          </h1>
          <p className="text-lg text-brand-muted">
            If you are comparing trusted eye clinics in Lagos, Just Vision Eye
            Centre stands out for professional eye examinations, glaucoma
            screening, retina checks, digital glasses and premium optical care.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            "Comprehensive Eye Tests",
            "Glaucoma Screening",
            "Digital & Blue Light Glasses",
            "NHIS / HMO Support",
            "Ikeja Branch",
            "Surulere Branch",
          ].map((item) => (
            <div key={item} className="p-8 bg-brand-light rounded-2xl shadow-soft">
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p className="text-brand-muted text-sm">
                Professional eye care delivered with modern equipment and patient-focused service.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-semibold mb-6">
            Book an Eye Appointment Today
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/2348165557988" target="_blank" className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold">
              Book Ikeja
            </a>
            <a href="https://wa.me/2348189440752" target="_blank" className="border border-white px-8 py-4 rounded-2xl font-semibold">
              Book Surulere
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}