"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ============================= */}
      {/* FIXED TOP TRUST BAR */}
      {/* ============================= */}
      <div className="fixed top-0 left-0 w-full z-[60] bg-brand-dark text-white text-sm py-2">
        <div className="container flex justify-between items-center">
          <div className="hidden md:block">
            📍 Ikeja & Surulere, Lagos | 🕒 Mon–Sat 8AM–6PM
          </div>

          <div className="mx-auto md:mx-0">
            📞{" "}
            <a
              href="tel:+2348033030008"
              className="hover:text-brand-secondary transition"
            >
              0803 303 0008
            </a>
          </div>
        </div>
      </div>

      {/* ============================= */}
      {/* PREMIUM NAVBAR */}
      {/* ============================= */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-[36px] w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container flex justify-between items-center py-5">

          {/* LOGO + TEXT */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/justlogo.png"
              alt="Just Vision Eye Center Logo"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-brand-dark">
              Just Vision
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/doctors">Doctors</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            <a
              href="https://wa.me/2348033030008?text=Hello%20Just%20Vision%20Eye%20Center,%0A%0AI%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-6 py-3 rounded-2xl shadow-soft hover:bg-brand-secondary transition-all duration-300"
            >
              Book Appointment
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-premium">
            <div className="flex flex-col p-6 gap-5">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/doctors">Doctors</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/contact">Contact</NavLink>

              <a
                href="https://wa.me/2348033030008?text=Hello%20Just%20Vision%20Eye%20Center,%0A%0AI%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-white px-6 py-3 rounded-2xl text-center"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </motion.nav>
    </>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative group transition-colors duration-300 hover:text-brand-primary"
    >
      {children}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}