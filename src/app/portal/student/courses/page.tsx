import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ChevronRight } from "lucide-react";

export const metadata: Metadata = { title: "My Courses | PIN Student Portal" };

const courses = [
  { id: 1, name: "Financial Reporting",    level: "ICAN Skills", progress: 72, nextClass: "Sat 19 Jul, 10:00am", tutor: "Mrs. C. Okafor",   status: "active" },
  { id: 2, name: "Audit & Assurance",      level: "ICAN Skills", progress: 45, nextClass: "Sat 19 Jul, 1:00pm",  tutor: "Mrs. C. Okafor",   status: "active" },
  { id: 3, name: "Taxation",               level: "ICAN Skills", progress: 60, nextClass: "Mon 21 Jul, 6:00pm",  tutor: "Ms. Amaka Eze",    status: "active" },
  { id: 4, name: "Performance Management", level: "ICAN Skills", progress: 0,  nextClass: "Coming soon",          tutor: "Mr. B. Fasanya",   status: "upcoming" },
];

export default function MyCoursesPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7">
        <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">My Courses</h1>
        <p className="text-[#6C757D] text-sm">ICAN Skills Level · Nov/Dec 2025 Diet</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {courses.map((c) => (
          <div key={c.id} className="bg-white rounded-2xl border border-[#E9ECEF] p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 bg-[#EFF4FF] rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[#222222] text-base">{c.name}</h3>
                <p className="text-xs text-[#ADB5BD]">{c.level} · {c.tutor}</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-[#6C757D] font-medium">Progress</span>
                <span className="font-bold text-[#1E3A8A]">{c.progress}%</span>
              </div>
              <div className="h-2 bg-[#F1F3F5] rounded-full overflow-hidden">
                <div className="h-full bg-[#1E3A8A] rounded-full" style={{ width: `${c.progress}%` }} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-[#ADB5BD] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {c.nextClass}
              </p>
              <Link href="/portal/student/materials" className="text-xs font-semibold text-[#1E3A8A] flex items-center gap-1 hover:text-[#152D6E]">
                Materials <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
