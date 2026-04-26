export default function AboutSection() {
  return (
    <section className="section bg-white">
      <div className="container grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="/images/drclara.jpeg"
            alt="Eye examination at Just Vision Eye Centre Lagos"
            className="rounded-3xl shadow-premium w-full object-cover"
          />

          {/* Accent Glow */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted Eye Care in Ikeja & Surulere, Lagos
          </h2>

          <p className="text-lg text-brand-muted mb-6 leading-relaxed text-justify">
            Just Vision Eye Centre is a professional eye clinic in Lagos
            committed to accurate diagnosis, modern treatment and premium
            optical care. Our experienced specialists conduct comprehensive
            eye examinations designed to detect conditions early and protect
            your long-term vision.
          </p>

          <p className="text-lg text-brand-muted mb-6 leading-relaxed text-justify">
            We diagnose and manage early <strong>glaucoma</strong>,
            <strong> cataract</strong>,
            <strong> diabetic retinopathy</strong> and
            <strong> hypertensive retinopathy</strong> using modern
            diagnostic equipment and clinical expertise.
          </p>

          <p className="text-lg text-brand-muted leading-relaxed text-justify">
            Beyond medical care, we provide premium optical solutions including
            <strong> anti-blue light glasses</strong> for laptop and phone use,
            <strong> anti-UV protective glasses</strong> for outdoor vision safety,
            stylish premium frames and professionally recommended
            <strong> digital glasses</strong> for screen users.
          </p>
        </div>

      </div>

      {/* CORE SERVICES WITH IMAGE */}
      <div className="container mt-20 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="bg-brand-light p-10 rounded-3xl shadow-soft">
          <h3 className="text-2xl font-semibold mb-6">
            Our Core Services
          </h3>

          <ul className="space-y-4 text-lg">
            <li>✔ Comprehensive Eye Examination</li>
            <li>✔ Early Glaucoma & Cataract Detection</li>
            <li>✔ Diabetic & Hypertensive Retina Screening</li>
            <li>✔ Anti-Blue Light Glasses</li>
            <li>✔ Anti-UV Outdoor Glasses</li>
            <li>✔ Premium Frames & Digital Glasses</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/images/justvision.jpeg"
            alt="Digital glasses and premium frames"
            className="rounded-3xl shadow-premium w-full object-cover"
          />

          <div className="absolute -top-6 -right-6 w-28 h-28 bg-brand-primary/10 rounded-full blur-3xl"></div>
        </div>

      </div>

      {/* BRANCH LOCATIONS */}
      <div className="container mt-20">

        <h3 className="text-3xl font-semibold mb-10 text-center">
          Visit Any of Our Lagos Branches
        </h3>

        <div className="grid md:grid-cols-2 gap-10">

          {/* IKEJA BRANCH */}
          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <img
              src="/images/justvision1.jpeg"
              alt="Just Vision Eye Centre Ikeja Branch"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />

            <h4 className="text-xl font-semibold mb-3">
              Ikeja Branch
            </h4>

            <p className="text-brand-muted mb-4 leading-relaxed">
              7, Odunuga Street,<br />
              Off Opebi Link Bridge,<br />
              Ikeja, Lagos State.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=7+Odunuga+Street+Off+Opebi+Link+Bridge+Ikeja+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary font-semibold hover:underline"
            >
              Get Directions →
            </a>
          </div>

          {/* SURULERE BRANCH */}
          <div className="p-8 bg-brand-light rounded-2xl shadow-soft">
            <img
              src="/images/hero1.jpeg"
              alt="Just Vision Eye Centre Surulere Branch"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />

            <h4 className="text-xl font-semibold mb-3">
              Surulere Branch
            </h4>

            <p className="text-brand-muted mb-4 leading-relaxed">
              7, Adeniran Ogunsanya Street,<br />
              Surulere,<br />
              Lagos State.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=7+Adeniran+Ogunsanya+Street+Surulere+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary font-semibold hover:underline"
            >
              Get Directions →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}