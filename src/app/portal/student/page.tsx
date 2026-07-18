import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen, FileText, Monitor, Calendar, CreditCard, Award,
  TrendingUp, Clock, CheckCircle2, AlertCircle, ChevronRight,
} from "lucide-react";

export const metadata: Metadata = { title: "Student Dashboard | PIN Portal" };

const quickStats = [
  { icon: BookOpen,   label: "Enrolled Courses",  value: "3",    color: "#1E3A8A", bg: "#EFF4FF" },
  { icon: TrendingUp, label: "Avg. Mock Score",    value: "68%",  color: "#16A34A", bg: "#DCFCE7" },
  { icon: FileText,   label: "Materials Downloaded", value: "12", color: "#D97706", bg: "#FFFBEB" },
  { icon: Award,      label: "Certificates Earned", value: "1",   color: "#7C3AED", bg: "#F5F3FF" },
];

const myCourses = [
  { name: "ICAN — Financial Reporting",         level: "Skills Level",   progress: 72, nextClass: "Sat 19 Jul, 10:00am" },
  { name: "ICAN — Audit & Assurance",           level: "Skills Level",   progress: 45, nextClass: "Sat 19 Jul, 1:00pm" },
  { name: "ICAN — Taxation",                    level: "Skills Level",   progress: 60, nextClass: "Mon 21 Jul, 6:00pm" },
];

const recentActivity = [
  { type: "material", text: "New study note uploaded: FR Chapter 7 — Leases", time: "2 hours ago" },
  { type: "assignment", text: "Assignment due: FR Mock Paper 3 — Due tomorrow", time: "Today" },
  { type: "result", text: "Mock result posted: AA Practice Paper 2 — 71%", time: "Yesterday" },
  { type: "payment", text: "Payment confirmed for July–August tuition", time: "3 days ago" },
];

const upcoming = [
  { subject: "Financial Reporting",  type: "Class",       date: "Sat 19 Jul", time: "10:00am" },
  { subject: "Audit & Assurance",    type: "Class",       date: "Sat 19 Jul", time: "1:00pm" },
  { subject: "FR Mock Paper 3",      type: "Assignment",  date: "Sun 20 Jul", time: "11:59pm" },
  { subject: "Taxation",             type: "Class",       date: "Mon 21 Jul", time: "6:00pm" },
];

export default function StudentDashboard() {
  return (
    <div className="p-6 lg:p-8 space-y-7">
      {/* Welcome */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">
            Good morning, Adaeze 👋
          </h1>
          <p className="text-[#6C757D] text-sm">
            ICAN Skills Level · Nov/Dec 2025 Diet
          </p>
        </div>
        <Link
          href="/portal/student/cbt"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F4C430] text-[#152D6E] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-[#D4A820] transition-colors shadow-sm"
        >
          <Monitor className="w-4 h-4" />
          Start CBT Practice
        </Link>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map(({ icon: Icon, label, value, color, bg }) => (
          <div key={label} className="bg-white rounded-2xl border border-[#E9ECEF] p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: bg }}>
                <Icon className="w-4 h-4" style={{ color }} />
              </div>
            </div>
            <p className="font-heading font-bold text-[#222222] text-2xl leading-none mb-1">{value}</p>
            <p className="text-[#ADB5BD] text-xs font-medium">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
        {/* My courses */}
        <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-heading font-bold text-[#222222] text-base">My Courses</h2>
            <Link href="/portal/student/courses" className="text-xs font-semibold text-[#1E3A8A] hover:text-[#152D6E] flex items-center gap-1">
              View all <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="space-y-4">
            {myCourses.map((c) => (
              <div key={c.name} className="group">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#222222] truncate group-hover:text-[#1E3A8A] transition-colors">
                      {c.name}
                    </p>
                    <p className="text-xs text-[#ADB5BD] flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3 h-3" />
                      Next: {c.nextClass}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#1E3A8A] flex-shrink-0">{c.progress}%</span>
                </div>
                <div className="h-1.5 bg-[#F1F3F5] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1E3A8A] rounded-full transition-all duration-700"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming schedule */}
        <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-heading font-bold text-[#222222] text-base">Upcoming</h2>
            <Link href="/portal/student/timetable" className="text-xs font-semibold text-[#1E3A8A] hover:text-[#152D6E] flex items-center gap-1">
              Timetable <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="space-y-3">
            {upcoming.map((u) => (
              <div key={`${u.subject}-${u.date}`} className="flex items-start gap-3 p-3 bg-[#F8F9FA] rounded-xl">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${u.type === "Assignment" ? "bg-[#F4C430]" : "bg-[#1E3A8A]"}`} />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#222222] leading-tight">{u.subject}</p>
                  <p className="text-xs text-[#ADB5BD] mt-0.5">{u.type} · {u.date} · {u.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts + Recent activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Alert */}
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#92600A] text-sm mb-1">Assignment Due Tomorrow</p>
              <p className="text-[#92600A] text-xs leading-relaxed">
                Financial Reporting Mock Paper 3 is due by 11:59pm on Sunday 20 July.
                Ensure you submit before the deadline.
              </p>
              <Link href="/portal/student/assignments"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D97706] mt-2 hover:text-[#92600A]">
                View Assignment <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6">
          <h2 className="font-heading font-bold text-[#222222] text-base mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((a) => (
              <div key={a.text} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-[#343A40] leading-snug">{a.text}</p>
                  <p className="text-xs text-[#ADB5BD] mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { href: "/portal/student/materials",    icon: FileText,   label: "Study Materials",  color: "#1E3A8A", bg: "#EFF4FF" },
          { href: "/portal/student/cbt",          icon: Monitor,    label: "CBT Practice",     color: "#7C3AED", bg: "#F5F3FF" },
          { href: "/portal/student/timetable",    icon: Calendar,   label: "My Timetable",     color: "#D97706", bg: "#FFFBEB" },
          { href: "/portal/student/certificates", icon: Award,      label: "Certificates",     color: "#16A34A", bg: "#DCFCE7" },
        ].map(({ href, icon: Icon, label, color, bg }) => (
          <Link
            key={href}
            href={href}
            className="bg-white rounded-2xl border border-[#E9ECEF] p-5 hover:shadow-sm hover:border-[#DBEAFE] transition-all group flex flex-col items-center text-center gap-3"
          >
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
