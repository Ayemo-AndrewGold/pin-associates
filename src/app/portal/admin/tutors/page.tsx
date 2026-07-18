import type { Metadata } from "next";
export const metadata: Metadata = { title: "Tutors | PIN Admin" };
const tutors = [
  { name: "Mrs. Chidinma Okafor", subjects: "FR, AA", students: 60, since: "2015", status: "active" },
  { name: "Ms. Amaka Eze",        subjects: "Taxation",  students: 34, since: "2017", status: "active" },
  { name: "Mr. Babatunde Fasanya",subjects: "ACCA",     students: 45, since: "2016", status: "active" },
  { name: "Mr. Ibrahim Suleiman", subjects: "CISA",     students: 22, since: "2020", status: "active" },
];
export default function AdminTutorsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7"><h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Tutors</h1></div>
      <div className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#F1F3F5]">
            {["Tutor", "Subjects", "Active Students", "Since", "Status"].map(h => (
              <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-[#ADB5BD] uppercase tracking-wide">{h}</th>
            ))}
          </tr></thead>
          <tbody className="divide-y divide-[#F1F3F5]">
            {tutors.map(t => (
              <tr key={t.name} className="hover:bg-[#F8F9FA]">
                <td className="px-6 py-4 font-semibold text-[#222222]">{t.name}</td>
                <td className="px-6 py-4 text-[#6C757D]">{t.subjects}</td>
                <td className="px-6 py-4 font-bold text-[#1E3A8A]">{t.students}</td>
                <td className="px-6 py-4 text-[#6C757D]">{t.since}</td>
                <td className="px-6 py-4"><span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#DCFCE7] text-[#16A34A]">Active</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
