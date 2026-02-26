"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Chinwe A.",
    text: "Excellent cataract surgery experience. Professional and caring team.",
  },
  {
    name: "Tunde O.",
    text: "Best eye clinic in Ikeja. Thorough eye examination and modern equipment.",
  },
  {
    name: "Mary E.",
    text: "Very good glaucoma management and friendly staff.",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-white">
      <div className="container max-w-3xl text-center">
        <h2 className="text-4xl mb-10">What Our Patients Say</h2>

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 bg-brand-light rounded-2xl shadow-soft"
        >
          <p className="text-lg mb-4">"{testimonials[index].text}"</p>
          <div className="font-semibold text-brand-primary">
            {testimonials[index].name}
          </div>
        </motion.div>
      </div>
    </section>
  );
}