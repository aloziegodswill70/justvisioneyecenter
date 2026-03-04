import ContactSection from "@/components/home/ContactSection";

export const metadata = {
  title: "Contact Just Vision Eye Center | Eye Clinic in Lagos",
  description:
    "Contact Just Vision Eye Center in Ikeja and Surulere Lagos. Book eye tests, cataract consultation, glaucoma screening and optical services.",
};

export default function ContactPage() {
  return (
    <main className="bg-white pt-32">

      {/* PAGE HERO */}
      <section className="pb-16">
        <div className="container text-center max-w-3xl">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Our Eye Clinic
          </h1>

          <p className="text-lg text-brand-muted">
            Book an appointment, ask questions or visit any of our
            Lagos branches for professional eye care.
          </p>

        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactSection />

    </main>
  );
}