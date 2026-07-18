import type { Metadata } from "next";
import { HelpCircle, Plus } from "lucide-react";
export const metadata: Metadata = { title: "Question Bank | PIN Tutor Portal" };
const questions = [
  { subject: "Financial Reporting", topic: "IAS 16 PPE", difficulty: "Medium", added: "Jul 8, 2025" },
  { subject: "Financial Reporting", topic: "IFRS 16 Leases", difficulty: "Hard",   added: "Jul 10, 2025" },
  { subject: "Audit & Assurance",   topic: "Audit Evidence", difficulty: "Easy",   added: "Jul 5, 2025" },
  { subject: "Taxation",            topic: "Company Income Tax", difficulty: "Medium", added: "Jun 28, 2025" },
];
const diffColor: Record<string, string> = {
  Easy: "bg-[#DCFCE7] text-[#16A34A]",
  Medium: "bg-[#FFFBEB] text-[#D97706]",
  Hard: "bg-red-50 text-red-600",
};
export default function QuestionBankPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between gap-4 mb-7">
        <div><h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Question Bank</h1>
          <p className="text-[#6C757D] text-sm">Manage CBT practice questions for your subjects.</p></div>
        <button className="inline-flex items-center gap-2 bg-[#16A34A] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-green-700 transition-colors shadow-sm">
          <Plus className="w-4 h-4" /> Add Question
        </button>
      </div>
      <div className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden">
        <div className="divide-y divide-[#F1F3F5]">
          {questions.map((q, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-[#F8F9FA] transition-colors">
              <div className="w-8 h-8 bg-[#EFF4FF] rounded-lg flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-4 h-4 text-[#1E3A8A]" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#222222]">{q.topic}</p>
                <p className="text-xs text-[#ADB5BD]">{q.subject} · Added {q.added}</p>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${diffColor[q.difficulty]}`}>{q.difficulty}</span>
              <button className="text-xs font-semibold text-[#1E3A8A] hover:text-[#152D6E]">Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
