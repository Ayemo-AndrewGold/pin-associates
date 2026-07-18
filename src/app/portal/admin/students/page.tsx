import type { Metadata } from "next";
import { Search, UserPlus } from "lucide-react";
export const metadata: Metadata = { title: "Students | PIN Admin" };
const students = [
  { name: "Adaeze Okonkwo",  programme: "ICAN Skills",  regDate: "Jan 15, 2025", status: "active",  balance: "₦0" },
  { name: "Emeka Nwosu",     programme: "CITN Pro",      regDate: "Jan 10, 2025", status: "active",  balance: "₦0" },
  { name: "Chisom Ejike",    programme: "ACCA Strategic",regDate: "Feb 2, 2025",  status: "active",  balance: "₦38,334" },
  { name: "Blessing Okafor", programme: "ATS",           regDate: "Mar 5, 2025",  status: "pending", balance: "₦65,000" },
  { name: "Tunde Fashola",   programme: "ICAN Foundation",regDate:"Mar 20, 2025", status: "active",  balance: "₦0" },
];
export default function AdminStudentsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between gap-4 mb-7">
        <div><h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Students</h1>
          <p className="text-[#6C757D] text-sm">5,241 total enrolled students</p></div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADB5BD]" />
            <input type="text" placeholder="Search students..." className="form-input pl-10 w-64 text-sm" />
          </div>
          <button className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#152D6E] shadow-sm">
            <UserPlus className="w-4 h-4" /> Add Student
          </button>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-[#E9ECEF] overflow-x-auto">
        <table className="w-full text-sm min-w-[600px]">
          <thead><tr className="border-b border-[#F1F3F5]">
            {["Student", "Programme", "Registered", "Balance", "Status", "Action"].map(h => (
              <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-[#ADB5BD] uppercase tracking-wide">{h}</th>
            ))}
          </tr></thead>
          <tbody className="divide-y divide-[#F1F3F5]">
            {students.map((s) => (
              <tr key={s.name} className="hover:bg-[#F8F9FA]">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#EFF4FF] rounded-lg flex items-center justify-center text-[#1E3A8A] font-bold text-xs">
                      {s.name.split(" ").map(n => n[0]).join("").slice(0,2)}
                    </div>
                    <span className="font-semibold text-[#222222]">{s.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-[#6C757D]">{s.programme}</td>
                <td className="px-6 py-4 text-[#6C757D]">{s.regDate}</td>
                <td className="px-6 py-4"><span className={s.balance === "₦0" ? "text-[#16A34A] font-semibold" : "text-red-500 font-semibold"}>{s.balance}</span></td>
                <td className="px-6 py-4"><span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.status === "active" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#FFFBEB] text-[#D97706]"}`}>{s.status}</span></td>
                <td className="px-6 py-4"><button className="text-xs font-semibold text-[#1E3A8A] hover:text-[#152D6E]">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
