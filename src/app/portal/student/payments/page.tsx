import type { Metadata } from "next";
import { CreditCard, CheckCircle2, Clock, Download, ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Payments | PIN Student Portal" };

const transactions = [
  { ref: "PIN-2025-0847", desc: "Tuition — Jul/Aug 2025 (Instalment 2/3)", amount: "₦38,333", date: "Jul 3, 2025",  status: "paid" },
  { ref: "PIN-2025-0634", desc: "Tuition — May/Jun 2025 (Instalment 1/3)", amount: "₦38,333", date: "May 1, 2025", status: "paid" },
  { ref: "PIN-2025-0512", desc: "Study Materials Pack — Skills Level",      amount: "₦15,000", date: "Apr 15, 2025", status: "paid" },
  { ref: "PIN-2025-0398", desc: "Registration Fee — Nov/Dec 2025 Diet",     amount: "₦10,000", date: "Mar 10, 2025", status: "paid" },
];

const upcoming = [
  { desc: "Tuition — Sep/Oct 2025 (Instalment 3/3)", amount: "₦38,334", due: "Sep 1, 2025" },
];

export default function PaymentsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7">
        <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Payments</h1>
        <p className="text-[#6C757D] text-sm">View your payment history and make new payments.</p>
      </div>

      {/* Balance cards */}
      <div className="grid sm:grid-cols-3 gap-5 mb-8">
        {[
          { label: "Total Paid",      value: "₦101,666", icon: CheckCircle2, color: "#16A34A", bg: "#DCFCE7" },
          { label: "Outstanding",     value: "₦38,334",  icon: Clock,        color: "#D97706", bg: "#FFFBEB" },
          { label: "Payment Plan",    value: "3 Instalments", icon: CreditCard, color: "#1E3A8A", bg: "#EFF4FF" },
        ].map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-2xl border border-[#E9ECEF] p-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: bg }}>
              <Icon className="w-5 h-5" style={{ color }} />
            </div>
            <p className="font-heading font-bold text-[#222222] text-xl mb-0.5">{value}</p>
            <p className="text-[#ADB5BD] text-xs">{label}</p>
          </div>
        ))}
      </div>

      {/* Upcoming payment */}
      {upcoming.map((u) => (
        <div key={u.desc} className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5 mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-[#92600A] text-sm mb-0.5">{u.desc}</p>
            <p className="text-[#92600A] text-xs">Due {u.due} · {u.amount}</p>
          </div>
          <button className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F4C430] text-[#152D6E] font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-[#D4A820] transition-colors">
            Pay Now <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}

      {/* Transaction history */}
      <div className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#F1F3F5] flex items-center justify-between">
          <h2 className="font-heading font-bold text-[#222222] text-base">Payment History</h2>
        </div>
        <div className="divide-y divide-[#F1F3F5]">
          {transactions.map((t) => (
            <div key={t.ref} className="flex items-center gap-4 px-6 py-4 hover:bg-[#F8F9FA] transition-colors">
              <div className="w-9 h-9 bg-[#DCFCE7] rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#222222] truncate">{t.desc}</p>
                <p className="text-xs text-[#ADB5BD] mt-0.5">{t.ref} · {t.date}</p>
              </div>
              <span className="font-bold text-[#222222] text-sm flex-shrink-0">{t.amount}</span>
              <span className="text-xs font-semibold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-1 rounded-full flex-shrink-0">Paid</span>
              <button className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#F1F3F5] flex items-center justify-center text-[#6C757D] hover:bg-[#EFF4FF] hover:text-[#1E3A8A] transition-all">
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
