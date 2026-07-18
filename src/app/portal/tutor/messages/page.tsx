import type { Metadata } from "next";
import { MessageSquare } from "lucide-react";
export const metadata: Metadata = { title: "Messages | PIN Tutor Portal" };
const messages = [
  { from: "Adaeze Okonkwo", preview: "Good morning Ma, please can you explain the treatment of...", time: "9:41am", unread: true },
  { from: "Emeka Eze",       preview: "Thank you for the feedback on my assignment. I will...",   time: "Yesterday", unread: false },
  { from: "Blessing Okafor", preview: "I won't be able to attend the Saturday class...",          time: "Yesterday", unread: true },
];
export default function MessagesPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7"><h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Messages</h1></div>
      <div className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden max-w-2xl">
        <div className="divide-y divide-[#F1F3F5]">
          {messages.map((m) => (
            <div key={m.from} className={`flex items-start gap-4 px-6 py-4 hover:bg-[#F8F9FA] cursor-pointer transition-colors ${m.unread ? "bg-[#EFF4FF]/40" : ""}`}>
              <div className="w-9 h-9 bg-[#EFF4FF] rounded-xl flex items-center justify-center text-[#1E3A8A] font-bold text-xs flex-shrink-0">
                {m.from.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <p className={`text-sm font-semibold text-[#222222] ${m.unread ? "font-bold" : ""}`}>{m.from}</p>
                  <span className="text-xs text-[#ADB5BD]">{m.time}</span>
                </div>
                <p className="text-xs text-[#6C757D] truncate">{m.preview}</p>
              </div>
              {m.unread && <span className="w-2 h-2 rounded-full bg-[#1E3A8A] flex-shrink-0 mt-1.5" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
