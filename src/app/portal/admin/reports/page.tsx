import type { Metadata } from "next";
import { Download, BarChart2 } from "lucide-react";
export const metadata: Metadata = { title: "Reports | PIN Admin" };
const reports = [
  { name: "Monthly Enrolment Report — July 2025",   type: "Enrolment",  generated: "Jul 17, 2025" },
  { name: "Revenue Summary — Q2 2025",               type: "Financial",  generated: "Jul 1, 2025" },
  { name: "Pass Rate Analysis — May/Jun 2025 Diet",  type: "Academic",   generated: "Jul 10, 2025" },
  { name: "Student Attendance Report — June 2025",   type: "Attendance", generated: "Jul 5, 2025" },
  { name: "Tutor Performance Review — H1 2025",      type: "HR",         generated: "Jul 1, 2025" },
];
export default function AdminReportsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between gap-4 mb-7">
        <div><h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Reports</h1></div>
        <button className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#152D6E] shadow-sm">
          <BarChart2 className="w-4 h-4" /> Generate Report
        </button>
      </div>
      <div className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden">
        <div className="divide-y divide-[#F1F3F5]">
          {reports.map(r => (
            <div key={r.name} className="flex items-center gap-4 px-6 py-4 hover:bg-[#F8F9FA]">
              <div className="w-9 h-9 bg-[#EFF4FF] rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart2 className="w-4 h-4 text-[#1E3A8A]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#222222]">{r.name}</p>
                <p className="text-xs text-[#ADB5BD]">{r.type} · Generated {r.generated}</p>
              </div>
              <button className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A] bg-[#EFF4FF] px-3 py-2 rounded-lg hover:bg-[#1E3A8A] hover:text-white transition-all">
                <Download className="w-3.5 h-3.5" /> Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
