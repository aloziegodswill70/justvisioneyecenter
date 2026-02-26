"use client";

import Link from "next/link";

export default function BottomNav() {
  const phoneNumber = "2348031234567"; // 🔴 Replace
  const whatsappNumber = "2348031234567"; // 🔴 Replace

  const message = encodeURIComponent(
    "Hello Just Vision Eye Center, I would like to book an appointment."
  );

  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-white shadow-premium border-t z-[9999] md:hidden"
      style={{ position: "fixed", bottom: 0 }}
    >
      <div className="grid grid-cols-4 text-center">

        {/* CALL */}
        <a
          href={`tel:+${phoneNumber}`}
          className="flex flex-col items-center justify-center py-3 text-brand-dark hover:text-brand-primary transition"
        >
          <PhoneIcon />
          <span className="text-xs mt-1">Call</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 text-[#25D366]"
        >
          <WhatsAppIcon />
          <span className="text-xs mt-1">WhatsApp</span>
        </a>

        {/* BOOK */}
        <Link
          href="/appointment"
          className="flex flex-col items-center justify-center py-3 text-brand-primary"
        >
          <CalendarIcon />
          <span className="text-xs mt-1">Book</span>
        </Link>

        {/* DIRECTIONS */}
        <a
          href="https://maps.google.com/?q=Just+Vision+Eye+Center+Ikeja+Lagos"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 text-brand-dark hover:text-brand-primary transition"
        >
          <LocationIcon />
          <span className="text-xs mt-1">Directions</span>
        </a>
      </div>
    </div>
  );
}

/* ICONS */

function PhoneIcon() {
  return (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 .4C7.3.4.4 7.3.4 16c0 2.8.7 5.6 2.1 8L0 32l8.3-2.2c2.3 1.3 4.9 2 7.7 2 8.7 0 15.6-6.9 15.6-15.6S24.7.4 16 .4zm0 28.5c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.2-2-1.8-4.3-1.8-6.7 0-7 5.7-12.7 12.7-12.7S28.7 9 28.7 16 23 28.9 16 28.9z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2zm13 8H4v10h16V10z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
    </svg>
  );
}