import type { Metadata } from "next";
import Link from "next/link";
import { Users, BookOpen, ClipboardList, Calendar, TrendingUp, ChevronRight, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = { title: "Tutor Dashboard | PIN Portal" };

const stats = [
  { icon: Users,       label: "Active Students",    value: "94",  color: "#16A34A", bg: "#DCFCE7" },
  { icon: BookOpen,    label: "Subjects Teaching",   value: "3",   color: "#1E3A8A", bg: "#EFF4FF" },
  { icon: ClipboardList,label: "Pending Reviews",   value: "12",  color: "#D97706", bg: "#FFFBEB" },
  { icon: TrendingUp,  label: "Avg. Student Score",  value: "68%", color: "#7C3AED", bg: "#F5F3FF" },
];

const classes = [
  { subject: "Financial Reporting",  students: 32, date: "Sat 19 Jul", time: "10:00am – 1:00pm",  room: "Room A / Online" },
  { subject: "Audit & Assurance",    students: 28, date: "Sat 19 Jul", time: "1:30pm – 4:30pm",   room: "Room A / Online" },
  { subject: "Performance Mgmt.",    students: 34, date: "Mon 21 Jul", time: "6:00pm – 9:00pm",   room: "Online Only" },
];

const pendingAssignments = [
  { title: "FR Mock Paper 3",       submitted: 28, total: 32, due: "Sun 20 Jul" },
  { title: "AA Practice Set 2",     submitted: 19, total: 28, due: "Thu 24 Jul" },
  { title: "PM Case Study — Q3",    submitted: 31, total: 34, due: "Fri 25 Jul" },
];

export default function TutorDashboard() {
  return (
    <div className="p-6 lg:p-8 space-y-7">
      <div>
        <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Good morning, Mrs. Okafor 👋</h1>
        <p className="text-[#6C757D] text-sm">ICAN Skills Level Faculty · Nov/Dec 2025 Diet</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ icon: Icon, label, value, color, bg }) => (
          <div key={label} className="bg-white rounded-2xl border border-[#E9ECEF] p-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: bg }}>
              <Icon className="w-4 h-4" style={{ color }} />
            </div>
            <p className="font-heading font-bold text-[#222222] text-2xl leading-none mb-1">{value}</p>
            <p className="text-[#ADB5BD] text-xs">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming classes */}
        <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-heading font-bold text-[#222222] text-base">Upcoming Classes</h2>
            <Link href="/portal/tutor/attendance" className="text-xs font-semibold text-[#16A34A] flex items-center gap-1">
              View all <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="space-y-4">
            {classes.map((c) => (
              <div key={c.subject} className="flex items-start gap-4 p-4 bg-[#F8F9FA] rounded-xl">
                <div className="w-10 h-10 bg-[#EFF4FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#222222]">{c.subject}</p>
                  <p className="text-xs text-[#ADB5BD] mt-0.5">{c.date} · {c.time}</p>
                  <p className="text-xs text-[#ADB5BD]">{c.room} · {c.students} students</p>
                </div>
                <button className="flex-shrink-0 text-xs font-semibold text-[#16A34A] bg-[#DCFCE7] px-3 py-1.5 rounded-lg hover:bg-[#16A34A] hover:text-white transition-colors">
                  Start
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pending reviews */}
        <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-heading font-bold text-[#222222] text-base">Assignments to Review</h2>
            <Link href="/portal/tutor/assignments" className="text-xs font-semibold text-[#16A34A] flex items-center gap-1">
              View all <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="space-y-4">
            {pendingAssignments.map((a) => (
              <div key={a.title} className="p-4 bg-[#F8F9FA] rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-[#222222]">{a.title}</p>
                  <span className="text-xs text-[#ADB5BD] flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Due {a.due}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-[#E9ECEF] rounded-full overflow-hidden">
                    <div className="h-full bg-[#16A34A] rounded-full" style={{ width: `${(a.submitted / a.total) * 100}%` }} />
                  </div>
                  <span className="text-xs text-[#6C757D] flex-shrink-0">{a.submitted}/{a.total} submitted</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { href: "/portal/tutor/notes",      label: "Upload Notes",   icon: BookOpen,      bg: "#EFF4FF",  color: "#1E3A8A" },
          { href: "/portal/tutor/assignments", label: "Set Assignment", icon: ClipboardList, bg: "#DCFCE7",  color: "#16A34A" },
          { href: "/portal/tutor/attendance",  label: "Take Attendance",icon: CheckCircle2,  bg: "#FFFBEB",  color: "#D97706" },
          { href: "/portal/tutor/questions",   label: "Question Bank",  icon: BookOpen,      bg: "#F5F3FF",  color: "#7C3AED" },
        ].map(({ href, label, icon: Icon, bg, color }) => (
          <Link key={href} href={href}
            className="bg-white rounded-2xl border border-[#E9ECEF] p-5 hover:shadow-sm hover:border-[#DBEAFE] transition-all flex flex-col items-center text-center gap-3 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: bg }}>
              <Icon className="w-5 h-5" style={{ color }} />
            </div>
            <span className="text-xs font-semibold text-[#343A40]">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
