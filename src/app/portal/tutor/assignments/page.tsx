import type { Metadata } from "next";
import { ClipboardList, Plus, Clock } from "lucide-react";

export const metadata: Metadata = { title: "Assignments | PIN Tutor Portal" };

const assignments = [
  { title: "FR Mock Paper 3",        subject: "Financial Reporting", due: "Sun 20 Jul", submitted: 28, total: 32, graded: 0 },
  { title: "AA Practice Set 2",      subject: "Audit & Assurance",   due: "Thu 24 Jul", submitted: 19, total: 28, graded: 5 },
  { title: "FR Mock Paper 2",        subject: "Financial Reporting", due: "Jul 6",       submitted: 32, total: 32, graded: 32 },
];

export default function TutorAssignmentsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between gap-4 mb-7">
        <div>
          <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Assignments</h1>
          <p className="text-[#6C757D] text-sm">Manage and grade student assignments.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-[#16A34A] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-green-700 transition-colors shadow-sm">
          <Plus className="w-4 h-4" /> New Assignment
        </button>
      </div>
      <div className="space-y-4">
        {assignments.map((a) => (
          <div key={a.title} className="bg-white rounded-2xl border border-[#E9ECEF] p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#DCFCE7] rounded-xl flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="w-5 h-5 text-[#16A34A]" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[#222222] text-base">{a.title}</h3>
                  <p className="text-xs text-[#ADB5BD] mt-0.5">{a.subject} · Due {a.due}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="text-center">
                  <p className="font-bold text-[#222222]">{a.submitted}/{a.total}</p>
                  <p className="text-xs text-[#ADB5BD]">Submitted</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#16A34A]">{a.graded}</p>
                  <p className="text-xs text-[#ADB5BD]">Graded</p>
                </div>
                <button className="text-xs font-semibold text-white bg-[#16A34A] px-4 py-2 rounded-xl hover:bg-green-700 transition-colors">
                  Grade
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
