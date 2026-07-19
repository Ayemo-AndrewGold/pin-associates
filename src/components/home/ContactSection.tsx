"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "12 Professional Drive, Victoria Island, Lagos, Nigeria",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 800 000 0000",
    href: "tel:+2348000000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@pinassociates.com.ng",
    href: "mailto:info@pinassociates.com.ng",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri: 8am – 6pm | Sat: 9am – 3pm",
    href: undefined,
  },
];

const inquiryTypes = [
  "Programme Enquiry",
  "Registration",
  "Corporate Training",
  "Payment / Fees",
  "Student Support",
  "Other",
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-py bg-white">
      <div className="container-pin">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionHeader
            label="Contact Us"
            title="Get in Touch With Our Team"
            highlight="Our Team"
            description="Whether you are ready to enrol, have questions about a programme, or want to explore corporate training, we are here to help."
            align="center"
          />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-3 sm:p-6 bg-[#F8F9FA] rounded-2xl border border-[#E9ECEF] group hover:border-[#DBEAFE] transition-colors"
              >
                <div className="w-10 h-10 bg-[#EFF4FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#1E3A8A]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#ADB5BD] uppercase tracking-wide mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#343A40] hover:text-[#1E3A8A] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-[#343A40]">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[#E9ECEF] h-52 bg-[#F1F3F5] flex items-center justify-center">
              <div className="text-center text-[#ADB5BD]">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">Victoria Island, Lagos</p>
                <a
                  href="https://maps.google.com/?q=Victoria+Island+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#1E3A8A] font-semibold mt-1 inline-block hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#F8F9FA] rounded-3xl border border-[#E9ECEF] p-3 sm:p-8">
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Adaeze Okonkwo"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="type" className="form-label">Enquiry Type *</label>
                      <select
                        id="type"
                        name="type"
                        required
                        value={form.type}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select type...</option>
                        {inquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="form-input resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-8 py-4 rounded-xl hover:bg-[#152D6E] transition-colors shadow-sm"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-[#ADB5BD] text-center">
                    We typically respond within one business day.
                  </p>
                </form>
              ) : (
                <div className="py-12 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#16A34A]" />
                  </div>
                  <h3 className="font-heading font-bold text-[#222222] text-xl">Message Received</h3>
                  <p className="text-[#6C757D] text-sm max-w-sm leading-relaxed">
                    Thank you for reaching out. A member of our team will respond to your enquiry
                    within one business day.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", type: "", message: "" }); }}
                    className="text-sm font-semibold text-[#1E3A8A] hover:text-[#152D6E] transition-colors mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
