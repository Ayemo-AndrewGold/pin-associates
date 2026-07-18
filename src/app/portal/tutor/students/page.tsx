import type { Metadata } from "next";
import { Search, TrendingUp } from "lucide-react";

export const metadata: Metadata = { title: "My Students | PIN Tutor Portal" };

const students = [
  { name: "Adaeze Okonkwo",     programme: "ICAN Skills", avg: 68, attendance: "92%", status: "active" },
  { name: "Emeka Eze",          programme: "ICAN Skills", avg: 74, attendance: "88%", status: "active" },
  { name: "Blessing Okafor",    programme: "ICAN Skills", avg: 55, attendance: "78%", status: "at-risk" },
  { name: "Tunde Alabi",        programme: "ICAN Skills", avg: 81, attendance: "96%", status: "active" },
  { name: "Ngozi Nwachukwu",    programme: "ICAN Skills", avg: 62, attendance: "85%", status: "active" },
  { name: "Kelechi Onyekachi",  programme: "ICAN Skills", avg: 49, attendance: "65%", status: "at-risk" },
];

export default function StudentsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between gap-4 mb-7">
        <div>
          <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">My Students</h1>
          <p className="text-[#6C757D] text-sm">94 students across 3 subjects · Nov/Dec 2025 Diet</p>
        </div>
        <div className="relative hidden sm:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADB5BD]" />
          <input type="text" placeholder="Search students..." className="form-input pl-10 w-64 text-sm" />
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#F1F3F5] text-left">
              <th className="px-6 py-3 text-xs font-semibold text-[#ADB5BD] uppercase tracking-wide">Student</th>
              <th className="px-6 py-3 text-xs font-semibold text-[#ADB5BD] uppercase tracking-wide">Programme</th>
              <th className="px-6 py-3 text-xs font-semibold text-[#ADB5BD] uppercase tracking-wide">Avg Score</th>
              <th className="px-6 py-3 text-xs font-semibold text-[#ADB5BD] uppercase tracking-wide">Attendance</th>
              <th className="px-6 py-3 text-xs font-semibold text-[#ADB5BD] uppercase tracking-wide">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F3F5]">
            {students.map((s) => (
              <tr key={s.name} className="hover:bg-[#F8F9FA] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#EFF4FF] rounded-lg flex items-center justify-center text-[#1E3A8A] font-bold text-xs">
                      {s.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                    <span className="font-semibold text-[#222222]">{s.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-[#6C757D]">{s.programme}</td>
                <td className="px-6 py-4">
                  <span className={`font-bold ${s.avg >= 60 ? "text-[#16A34A]" : "text-red-500"}`}>{s.avg}%</span>
                </td>
                <td className="px-6 py-4 text-[#6C757D]">{s.attendance}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.status === "active" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-red-50 text-red-600"}`}>
                    {s.status === "active" ? "On Track" : "At Risk"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
