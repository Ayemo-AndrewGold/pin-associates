"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function PortalLoginPage() {
  const [role, setRole] = useState<"student" | "tutor" | "admin">("student");
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const roleConfig = {
    student: { label: "Student Portal", color: "#1E3A8A", href: "/portal/student" },
    tutor:   { label: "Tutor Portal",   color: "#16A34A", href: "/portal/tutor" },
    admin:   { label: "Admin Dashboard",color: "#7C3AED", href: "/portal/admin" },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = roleConfig[role].href;
  };

  return (
    <div className="min-h-screen flex" style={{ background: "linear-gradient(135deg, #0F2055 0%, #152D6E 100%)" }}>
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-14">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F4C430] rounded-xl flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-[#152D6E]" strokeWidth={2.5} />
          </div>
          <div>
            <span className="block font-heading font-bold text-white text-lg">PIN Consultancy</span>
            <span className="block text-[10px] text-white/50 tracking-wider uppercase">Pass It Now Associates</span>
          </div>
        </Link>

        <div>
          <h2 className="font-heading font-extrabold text-white text-4xl leading-tight mb-5">
            Your Learning Portal.<br />
            <span className="text-[#F4C430]">All In One Place.</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed max-w-md mb-10">
            Access your courses, study materials, CBT practice tests, timetable, and certificates.
            Everything you need for exam success — in your portal.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "5,000+", l: "Active Students" },
              { v: "87%",    l: "Pass Rate" },
              { v: "9",      l: "Programmes" },
              { v: "24/7",   l: "Resource Access" },
            ].map(({ v, l }) => (
              <div key={l} className="bg-white/[0.07] border border-white/[0.1] rounded-2xl p-4">
                <p className="font-heading font-extrabold text-[#F4C430] text-2xl">{v}</p>
                <p className="text-white/50 text-xs mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/25 text-xs">
          © {new Date().getFullYear()} PIN Consultancy Services. All rights reserved.
        </p>
      </div>

      {/* Right — login form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-white lg:rounded-l-[3rem]">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-8 lg:hidden">
            <div className="w-9 h-9 bg-[#1E3A8A] rounded-xl flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-[#F4C430]" strokeWidth={2.5} />
            </div>
            <span className="font-heading font-bold text-[#1E3A8A]">PIN Consultancy</span>
          </Link>

          <h1 className="font-heading font-bold text-[#222222] text-2xl mb-2">Sign In</h1>
          <p className="text-[#6C757D] text-sm mb-7">Access your portal to continue learning.</p>

          {/* Role selector */}
          <div className="flex bg-[#F8F9FA] rounded-xl p-1 mb-7 gap-1">
            {(["student", "tutor", "admin"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 text-xs font-semibold py-2.5 rounded-lg transition-all capitalize ${
                  role === r
                    ? "bg-[#1E3A8A] text-white shadow-sm"
                    : "text-[#6C757D] hover:text-[#222222]"
                }`}
              >
                {r === "student" ? "Student" : r === "tutor" ? "Tutor" : "Admin"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="form-label">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADB5BD]" />
                <input
                  type="email" required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="form-input pl-10"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="form-label !mb-0">Password</label>
                <a href="#" className="text-xs font-semibold text-[#1E3A8A] hover:text-[#152D6E]">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADB5BD]" />
                <input
                  type={showPw ? "text" : "password"} required
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  placeholder="••••••••"
                  className="form-input pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#ADB5BD] hover:text-[#495057]"
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-[#152D6E] transition-colors shadow-sm mt-2">
              Sign In to {roleConfig[role].label}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-xs text-[#ADB5BD] mt-6">
            Not enrolled yet?{" "}
            <Link href="/apply" className="text-[#1E3A8A] font-semibold hover:text-[#152D6E]">
              Apply Now
            </Link>
          </p>
          <p className="text-center text-xs text-[#ADB5BD] mt-2">
            <Link href="/" className="hover:text-[#495057] transition-colors">← Back to main website</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
