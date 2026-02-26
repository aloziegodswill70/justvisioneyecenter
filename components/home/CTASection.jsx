export default function CTASection() {
  return (
    <section className="py-20 bg-brand-primary text-white text-center">
      <div className="container max-w-3xl">
        <h2 className="text-4xl font-semibold mb-6">
          Protect Your Vision Today
        </h2>

        <p className="mb-8 text-lg">
          Book your consultation at Just Vision Eye Center.
        </p>

        <a
          href="/appointment"
          className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold shadow-premium hover:scale-105 transition"
        >
          Schedule Appointment
        </a>
      </div>
    </section>
  );
}