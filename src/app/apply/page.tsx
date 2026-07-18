"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle2, ArrowRight, User, Mail, Phone, BookOpen, GraduationCap } from "lucide-react";

const programmes = [
  "ICAN — Foundation Level",
  "ICAN — Skills Level",
  "ICAN — Professional Level",
  "ACCA — Applied Knowledge",
  "ACCA — Applied Skills",
  "ACCA — Strategic Professional",
  "CITN — Qualifying Examination",
  "CITN — Professional Examination",
  "ATS",
  "CISA",
  "Diploma in IFRS",
  "Corporate Training",
  "Business Consulting",
];

const studyModes = ["Weekday (Mornings)", "Weekday (Evenings)", "Weekend", "Online Only", "Hybrid (Online + In-person)"];

const steps = [
  { n: "01", title: "Submit Application", body: "Complete and submit this form. Our admissions team reviews every application within one business day." },
  { n: "02", title: "Advisor Contact",    body: "An admissions advisor will contact you to discuss your background, goals, and the right programme entry point." },
  { n: "03", title: "Enrolment & Payment", body: "Receive your enrolment confirmation, payment details, and class schedule. Payment plans are available." },
  { n: "04", title: "Begin Classes",       body: "Receive your study materials and join your first class. Your journey to certification begins." },
];

export default function ApplyPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    programme: "", mode: "", qualification: "", message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative pt-40 pb-16"
          style={{ background: "linear-gradient(135deg, #0F2055 0%, #1a3070 50%, #152D6E 100%)" }}
        >
          <div className="container-pin relative z-10 text-center">
            <span className="section-label section-label-gold mb-6 inline-flex">Enrolment</span>
            <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl leading-tight mb-4">
              Apply to PIN Consultancy
            </h1>
            <p className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed">
              Complete this form and our admissions team will be in touch within one business day
              to guide you through the registration process.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
            <svg viewBox="0 0 1440 40" fill="none" className="w-full">
              <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white" />
            </svg>
          </div>
        </section>

        <section className="section-py bg-white">
          <div className="container-pin">
            <div className="grid lg:grid-cols-[1fr_1.8fr] gap-14">
              {/* Left — process steps */}
              <div>
                <h2 className="font-heading font-bold text-[#222222] text-xl mb-7">What Happens Next</h2>
                <div className="space-y-6">
                  {steps.map(({ n, title, body }) => (
                    <div key={n} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-[#1E3A8A] rounded-xl flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        {n}
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-[#222222] text-sm mb-1">{title}</h3>
                        <p className="text-[#6C757D] text-sm leading-relaxed">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-[#FFFBEB] rounded-2xl border border-[#FDE68A]">
                  <p className="font-heading font-bold text-[#92600A] text-sm mb-2">
                    💡 Not sure which programme to choose?
                  </p>
                  <p className="text-[#92600A] text-xs leading-relaxed">
                    Tell us your background in the message field and our advisor
                    will recommend the right programme and entry point for you.
                  </p>
                </div>
              </div>

              {/* Right — form */}
              <div>
                {!sent ? (
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                    className="bg-[#F8F9FA] rounded-3xl border border-[#E9ECEF] p-8 space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">First Name *</label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADB5BD]" />
                          <input name="firstName" type="text" required value={form.firstName} onChange={handleChange}
                            placeholder="Your first name" className="form-input pl-10" />
                        </div>
                      </div>
                      <div>
                        <label className="form-label">Last Name *</label>
                        <input name="lastName" type="text" required value={form.lastName} onChange={handleChange}
                          placeholder="Your last name" className="form-input" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADB5BD]" />
                          <input name="email" type="email" required value={form.email} onChange={handleChange}
                            placeholder="your@email.com" className="form-input pl-10" />
                        </div>
                      </div>
                      <div>
                        <label className="form-label">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADB5BD]" />
                          <input name="phone" type="tel" required value={form.phone} onChange={handleChange}
                            placeholder="+234 800 000 0000" className="form-input pl-10" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Programme of Interest *</label>
                      <div className="relative">
                        <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADB5BD]" />
                        <select name="programme" required value={form.programme} onChange={handleChange}
                          className="form-input pl-10">
                          <option value="">Select a programme...</option>
                          {programmes.map(p => <option key={p}>{p}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">Preferred Study Mode *</label>
                        <select name="mode" required value={form.mode} onChange={handleChange} className="form-input">
                          <option value="">Select mode...</option>
                          {studyModes.map(m => <option key={m}>{m}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="form-label">Highest Qualification</label>
                        <div className="relative">
                          <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADB5BD]" />
                          <input name="qualification" type="text" value={form.qualification} onChange={handleChange}
                            placeholder="e.g. B.Sc. Accounting" className="form-input pl-10" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Additional Information</label>
                      <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                        placeholder="Tell us about yourself, your goals, or any questions you have..."
                        className="form-input resize-none" />
                    </div>
                    <button type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-8 py-4 rounded-xl hover:bg-[#152D6E] transition-colors shadow-sm">
                      Submit Application
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-[#ADB5BD] text-center">
                      We will contact you within one business day. Your information is kept confidential.
                    </p>
                  </form>
                ) : (
                  <div className="bg-[#F8F9FA] rounded-3xl border border-[#E9ECEF] p-12 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-8 h-8 text-[#16A34A]" />
                    </div>
                    <h3 className="font-heading font-bold text-[#222222] text-2xl mb-3">Application Received</h3>
                    <p className="text-[#6C757D] text-sm leading-relaxed max-w-sm mb-6">
                      Thank you, {form.firstName}. Your application has been submitted. An admissions advisor
                      will contact you at {form.email} within one business day.
                    </p>
                    <button onClick={() => setSent(false)}
                      className="text-sm font-semibold text-[#1E3A8A] hover:text-[#152D6E]">
                      Submit Another Application
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
