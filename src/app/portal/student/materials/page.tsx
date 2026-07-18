import type { Metadata } from "next";
import { FileText, Download, BookOpen, Video, FileQuestion, Search } from "lucide-react";

export const metadata: Metadata = { title: "Study Materials | PIN Student Portal" };

const materials = [
  { category: "Financial Reporting", items: [
    { name: "FR Study Notes — Complete",         type: "PDF",     size: "4.2 MB", date: "Jul 10, 2025",  icon: FileText, new: true },
    { name: "FR Chapter 7 — Leases (IFRS 16)",   type: "PDF",     size: "1.1 MB", date: "Jul 14, 2025",  icon: FileText, new: true },
    { name: "FR Lecture Recording — Week 8",      type: "Video",   size: "380 MB", date: "Jul 12, 2025",  icon: Video,    new: false },
    { name: "FR Past Questions 2022–2024",        type: "PDF",     size: "2.8 MB", date: "Jul 1, 2025",   icon: FileQuestion, new: false },
  ]},
  { category: "Audit & Assurance", items: [
    { name: "AA Study Notes — Complete",         type: "PDF",     size: "3.9 MB", date: "Jul 5, 2025",   icon: FileText, new: false },
    { name: "AA Lecture Recording — Week 6",     type: "Video",   size: "310 MB", date: "Jul 8, 2025",   icon: Video,    new: false },
    { name: "AA Practice Questions Set 2",       type: "PDF",     size: "1.5 MB", date: "Jun 28, 2025",  icon: FileQuestion, new: false },
  ]},
  { category: "Taxation", items: [
    { name: "TAX Study Notes — Updated 2025",    type: "PDF",     size: "5.1 MB", date: "Jul 3, 2025",   icon: FileText, new: false },
    { name: "TAX Lecture Recording — Week 7",    type: "Video",   size: "290 MB", date: "Jul 10, 2025",  icon: Video,    new: false },
    { name: "Nigerian Tax Legislation Summary",  type: "PDF",     size: "2.2 MB", date: "Jun 20, 2025",  icon: BookOpen, new: false },
  ]},
];

const typeColor: Record<string, string> = {
  PDF: "bg-[#EFF4FF] text-[#1E3A8A]",
  Video: "bg-[#F5F3FF] text-[#7C3AED]",
};

export default function MaterialsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between gap-4 mb-7">
        <div>
          <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Study Materials</h1>
          <p className="text-[#6C757D] text-sm">All your notes, recordings, and practice questions.</p>
        </div>
        <div className="relative hidden sm:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADB5BD]" />
          <input type="text" placeholder="Search materials..." className="form-input pl-10 w-64 text-sm" />
        </div>
      </div>

      <div className="space-y-8">
        {materials.map((section) => (
          <div key={section.category}>
            <h2 className="font-heading font-bold text-[#222222] text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
              {section.category}
            </h2>
            <div className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden">
              <div className="divide-y divide-[#F1F3F5]">
                {section.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-4 px-6 py-4 hover:bg-[#F8F9FA] transition-colors group">
                    <div className="w-10 h-10 bg-[#F1F3F5] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#6C757D]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-[#222222] truncate group-hover:text-[#1E3A8A] transition-colors">
                          {item.name}
                        </p>
                        {item.new && (
                          <span className="text-[10px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-full flex-shrink-0">NEW</span>
                        )}
                      </div>
                      <p className="text-xs text-[#ADB5BD] mt-0.5">{item.size} · Added {item.date}</p>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${typeColor[item.type] ?? "bg-[#F1F3F5] text-[#6C757D]"}`}>
                      {item.type}
                    </span>
                    <button className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#EFF4FF] flex items-center justify-center text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
