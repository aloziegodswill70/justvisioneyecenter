import Link from "next/link";

export const metadata = {
  title: "Eye Care Blog | Just Vision Eye Center",
  description:
    "Learn about eye health, cataract surgery, glaucoma prevention, digital eye strain and vision care tips from Just Vision Eye Center.",
};

export default function BlogPage() {
  return (
    <main className="bg-white pt-32 pb-20">

      <div className="container text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Eye Care Blog
        </h1>

        <p className="text-lg text-brand-muted max-w-2xl mx-auto">
          Expert insights on eye health, cataract surgery,
          glaucoma prevention and digital eye care.
        </p>

      </div>

      <div className="container grid md:grid-cols-3 gap-10">

        {/* BLOG CARD */}
        <Link
          href="/blog/early-signs-of-glaucoma"
          className="bg-brand-light p-8 rounded-2xl shadow-soft hover:shadow-premium transition"
        >

          <img
            src="/images/blog/glaucoma.jpg"
            alt="Early Signs of Glaucoma"
            className="rounded-xl mb-6"
          />

          <h3 className="text-xl font-semibold mb-3">
            Early Signs of Glaucoma
          </h3>

          <p className="text-sm text-brand-muted">
            Learn how glaucoma develops and why early
            detection is important for preventing vision loss.
          </p>

        </Link>

        {/* BLOG CARD */}
        <Link
          href="/blog/digital-eye-strain"
          className="bg-brand-light p-8 rounded-2xl shadow-soft hover:shadow-premium transition"
        >

          <img
            src="/images/blog/digital-eyestrain.jpg"
            alt="Digital Eye Strain"
            className="rounded-xl mb-6"
          />

          <h3 className="text-xl font-semibold mb-3">
            Digital Eye Strain
          </h3>

          <p className="text-sm text-brand-muted">
            Discover how digital glasses and anti-blue
            light lenses can protect your vision.
          </p>

        </Link>

      </div>

    </main>
  );
}