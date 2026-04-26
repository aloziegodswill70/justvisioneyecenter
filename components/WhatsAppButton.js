"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "2348033030008";

  const message = encodeURIComponent(
    "Hello Just Vision Eye Center, I would like to book an appointment."
  );

  return (
    <motion.div
      className="fixed bottom-48 md:bottom-40 right-6 z-[9999]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
    >
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Just Vision Eye Center on WhatsApp"
        className="relative group block"
      >
        {/* Glow */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] blur-xl opacity-30 group-hover:opacity-50 transition-all duration-300"></span>

        {/* Button */}
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-premium hover:scale-105 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="28"
            height="28"
            fill="white"
          >
            <path d="M16 .4C7.3.4.4 7.3.4 16c0 2.8.7 5.6 2.1 8L0 32l8.3-2.2c2.3 1.3 4.9 2 7.7 2 8.7 0 15.6-6.9 15.6-15.6S24.7.4 16 .4zm0 28.5c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.2-2-1.8-4.3-1.8-6.7 0-7 5.7-12.7 12.7-12.7S28.7 9 28.7 16 23 28.9 16 28.9z" />
          </svg>
        </motion.div>
      </a>
    </motion.div>
  );
}