import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
export const metadata: Metadata = { title: "Courses | PIN Admin" };
const courses = [
  { name: "ICAN Foundation", enrolled: 320, tutor: "Mrs. C. Okafor", status: "active", diet: "Nov/Dec 2025" },
  { name: "ICAN Skills",     enrolled: 580, tutor: "Mrs. C. Okafor", status: "active", diet: "Nov/Dec 2025" },
  { name: "ICAN Professional",enrolled: 950,tutor: "Mrs. C. Okafor", status: "active", diet: "Nov/Dec 2025" },
  { name: "ACCA Applied Knowledge", enrolled: 420, tutor: "Mr. B. Fasanya", status: "active", diet: "Mar 2026" },
  { name: "ACCA Strategic Professional", enrolled: 380, tutor: "Mr. B. Fasanya", status: "active", diet: "Sep 2025" },
  { name: "CITN Professional", enrolled: 780, tutor: "Ms. A. Eze", status: "active", diet: "Nov/Dec 2025" },
];
export default function AdminCoursesPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7"><h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Courses</h1></div>
      <div className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#F1F3F5]">
            {["Programme", "Diet", "Lead Tutor", "Enrolled", "Status"].map(h => (
              <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-[#ADB5BD] uppercase tracking-wide">{h}</th>
            ))}
          </tr></thead>
          <tbody className="divide-y divide-[#F1F3F5]">
            {courses.map(c => (
              <tr key={c.name} className="hover:bg-[#F8F9FA]">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-[#1E3A8A]" />
                    <span className="font-semibold text-[#222222]">{c.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-[#6C757D]">{c.diet}</td>
                <td className="px-6 py-4 text-[#6C757D]">{c.tutor}</td>
                <td className="px-6 py-4 font-bold text-[#1E3A8A]">{c.enrolled.toLocaleString()}</td>
                <td className="px-6 py-4"><span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#DCFCE7] text-[#16A34A]">Active</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
