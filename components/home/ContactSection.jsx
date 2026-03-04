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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "2348033030008";

    const text = `
Hello Just Vision Eye Center,

Name: ${form.name}
Phone: ${form.phone}
Preferred Branch: ${form.branch}
Service Needed: ${form.service}

Message:
${form.message}
`;

    const encodedText = encodeURIComponent(text);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedText}`,
      "_blank"
    );
  };

  return (
    <section className="section bg-brand-light">
      <div className="container grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT INFO */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Our Eye Clinic
          </h2>

          <p className="text-lg text-brand-muted mb-8 leading-relaxed">
            Book an appointment with Just Vision Eye Center for
            comprehensive eye examination, glaucoma screening,
            cataract evaluation, digital glasses and premium
            optical care.
          </p>

          <div className="space-y-6">

            <div>
              <h4 className="font-semibold text-lg mb-2">📞 Phone / WhatsApp</h4>
              <p className="text-brand-muted">0803 303 0008</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">📍 Ikeja Branch</h4>
              <p className="text-brand-muted">
                7, Odunuga Street,<br />
                Off Opebi Link Bridge,<br />
                Ikeja, Lagos State
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">📍 Surulere Branch</h4>
              <p className="text-brand-muted">
                7, Adeniran Ogunsanya Street,<br />
                Surulere,<br />
                Lagos State
              </p>
            </div>

          </div>

        </div>

        {/* CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-3xl shadow-premium space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full border border-gray-200 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full border border-gray-200 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />

          <select
            name="branch"
            required
            onChange={handleChange}
            className="w-full border border-gray-200 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            <option value="">Select Preferred Branch</option>
            <option value="Ikeja Branch">Ikeja Branch</option>
            <option value="Surulere Branch">Surulere Branch</option>
          </select>

          <select
            name="service"
            required
            onChange={handleChange}
            className="w-full border border-gray-200 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            <option value="">Select Service</option>
            <option value="Eye Test">Comprehensive Eye Test</option>
            <option value="Cataract Consultation">Cataract Consultation</option>
            <option value="Glaucoma Screening">Glaucoma Screening</option>
            <option value="Prescription Glasses">Prescription Glasses</option>
            <option value="Contact Lenses">Contact Lenses</option>
            <option value="General Consultation">General Consultation</option>
          </select>

          <textarea
            name="message"
            placeholder="Additional information (optional)"
            rows="4"
            onChange={handleChange}
            className="w-full border border-gray-200 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-brand-primary text-white py-4 rounded-xl font-semibold hover:bg-brand-secondary transition-all duration-300"
          >
            Send via WhatsApp
          </button>

        </form>

      </div>
    </section>
  );
}