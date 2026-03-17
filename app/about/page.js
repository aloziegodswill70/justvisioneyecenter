export const metadata = {
  title: "About Just Vision Eye Center | Eye Clinic in Ikeja Lagos",
  description:
    "Learn about Just Vision Eye Center, a leading eye clinic in Ikeja, Lagos offering advanced ophthalmology services and modern eye care.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">

      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-brand-light">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Just Vision Eye Centre
          </h1>
          <p className="text-lg">
            Just Vision Eye Center is a modern eye clinic in Ikeja, Lagos,
            committed to providing premium ophthalmology services with advanced
            technology and experienced specialists.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl mb-6">Our Mission</h2>
          <p>
            To provide accessible, affordable and advanced eye care services in Lagos.
          </p>

          <h2 className="text-4xl mt-12 mb-6">Our Vision</h2>
          <p>
            To become the leading private eye clinic in Lagos, Nigeria.
          </p>
        </div>
      </section>

    </main>
  );
}