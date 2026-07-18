import type { Metadata } from "next";
import { DollarSign, CheckCircle2, Clock, Download } from "lucide-react";
export const metadata: Metadata = { title: "Payments | PIN Admin" };
const transactions = [
  { student: "Adaeze Okonkwo", programme: "ICAN Skills",   amount: "₦38,333", date: "Jul 3, 2025",  ref: "PIN-2025-0847", status: "completed" },
  { student: "Emeka Nwosu",    programme: "CITN Pro",       amount: "₦50,000", date: "Jul 2, 2025",  ref: "PIN-2025-0846", status: "completed" },
  { student: "Chisom Ejike",   programme: "ACCA Strategic", amount: "₦57,500", date: "Jul 1, 2025",  ref: "PIN-2025-0845", status: "completed" },
  { student: "Blessing Okafor",programme: "ATS",            amount: "₦32,500", date: "Jul 5, 2025",  ref: "PIN-2025-0848", status: "pending" },
];
const total = "₦4,218,500"; const monthly = "₦4,218,500"; const overdue = "₦312,500";
export default function AdminPaymentsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7"><h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Payments</h1>
        <p className="text-[#6C757D] text-sm">Revenue and payment tracking.</p></div>
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[{ l: "July Revenue", v: monthly, icon: DollarSign, color: "#16A34A", bg: "#DCFCE7" },
          { l: "Collected", v: "₦3,906,000", icon: CheckCircle2, color: "#1E3A8A", bg: "#EFF4FF" },
          { l: "Overdue", v: overdue, icon: Clock, color: "#D97706", bg: "#FFFBEB" }
        ].map(({ l, v, icon: Icon, color, bg }) => (
          <div key={l} className="bg-white rounded-2xl border border-[#E9ECEF] p-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: bg }}>
              <Icon className="w-4 h-4" style={{ color }} />
            </div>
            <p className="font-heading font-bold text-[#222222] text-xl">{v}</p>
            <p className="text-[#ADB5BD] text-xs">{l}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#F1F3F5] flex items-center justify-between">
          <h2 className="font-heading font-bold text-[#222222] text-base">Recent Transactions</h2>
          <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A] border border-[#1E3A8A]/20 px-3 py-1.5 rounded-lg hover:bg-[#EFF4FF]">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
        </div>
        <div className="divide-y divide-[#F1F3F5]">
          {transactions.map((t) => (
            <div key={t.ref} className="flex items-center gap-4 px-6 py-4 hover:bg-[#F8F9FA]">
              <div className="w-8 h-8 bg-[#EFF4FF] rounded-lg flex items-center justify-center text-[#1E3A8A] font-bold text-xs flex-shrink-0">
                {t.student.split(" ").map(n => n[0]).join("").slice(0,2)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#222222]">{t.student}</p>
                <p className="text-xs text-[#ADB5BD]">{t.programme} · {t.ref} · {t.date}</p>
              </div>
              <span className="font-bold text-[#222222] text-sm">{t.amount}</span>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${t.status === "completed" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#FFFBEB] text-[#D97706]"}`}>{t.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
