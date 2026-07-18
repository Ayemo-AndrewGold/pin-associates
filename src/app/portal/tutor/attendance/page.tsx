import type { Metadata } from "next";
import { CheckCircle2, XCircle, Calendar } from "lucide-react";

export const metadata: Metadata = { title: "Attendance | PIN Tutor Portal" };

const students = ["Adaeze Okonkwo", "Emeka Eze", "Blessing Okafor", "Tunde Alabi", "Ngozi Nwachukwu", "Kelechi Onyekachi"];
const present = ["Adaeze Okonkwo", "Emeka Eze", "Tunde Alabi", "Ngozi Nwachukwu"];

export default function AttendancePage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7">
        <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Attendance</h1>
        <p className="text-[#6C757D] text-sm">Financial Reporting · Saturday 19 July 2025 · 10:00am</p>
      </div>
      <div className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden max-w-xl">
        <div className="px-6 py-4 border-b border-[#F1F3F5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#1E3A8A]" />
            <span className="font-semibold text-[#222222] text-sm">Today&apos;s Class</span>
          </div>
          <span className="text-xs text-[#16A34A] font-semibold">{present.length}/{students.length} present</span>
        </div>
        <div className="divide-y divide-[#F1F3F5]">
          {students.map((s) => {
            const isPresent = present.includes(s);
            return (
              <div key={s} className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#EFF4FF] rounded-lg flex items-center justify-center text-[#1E3A8A] font-bold text-xs">
                    {s.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <span className="text-sm font-medium text-[#222222]">{s}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className={`p-1.5 rounded-lg transition-colors ${isPresent ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#F1F3F5] text-[#ADB5BD] hover:bg-[#DCFCE7] hover:text-[#16A34A]"}`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                  <button className={`p-1.5 rounded-lg transition-colors ${!isPresent ? "bg-red-50 text-red-500" : "bg-[#F1F3F5] text-[#ADB5BD] hover:bg-red-50 hover:text-red-500"}`}>
                    <XCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-6 py-4 border-t border-[#F1F3F5]">
          <button className="w-full inline-flex items-center justify-center gap-2 bg-[#16A34A] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-green-700 transition-colors">
            <CheckCircle2 className="w-4 h-4" /> Save Attendance
          </button>
        </div>
      </div>
    </div>
  );
}
