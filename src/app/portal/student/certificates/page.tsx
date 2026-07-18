import type { Metadata } from "next";
import { Award, Download, Lock } from "lucide-react";

export const metadata: Metadata = { title: "Certificates | PIN Student Portal" };

const certs = [
  { name: "ATS Final — Certificate of Achievement", issued: "Mar 2023", available: true },
  { name: "ICAN Foundation Level — Completion",      issued: "Nov 2023", available: true },
  { name: "ICAN Skills Level — Completion",          issued: "Pending",  available: false },
];

export default function CertificatesPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7">
        <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Certificates</h1>
        <p className="text-[#6C757D] text-sm">Your earned qualifications and achievement certificates.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c) => (
          <div key={c.name} className={`rounded-2xl border p-6 ${c.available ? "bg-white border-[#E9ECEF] hover:shadow-md" : "bg-[#F8F9FA] border-[#E9ECEF] opacity-70"} transition-shadow`}>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${c.available ? "bg-[#FFFBEB]" : "bg-[#F1F3F5]"}`}>
              {c.available ? <Award className="w-6 h-6 text-[#D97706]" /> : <Lock className="w-6 h-6 text-[#ADB5BD]" />}
            </div>
            <h3 className="font-heading font-bold text-[#222222] text-sm mb-1 leading-snug">{c.name}</h3>
            <p className="text-xs text-[#ADB5BD] mb-4">{c.issued}</p>
            {c.available ? (
              <button className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E3A8A] bg-[#EFF4FF] px-4 py-2 rounded-lg hover:bg-[#1E3A8A] hover:text-white transition-all">
                <Download className="w-3.5 h-3.5" /> Download PDF
              </button>
            ) : (
              <span className="text-xs font-medium text-[#ADB5BD]">Available after completion</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
