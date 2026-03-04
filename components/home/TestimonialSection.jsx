"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Chinwe A.",
    image: "/images/testimonial2.png",
    service: "Cataract Surgery Patient",
    text: "I had cataract surgery at Just Vision Eye Center and the experience was excellent. The doctors explained everything clearly and the procedure was smooth. My vision improved significantly and the staff were very professional and caring.",
  },
  {
    name: "Tunde O.",
    image: "/images/testimonial2.png",
    service: "Comprehensive Eye Examination",
    text: "This is one of the best eye clinics in Ikeja. The eye examination was very detailed and the equipment looked modern and advanced. The optometrist carefully explained my prescription and recommended the right digital glasses for my work.",
  },
  {
    name: "Mary E.",
    image: "/images/testimonial2.png",
    service: "Glaucoma Management",
    text: "I was diagnosed early with glaucoma at Just Vision Eye Center and I am grateful for their expertise. The doctors monitor my eye pressure regularly and the treatment has been very effective. Highly recommended clinic in Lagos.",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="section bg-white">
      <div className="container max-w-4xl text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What Our Patients Say
        </h2>

        <p className="text-lg text-brand-muted mb-12 max-w-2xl mx-auto">
          We are committed to delivering professional eye care and
          excellent patient experience at our Ikeja and Surulere
          branches in Lagos.
        </p>

        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="bg-brand-light p-10 rounded-3xl shadow-premium"
            >

              {/* Patient Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover shadow-soft"
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-4 text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Testimonial Text */}
              <p className="text-lg leading-relaxed text-brand-dark mb-6">
                "{testimonial.text}"
              </p>

              {/* Patient Name */}
              <div className="font-semibold text-brand-primary text-lg">
                {testimonial.name}
              </div>

              <div className="text-sm text-brand-muted mt-1">
                {testimonial.service}
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}