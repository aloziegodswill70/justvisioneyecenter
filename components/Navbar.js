"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP TRUST BAR */}
      <div className="bg-brand-dark text-white text-sm py-2">
        <div className="container flex justify-between items-center">
          <div>
            📍 Ikeja, Lagos, Nigeria | 🕒 Mon–Sat 8AM–6PM
          </div>
          <div>
            📞 <a href="tel:+234XXXXXXXXXX">+234 XXX XXX XXXX</a>
          </div>
        </div>
      </div>

      {/* PREMIUM NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="container flex justify-between items-center py-5">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold text-brand-dark">
            Just Vision
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/doctors">Doctors</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            <Link
              href="/appointment"
              className="bg-brand-primary text-white px-6 py-3 rounded-2xl shadow-soft hover:bg-brand-secondary transition-all duration-300"
            >
              Book Appointment
            </Link>
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
              <Link
                href="/appointment"
                className="bg-brand-primary text-white px-6 py-3 rounded-2xl text-center"
              >
                Book Appointment
              </Link>
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