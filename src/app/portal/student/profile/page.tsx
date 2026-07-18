"use client";

import { useState } from "react";
import { User, Mail, Phone, GraduationCap, Save } from "lucide-react";

export default function ProfilePage() {
  const [form, setForm] = useState({
    firstName: "Adaeze", lastName: "Okonkwo", email: "adaeze.okonkwo@email.com",
    phone: "+234 800 123 4567", programme: "ICAN — Skills Level",
    qualification: "B.Sc. Accounting, University of Lagos",
  });

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7">
        <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Profile</h1>
        <p className="text-[#6C757D] text-sm">Manage your personal information.</p>
      </div>
      <div className="max-w-2xl">
        <div className="bg-white rounded-3xl border border-[#E9ECEF] p-8">
          <div className="flex items-center gap-5 mb-8 pb-8 border-b border-[#F1F3F5]">
            <div className="w-16 h-16 bg-[#1E3A8A] rounded-2xl flex items-center justify-center text-white font-heading font-bold text-xl">
              AO
            </div>
            <div>
              <h2 className="font-heading font-bold text-[#222222] text-xl">{form.firstName} {form.lastName}</h2>
              <p className="text-[#6C757D] text-sm">{form.programme}</p>
            </div>
          </div>
          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="form-label">First Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADB5BD]" />
                  <input value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} className="form-input pl-10" />
                </div>
              </div>
              <div>
                <label className="form-label">Last Name</label>
                <input value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} className="form-input" />
              </div>
            </div>
            <div>
              <label className="form-label">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADB5BD]" />
                <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="form-input pl-10" />
              </div>
            </div>
            <div>
              <label className="form-label">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADB5BD]" />
                <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="form-input pl-10" />
              </div>
            </div>
            <div>
              <label className="form-label">Academic Qualification</label>
              <div className="relative">
                <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADB5BD]" />
                <input value={form.qualification} onChange={e => setForm(f => ({ ...f, qualification: e.target.value }))} className="form-input pl-10" />
              </div>
            </div>
            <div>
              <label className="form-label">Current Programme</label>
              <input value={form.programme} disabled className="form-input bg-[#F8F9FA] text-[#ADB5BD]" />
              <p className="text-xs text-[#ADB5BD] mt-1">Programme changes must be made through admissions.</p>
            </div>
            <button type="submit"
              className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#152D6E] transition-colors shadow-sm">
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
