export const metadata = {
  title: "Best Eye Doctor in Ikeja Lagos | Just Vision Eye Centre",
  description:
    "Looking for the best eye doctor in Ikeja? Visit Just Vision Eye Centre for eye tests, glaucoma screening, retina checks and optical consultations.",
};

export default function Page() {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block mb-5 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">
              Eye Doctor in Ikeja
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best Eye Doctor in Ikeja Lagos
            </h1>

            <p className="text-lg text-brand-muted mb-8">
              Our Ikeja clinic provides professional eye care including
              comprehensive eye tests, glaucoma screening, retina checks,
              prescription glasses and digital lens recommendations.
            </p>

            <a
              href="https://wa.me/2348165557988?text=Hello%20Just%20Vision%20Eye%20Centre%20(Ikeja),%20I%20would%20like%20to%20book%20an%20eye%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Book Ikeja Appointment
            </a>
          </div>

          <img
            src="/images/drclara.jpeg"
            alt="Best eye doctor in Ikeja Lagos"
            className="rounded-3xl shadow-premium w-full object-cover"
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Visit Our Ikeja Branch
          </h2>
          <p className="text-brand-muted mb-6">
            7, Odunuga Street, Off Opebi Link Bridge, Ikeja, Lagos State.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=7+Odunuga+Street+Off+Opebi+Link+Bridge+Ikeja+Lagos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary font-semibold"
          >
            Get Directions →
          </a>
        </div>
      </section>
    </main>
  );
}