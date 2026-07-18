import type { Metadata } from "next";

export const metadata: Metadata = { title: "Timetable | PIN Student Portal" };

const schedule = [
  { day: "Saturday, 19 July", classes: [
    { time: "10:00am – 1:00pm", subject: "Financial Reporting", tutor: "Mrs. C. Okafor", room: "Room A / Online" },
    { time: "1:30pm – 4:30pm",  subject: "Audit & Assurance",  tutor: "Mrs. C. Okafor", room: "Room A / Online" },
  ]},
  { day: "Monday, 21 July", classes: [
    { time: "6:00pm – 9:00pm", subject: "Taxation", tutor: "Ms. Amaka Eze", room: "Online Only" },
  ]},
  { day: "Wednesday, 23 July", classes: [
    { time: "6:00pm – 9:00pm", subject: "Financial Reporting (Revision)", tutor: "Mrs. C. Okafor", room: "Online Only" },
  ]},
  { day: "Saturday, 26 July", classes: [
    { time: "10:00am – 1:00pm", subject: "Performance Management", tutor: "Mr. B. Fasanya", room: "Room B / Online" },
    { time: "1:30pm – 4:30pm",  subject: "Audit & Assurance (Mock)", tutor: "Mrs. C. Okafor", room: "Room A / Online" },
  ]},
];

const colors = ["#1E3A8A", "#16A34A", "#7C3AED", "#D97706", "#0891B2"];

export default function TimetablePage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7">
        <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Class Timetable</h1>
        <p className="text-[#6C757D] text-sm">ICAN Skills Level · July – August 2025</p>
      </div>
      <div className="space-y-6">
        {schedule.map(({ day, classes }) => (
          <div key={day}>
            <h2 className="font-heading font-semibold text-[#495057] text-sm mb-3 uppercase tracking-wide">{day}</h2>
            <div className="space-y-3">
              {classes.map((c, i) => (
                <div key={c.subject} className="flex items-start gap-4 bg-white rounded-2xl border border-[#E9ECEF] p-5 hover:shadow-sm transition-shadow">
                  <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ backgroundColor: colors[i % colors.length] }} />
                  <div className="flex-1">
                    <p className="font-heading font-bold text-[#222222] text-base">{c.subject}</p>
                    <p className="text-sm text-[#6C757D] mt-0.5">{c.tutor} · {c.room}</p>
                  </div>
                  <span className="text-sm font-semibold text-[#1E3A8A] flex-shrink-0">{c.time}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
