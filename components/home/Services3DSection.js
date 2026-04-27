"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Optical & Digital Glasses",
    description:
      "Premium frames, anti-blue light and UV protection glasses designed for laptops, phones and outdoor use.",
    link: "/services",
    icon: "🕶",
  },
  {
    title: "Glaucoma Treatment",
    description:
      "Early detection and long-term glaucoma management to protect your vision.",
    link: "/glaucoma-treatment-lagos",
    icon: "🩺",
  },
  {
    title: "Comprehensive Eye Test",
    description:
      "Detailed eye examinations including vision testing, retina checks and eye pressure measurement.",
    link: "/eye-test-ikeja",
    icon: "🔬",
  },
];

export default function Services3DSection() {
  return (
    <section className="section bg-brand-light">
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Specialist Eye Care Services
          </h2>

          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            At Just Vision Eye Centre, we provide professional eye care
            services including glaucoma management, comprehensive eye
            examinations and modern optical solutions in Ikeja and Surulere Lagos.
          </p>
        </div>

        {/* SERVICES CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                rotateX: -5,
                rotateY: 5,
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-10 rounded-3xl shadow-soft hover:shadow-premium transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-brand-muted mb-6">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="text-brand-primary font-semibold"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}

        </div>

        {/* ✅ NEW MEDICAL IMAGE SECTION */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* OPHTHALMIC INSTRUMENT */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition">
            <img
              src="/images/slitlamp.jpeg"
              alt="Modern ophthalmic diagnostic equipment"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="font-semibold mb-2">
                Advanced Diagnostic Equipment
              </h4>
              <p className="text-sm text-brand-muted">
                We use modern ophthalmic instruments for accurate diagnosis and
                early detection of eye conditions.
              </p>
            </div>
          </div>

          {/* FUNDUS IMAGE 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition">
            <img
              src="/images/diabetes.png"
              alt="Retina fundus image showing eye health assessment"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="font-semibold mb-2">
                Retina Examination
              </h4>
              <p className="text-sm text-brand-muted">
                Detailed fundus imaging helps detect glaucoma, diabetic
                retinopathy and other retinal conditions early.
              </p>
            </div>
          </div>

          {/* FUNDUS IMAGE 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition">
            <img
              src="/images/glaucoma.png"
              alt="Fundus scan for glaucoma and retina monitoring"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="font-semibold mb-2">
                Glaucoma Monitoring
              </h4>
              <p className="text-sm text-brand-muted">
                Continuous retina and optic nerve monitoring ensures long-term
                protection of your vision.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}