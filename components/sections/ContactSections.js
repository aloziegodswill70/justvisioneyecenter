"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    branch: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const whatsappNumber = "2348033030008";

    const text = `
*New Appointment Request*

Name: ${form.name}
Phone: ${form.phone}
Preferred Branch: ${form.branch}
Service: ${form.service}
Message: ${form.message || "N/A"}
    `;

    const encodedText = encodeURIComponent(text);

    setTimeout(() => {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodedText}`,
        "_blank"
      );

      setLoading(false);
      setSuccess(true);

      setForm({
        name: "",
        phone: "",
        branch: "",
        service: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section className="section bg-brand-light">
      <div className="container grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book an Appointment
          </h2>

          <p className="text-lg mb-8 text-brand-muted max-w-xl">
            Fill the form below and our team will respond instantly via WhatsApp.
            Choose your preferred branch in Ikeja or Surulere.
          </p>

          <div className="space-y-3 text-sm text-brand-muted">
            <p>📍 Ikeja & Surulere, Lagos</p>
            <p>📞 0803 303 0008</p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-premium space-y-6 relative"
        >

          {/* Success Message */}
          {success && (
            <div className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center flex-col text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 text-3xl">✓</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Redirecting to WhatsApp
              </h3>
              <p className="text-brand-muted">
                Your appointment details are being sent.
              </p>
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-200 px-5 py-3 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 px-5 py-3 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none"
          />

          {/* Branch Selector */}
          <select
            name="branch"
            required
            value={form.branch}
            onChange={handleChange}
            className="w-full border border-gray-200 px-5 py-3 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none"
          >
            <option value="">Select Preferred Branch</option>
            <option value="Ikeja Branch">Ikeja Branch</option>
            <option value="Surulere Branch">Surulere Branch</option>
          </select>

          <select
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className="w-full border border-gray-200 px-5 py-3 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none"
          >
            <option value="">Select Service</option>
            <option value="Cataract Surgery">Cataract Surgery</option>
            <option value="Glaucoma Treatment">Glaucoma Treatment</option>
            <option value="Comprehensive Eye Test">Comprehensive Eye Test</option>
            <option value="General Consultation">General Consultation</option>
          </select>

          <textarea
            name="message"
            placeholder="Additional Information (Optional)"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-200 px-5 py-3 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-primary text-white py-4 rounded-xl font-semibold hover:bg-brand-secondary transition-all duration-300 flex items-center justify-center"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </span>
            ) : (
              "Send via WhatsApp"
            )}
          </button>
        </form>

      </div>
    </section>
  );
}