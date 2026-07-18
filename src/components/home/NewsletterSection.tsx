"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    /* Section background — light gray, unobtrusive */
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container-pin">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Card */}
          <div
            className="bg-white rounded-[20px] border border-[#1E3A8A]/12 text-center px-8 py-12 md:px-14"
            style={{ boxShadow: "0 4px 32px rgba(30,58,138,0.07), 0 1px 4px rgba(30,58,138,0.04)" }}
          >
            {/* Gold accent line above heading */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-10 h-0.5 bg-[#F4C430] rounded-full" />
              <div className="mx-3 w-9 h-9 bg-[#EFF4FF] rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#1E3A8A]" />
              </div>
              <div className="w-10 h-0.5 bg-[#F4C430] rounded-full" />
            </div>

            <h2 className="font-heading font-bold text-[#1E3A8A] text-3xl md:text-4xl leading-tight mb-3">
              Stay Ahead of Your Exams
            </h2>
            <p className="text-[#6C757D] text-base leading-relaxed mb-9 max-w-md mx-auto">
              Join 3,000+ students receiving exam schedules, study tips, ICAN &amp; ACCA
              updates, and career insights delivered straight to your inbox.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="flex-1 bg-[#F8F9FA] border border-[#DEE2E6] rounded-2xl px-5 py-3.5 text-[#222222] placeholder-[#ADB5BD] focus:outline-none focus:border-[#1E3A8A] focus:bg-white focus:ring-1 focus:ring-[#1E3A8A]/20 transition-all text-sm"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#1E3A8A] text-white font-bold text-sm px-7 py-3.5 rounded-2xl hover:bg-[#152D6E] transition-all duration-200 shadow-sm hover:shadow-md flex-shrink-0"
                >
                  Subscribe
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-14 h-14 bg-[#DCFCE7] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-[#16A34A]" />
                </div>
                <p className="text-[#1E3A8A] font-semibold text-lg">You&apos;re subscribed!</p>
                <p className="text-[#6C757D] text-sm">
                  Welcome to the PIN community. You&apos;ll receive our next update shortly.
                </p>
              </motion.div>
            )}

            <p className="mt-5 text-[#ADB5BD] text-xs">
              No spam. Unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
