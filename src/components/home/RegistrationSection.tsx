"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";

const dietInfo = {
  diet: "November / December 2026",
  registrationDeadline: "31 October 2026",
  lecturesStart: "1 September 2026",
  examDates: "November – December 2026",
  status: "open" as const,
};

const programmes = [
  { name: "ICAN Foundation",       fee: "₦85,000" },
  { name: "ICAN Skills",           fee: "₦95,000" },
  { name: "ICAN Professional",     fee: "₦110,000" },
  { name: "ACCA Applied Knowledge",fee: "₦95,000" },
  { name: "ACCA Applied Skills",   fee: "₦105,000" },
  { name: "CITN Qualifying",       fee: "₦90,000" },
  { name: "ATS",                   fee: "₦65,000" },
  { name: "Diploma in IFRS",       fee: "₦120,000" },
];

export default function RegistrationSection() {
  return (
    <section
      id="registration"
      className="section-py relative overflow-hidden bg-white"
    >
      <div className="container-pin">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — announcement */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Status badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#16A34A]" />
              </span>
              <span className="text-[#16A34A] text-sm font-bold uppercase tracking-wider">
                Registration Now Open
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-[#222222] text-3xl md:text-4xl leading-tight mb-4">
              {dietInfo.diet} Diet
            </h2>
            <p className="text-[#6C757D] text-base leading-relaxed mb-8 max-w-lg">
              Secure your place in the upcoming examination diet. Classes have already
              begun limited seats available. Early registration is strongly advised.
            </p>

            {/* Key dates */}
            <div className="space-y-4 mb-8">
              {[
                { label: "Lecture Start Date",       value: dietInfo.lecturesStart,          icon: Calendar },
                { label: "Registration Deadline",    value: dietInfo.registrationDeadline,   icon: AlertCircle },
                { label: "Examination Period",        value: dietInfo.examDates,              icon: Clock },
              ].map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 bg-[#F8F9FA] rounded-xl border border-[#E9ECEF]"
                >
                  <div className="w-9 h-9 bg-[#EFF4FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#ADB5BD] uppercase tracking-wide">{label}</p>
                    <p className="text-sm font-bold text-[#222222]">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-[#F4C430] text-[#152D6E] font-bold text-base px-8 py-4 rounded-2xl hover:bg-[#D4A820] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold text-base px-8 py-4 rounded-2xl border border-[#1E3A8A]/20 hover:bg-[#EFF4FF] hover:border-[#1E3A8A]/40 transition-all"
              >
                Speak to an Advisor
              </Link>
            </div>
          </motion.div>

          {/* Right — fee table */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-[#F8F9FA] rounded-3xl border border-[#E9ECEF] overflow-hidden">
              <div className="px-6 py-5 border-b border-[#E9ECEF] bg-[#F4C430]">
                <h3 className="font-heading font-bold text-white text-lg">
                  Tuition Fees — {dietInfo.diet} Diet
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  Includes study materials · Payment plans available
                </p>
              </div>

              <div className="divide-y divide-[#E9ECEF]">
                {programmes.map(({ name, fee }) => (
                  <div
                    key={name}
                    className="flex items-center justify-between px-6 py-4 hover:bg-[#EFF4FF] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                      <span className="text-sm font-medium text-[#343A40] group-hover:text-[#1E3A8A] transition-colors">
                        {name}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-[#1E3A8A]">{fee}</span>
                  </div>
                ))}
              </div>

              <div className="px-6 py-5 bg-[#FFFBEB] border-t border-[#E9ECEF]">
                <p className="text-xs text-[#92600A] font-medium flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  Fees are for tuition only and do not include ICAN/ACCA/CITN registration
                  and examination fees. Instalment payment plans are available on request.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
