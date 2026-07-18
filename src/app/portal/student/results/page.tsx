import type { Metadata } from "next";
import { TrendingUp, TrendingDown } from "lucide-react";

export const metadata: Metadata = { title: "Results | PIN Student Portal" };

const results = [
  { subject: "Financial Reporting",  type: "Mock Paper 2", score: 68, max: 100, date: "Jul 5, 2025",  status: "pass" },
  { subject: "Audit & Assurance",    type: "Mock Paper 2", score: 71, max: 100, date: "Jul 8, 2025",  status: "pass" },
  { subject: "Taxation",             type: "Mock Paper 1", score: 61, max: 100, date: "Jun 28, 2025", status: "pass" },
  { subject: "Financial Reporting",  type: "Mock Paper 1", score: 55, max: 100, date: "Jun 14, 2025", status: "pass" },
  { subject: "Audit & Assurance",    type: "Mock Paper 1", score: 48, max: 100, date: "Jun 7, 2025",  status: "fail" },
];

export default function ResultsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7">
        <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">My Results</h1>
        <p className="text-[#6C757D] text-sm">Mock examination scores and assessment results.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { l: "Average Score", v: "60.6%", color: "#1E3A8A" },
          { l: "Tests Taken",   v: "5",     color: "#16A34A" },
          { l: "Pass Rate",     v: "80%",   color: "#D97706" },
        ].map(({ l, v, color }) => (
          <div key={l} className="bg-white rounded-2xl border border-[#E9ECEF] p-5">
            <p className="font-heading font-bold text-2xl mb-1" style={{ color }}>{v}</p>
            <p className="text-[#ADB5BD] text-xs">{l}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden">
        <div className="divide-y divide-[#F1F3F5]">
          {results.map((r, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-[#F8F9FA] transition-colors">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${r.status === "pass" ? "bg-[#DCFCE7]" : "bg-red-50"}`}>
                {r.status === "pass" ? <TrendingUp className="w-4 h-4 text-[#16A34A]" /> : <TrendingDown className="w-4 h-4 text-red-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#222222] truncate">{r.subject}</p>
                <p className="text-xs text-[#ADB5BD]">{r.type} · {r.date}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className={`font-bold text-base ${r.status === "pass" ? "text-[#16A34A]" : "text-red-500"}`}>{r.score}/{r.max}</p>
                <p className="text-xs text-[#ADB5BD]">{Math.round((r.score / r.max) * 100)}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
