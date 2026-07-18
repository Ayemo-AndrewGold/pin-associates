"use client";
import { useState } from "react";
import { Megaphone, Plus, Send } from "lucide-react";
const existing = [
  { title: "Nov/Dec 2025 Registration Open",   date: "Jul 1, 2025",   audience: "All Students",   status: "published" },
  { title: "July Schedule — Updated",          date: "Jun 28, 2025",  audience: "ICAN Students",  status: "published" },
  { title: "Payment Deadline Reminder",        date: "Jun 25, 2025",  audience: "All Students",   status: "published" },
];
export default function AnnouncementsPage() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between gap-4 mb-7">
        <div><h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Announcements</h1></div>
        <button onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#152D6E] shadow-sm">
          <Plus className="w-4 h-4" /> New Announcement
        </button>
      </div>
      {showForm && (
        <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6 mb-6">
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div><label className="form-label">Title *</label><input type="text" required className="form-input" /></div>
            <div><label className="form-label">Message *</label><textarea rows={4} required className="form-input resize-none" /></div>
            <div><label className="form-label">Audience</label>
              <select className="form-input">
                {["All Students", "ICAN Students", "ACCA Students", "CITN Students"].map(a => <option key={a}>{a}</option>)}
              </select>
            </div>
            <button type="submit" className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#152D6E]">
              <Send className="w-4 h-4" /> Publish Announcement
            </button>
          </form>
        </div>
      )}
      <div className="space-y-3">
        {existing.map((a) => (
          <div key={a.title} className="bg-white rounded-2xl border border-[#E9ECEF] p-5 flex items-center gap-4">
            <div className="w-9 h-9 bg-[#EFF4FF] rounded-xl flex items-center justify-center flex-shrink-0">
              <Megaphone className="w-4 h-4 text-[#1E3A8A]" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[#222222] text-sm">{a.title}</p>
              <p className="text-xs text-[#ADB5BD]">{a.audience} · {a.date}</p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#DCFCE7] text-[#16A34A]">{a.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
