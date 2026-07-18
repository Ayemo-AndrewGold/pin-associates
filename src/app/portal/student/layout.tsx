"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, BookOpen, FileText, ClipboardList, Monitor,
  BarChart2, Calendar, CreditCard, Award, Settings, User,
  GraduationCap, Bell, LogOut, Menu, X, ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/portal/student",              icon: LayoutDashboard, label: "Dashboard" },
  { href: "/portal/student/courses",      icon: BookOpen,        label: "My Courses" },
  { href: "/portal/student/materials",    icon: FileText,        label: "Study Materials" },
  { href: "/portal/student/assignments",  icon: ClipboardList,   label: "Assignments" },
  { href: "/portal/student/cbt",          icon: Monitor,         label: "CBT Practice" },
  { href: "/portal/student/results",      icon: BarChart2,       label: "Results" },
  { href: "/portal/student/timetable",    icon: Calendar,        label: "Timetable" },
  { href: "/portal/student/payments",     icon: CreditCard,      label: "Payments" },
  { href: "/portal/student/certificates", icon: Award,           label: "Certificates" },
  { href: "/portal/student/profile",      icon: User,            label: "Profile" },
  { href: "/portal/student/settings",     icon: Settings,        label: "Settings" },
];

export default function StudentPortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden">
      {/* Sidebar */}
      <>
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside
          className={cn(
            "fixed lg:static inset-y-0 left-0 z-40 w-64 portal-sidebar flex flex-col transition-transform duration-300",
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          )}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
            <div className="w-9 h-9 bg-[#F4C430] rounded-xl flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-[#152D6E]" strokeWidth={2.5} />
            </div>
            <div className="leading-none min-w-0">
              <span className="block font-heading font-bold text-white text-sm truncate">PIN Consultancy</span>
              <span className="block text-[10px] text-white/40 tracking-wide mt-0.5">Student Portal</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="ml-auto lg:hidden text-white/40 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Student profile summary */}
          <div className="px-5 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#F4C430] rounded-xl flex items-center justify-center text-[#152D6E] font-bold text-xs flex-shrink-0">
                AO
              </div>
              <div className="min-w-0">
                <p className="text-white text-xs font-semibold truncate">Adaeze Okonkwo</p>
                <p className="text-white/40 text-[10px] truncate">ICAN — Skills Level</p>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 py-4 overflow-y-auto space-y-0.5">
            {navItems.map(({ href, icon: Icon, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn("sidebar-nav-item", active && "active")}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{label}</span>
                  {active && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-3 border-t border-white/10">
            <Link
              href="/portal/login"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:text-white hover:bg-white/10 transition-all text-sm font-medium mx-1"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Link>
          </div>
        </aside>
      </>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-[#E9ECEF] px-6 h-16 flex items-center gap-4 flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg text-[#495057] hover:bg-[#F1F3F5]"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1" />
          <button className="relative p-2 rounded-lg text-[#495057] hover:bg-[#F1F3F5] transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#F4C430] rounded-full" />
          </button>
          <div className="w-px h-6 bg-[#E9ECEF]" />
          <Link href="/portal/student/profile" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#1E3A8A] rounded-lg flex items-center justify-center text-white font-bold text-xs">
              AO
            </div>
            <span className="text-sm font-medium text-[#222222] hidden sm:block">Adaeze Okonkwo</span>
          </Link>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
