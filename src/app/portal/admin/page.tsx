"use client";

import Link from "next/link";
import {
  Users, UserCheck, CreditCard, BookOpen, TrendingUp,
  TrendingDown, ChevronRight, AlertCircle, CheckCircle2,
  UserPlus, DollarSign,
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const kpis = [
  { icon: Users,      label: "Total Students",    value: "5,241",  change: "+127 this month",  up: true,  color: "#1E3A8A", bg: "#EFF4FF" },
  { icon: UserCheck,  label: "Active Tutors",      value: "15",     change: "3 subjects each",  up: true,  color: "#16A34A", bg: "#DCFCE7" },
  { icon: CreditCard, label: "Revenue (Jul)",      value: "₦4.2M",  change: "+18% vs Jun",      up: true,  color: "#D97706", bg: "#FFFBEB" },
  { icon: BookOpen,   label: "Active Programmes",  value: "9",      change: "Nov/Dec 2025 diet", up: true,  color: "#7C3AED", bg: "#F5F3FF" },
];

const enrollmentData = [
  { month: "Jan", students: 320 },
  { month: "Feb", students: 380 },
  { month: "Mar", students: 410 },
  { month: "Apr", students: 395 },
  { month: "May", students: 450 },
  { month: "Jun", students: 520 },
  { month: "Jul", students: 580 },
];

const revenueData = [
  { month: "Jan", revenue: 2.1 },
  { month: "Feb", revenue: 2.4 },
  { month: "Mar", revenue: 2.8 },
  { month: "Apr", revenue: 2.6 },
  { month: "May", revenue: 3.1 },
  { month: "Jun", revenue: 3.6 },
  { month: "Jul", revenue: 4.2 },
];

const recentRegistrations = [
  { name: "Funmilayo Abiodun", programme: "ICAN Skills",       date: "Today, 9:41am",   status: "pending" },
  { name: "Chukwuemeka Eze",   programme: "ACCA Applied Skills","date": "Today, 8:15am",   status: "active" },
  { name: "Blessing Okoro",    programme: "CITN Qualifying",    date: "Yesterday",        status: "active" },
  { name: "Tunde Fashola",     programme: "ATS Foundation",     date: "Yesterday",        status: "active" },
  { name: "Ngozi Nwachukwu",   programme: "Diploma in IFRS",   date: "2 days ago",       status: "pending" },
];

const alerts = [
  { type: "warning", msg: "3 student payments overdue for more than 7 days" },
  { type: "info",    msg: "ICAN Nov/Dec 2025 registration closes in 14 days" },
  { type: "success", msg: "12 new applications received this week" },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 lg:p-8 space-y-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Admin Overview</h1>
          <p className="text-[#6C757D] text-sm">PIN Consultancy Services · {new Date().toLocaleDateString("en-NG", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
        <Link href="/portal/admin/students" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#152D6E] transition-colors shadow-sm">
          <UserPlus className="w-4 h-4" /> Add Student
        </Link>
      </div>

      {/* Alerts */}
      <div className="space-y-2">
        {alerts.map((a) => (
          <div key={a.msg} className={`flex items-start gap-3 p-4 rounded-xl border text-sm font-medium ${
            a.type === "warning" ? "bg-[#FFFBEB] border-[#FDE68A] text-[#92600A]" :
            a.type === "info"    ? "bg-[#EFF4FF] border-[#DBEAFE] text-[#1E3A8A]" :
                                   "bg-[#DCFCE7] border-[#BBF7D0] text-[#16A34A]"
          }`}>
            {a.type === "success" ? <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" /> : <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
            {a.msg}
          </div>
        ))}
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map(({ icon: Icon, label, value, change, up, color, bg }) => (
          <div key={label} className="bg-white rounded-2xl border border-[#E9ECEF] p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: bg }}>
                <Icon className="w-4 h-4" style={{ color }} />
              </div>
              {up ? <TrendingUp className="w-4 h-4 text-[#16A34A]" /> : <TrendingDown className="w-4 h-4 text-red-500" />}
            </div>
            <p className="font-heading font-bold text-[#222222] text-2xl leading-none mb-1">{value}</p>
            <p className="text-[#ADB5BD] text-xs font-medium">{label}</p>
            <p className={`text-xs mt-1 font-medium ${up ? "text-[#16A34A]" : "text-red-500"}`}>{change}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Enrolment chart */}
        <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-heading font-bold text-[#222222] text-base">Monthly Enrolments</h2>
            <span className="text-xs text-[#16A34A] font-semibold">+81% YTD</span>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={enrollmentData} margin={{ top: 0, right: 0, left: -30, bottom: 0 }}>
              <defs>
                <linearGradient id="enrolGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1E3A8A" stopOpacity={0.12} />
                  <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F3F5" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#ADB5BD" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#ADB5BD" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ border: "1px solid #E9ECEF", borderRadius: 12, fontSize: 12 }} />
              <Area type="monotone" dataKey="students" stroke="#1E3A8A" strokeWidth={2} fill="url(#enrolGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue chart */}
        <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-heading font-bold text-[#222222] text-base">Monthly Revenue (₦M)</h2>
            <span className="text-xs text-[#16A34A] font-semibold">+100% YTD</span>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={revenueData} margin={{ top: 0, right: 0, left: -30, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F3F5" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#ADB5BD" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#ADB5BD" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ border: "1px solid #E9ECEF", borderRadius: 12, fontSize: 12 }} formatter={(v) => [`₦${v}M`, "Revenue"]} />
              <Bar dataKey="revenue" fill="#F4C430" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent registrations */}
      <div className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#F1F3F5] flex items-center justify-between">
          <h2 className="font-heading font-bold text-[#222222] text-base">Recent Registrations</h2>
          <Link href="/portal/admin/students" className="text-xs font-semibold text-[#1E3A8A] flex items-center gap-1">
            View all <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="divide-y divide-[#F1F3F5]">
          {recentRegistrations.map((r) => (
            <div key={r.name} className="flex items-center gap-4 px-6 py-4 hover:bg-[#F8F9FA] transition-colors">
              <div className="w-8 h-8 bg-[#EFF4FF] rounded-lg flex items-center justify-center text-[#1E3A8A] font-bold text-xs flex-shrink-0">
                {r.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#222222] truncate">{r.name}</p>
                <p className="text-xs text-[#ADB5BD]">{r.programme} · {r.date}</p>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                r.status === "active" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#FFFBEB] text-[#D97706]"
              }`}>
                {r.status === "active" ? "Active" : "Pending"}
              </span>
              <button className="text-xs font-semibold text-[#1E3A8A] hover:text-[#152D6E] flex-shrink-0">
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Programme breakdown */}
      <div className="bg-white rounded-2xl border border-[#E9ECEF] p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-heading font-bold text-[#222222] text-base">Enrolment by Programme</h2>
          <Link href="/portal/admin/reports" className="text-xs font-semibold text-[#1E3A8A] flex items-center gap-1">
            Full Report <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="space-y-4">
          {[
            { name: "ICAN (All Levels)", enrolled: 1850, pct: 35 },
            { name: "ACCA (All Levels)", enrolled: 1200, pct: 23 },
            { name: "CITN",              enrolled: 780,  pct: 15 },
            { name: "ATS",               enrolled: 650,  pct: 12 },
            { name: "CISA",              enrolled: 420,  pct: 8 },
            { name: "Diploma in IFRS",   enrolled: 210,  pct: 4 },
            { name: "Other",             enrolled: 131,  pct: 3 },
          ].map((p) => (
            <div key={p.name}>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-medium text-[#343A40]">{p.name}</span>
                <span className="text-[#6C757D]">{p.enrolled.toLocaleString()} students · {p.pct}%</span>
              </div>
              <div className="h-2 bg-[#F1F3F5] rounded-full overflow-hidden">
                <div className="h-full bg-[#1E3A8A] rounded-full transition-all duration-700" style={{ width: `${p.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
