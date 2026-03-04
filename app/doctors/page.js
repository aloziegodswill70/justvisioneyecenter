import Link from "next/link";

export const metadata = {
  title: "Our Eye Specialists | Just Vision Eye Center Lagos",
  description:
    "Meet our experienced eye specialists providing cataract surgery, glaucoma treatment and comprehensive eye examinations in Lagos.",
};

export default function DoctorsPage() {
  return (
    <main className="bg-white pt-32 pb-20">

      <div className="container text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our Eye Specialists
        </h1>

        <p className="text-lg text-brand-muted max-w-2xl mx-auto">
          Our experienced doctors provide professional eye care
          including cataract surgery, glaucoma treatment and
          comprehensive eye examinations.
        </p>

      </div>

      <div className="container grid md:grid-cols-2 gap-12 max-w-5xl">

        {/* DOCTOR CARD */}
        <Link
          href="/doctors/dr-clara-adekunle"
          className="bg-brand-light p-10 rounded-3xl shadow-soft hover:shadow-premium transition-all duration-300"
        >

          <img
            src="/images/drclara.jpeg"
            alt="Dr Clara Adekunle Optometrist Lagos"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
          />

          <h3 className="text-xl font-semibold text-center mb-2">
            Dr. Clara Adekunle
          </h3>

          <p className="text-center text-brand-muted mb-4">
            Consultant Optometrist
          </p>

          <p className="text-sm text-brand-muted text-center">
            Specialist in comprehensive eye examinations,
            glaucoma detection and optical care.
          </p>

        </Link>

      </div>

    </main>
  );
}