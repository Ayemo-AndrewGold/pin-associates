import type { Metadata } from "next";
import { ClipboardList, Clock, Upload, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = { title: "Assignments | PIN Student Portal" };

const assignments = [
  { title: "FR Mock Paper 3",         subject: "Financial Reporting", due: "Sun 20 Jul, 11:59pm", status: "pending",   submitted: false },
  { title: "AA Practice Question Set 2",subject: "Audit & Assurance", due: "Thu 24 Jul, 11:59pm", status: "pending",   submitted: false },
  { title: "TAX Comprehensive Q&A",   subject: "Taxation",            due: "Fri 25 Jul, 11:59pm", status: "pending",   submitted: false },
  { title: "FR Mock Paper 2",         subject: "Financial Reporting", due: "Jul 6, 2025",          status: "submitted", submitted: true, score: "68/100" },
  { title: "AA Mock Paper 1",         subject: "Audit & Assurance",   due: "Jun 29, 2025",         status: "graded",    submitted: true, score: "71/100" },
];

const statusStyle: Record<string, string> = {
  pending:   "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
  submitted: "bg-[#EFF4FF] text-[#1E3A8A] border-[#DBEAFE]",
  graded:    "bg-[#DCFCE7] text-[#16A34A] border-[#BBF7D0]",
};

export default function AssignmentsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7">
        <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Assignments</h1>
        <p className="text-[#6C757D] text-sm">Submit your assignments and track your scores.</p>
      </div>
      <div className="space-y-4">
        {assignments.map((a) => (
          <div key={a.title} className="bg-white rounded-2xl border border-[#E9ECEF] p-6 hover:shadow-sm transition-shadow">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#EFF4FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[#222222] text-base">{a.title}</h3>
                  <p className="text-xs text-[#ADB5BD] mt-0.5">{a.subject}</p>
                  <p className="text-xs text-[#6C757D] flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" /> Due: {a.due}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {a.score && <span className="font-bold text-[#16A34A] text-sm">{a.score}</span>}
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border capitalize ${statusStyle[a.status]}`}>
                  {a.status}
                </span>
                {!a.submitted && (
                  <button className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-[#152D6E] transition-colors">
                    <Upload className="w-3.5 h-3.5" /> Submit
                  </button>
                )}
                {a.status === "graded" && (
                  <button className="inline-flex items-center gap-1.5 text-[#16A34A] bg-[#DCFCE7] text-xs font-semibold px-4 py-2 rounded-xl">
                    <CheckCircle2 className="w-3.5 h-3.5" /> View Feedback
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
