"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Cataract Surgery",
    description:
      "Advanced cataract surgery with modern intraocular lens implants performed by experienced specialists.",
    link: "/cataract-surgery-lagos",
    icon: "👁",
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

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Specialist Eye Care Services
          </h2>

          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            At Just Vision Eye Center we provide advanced ophthalmology
            services including cataract surgery, glaucoma treatment and
            comprehensive eye examinations in Ikeja and Surulere Lagos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

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

      </div>
    </section>
  );
}