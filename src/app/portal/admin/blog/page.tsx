"use client";
import { useState } from "react";
import { FileText, Plus, Edit } from "lucide-react";
const posts = [
  { title: "ICAN Nov/Dec 2025: Six Strategies That Separate Pass Students", date: "Jul 10, 2025", status: "published", views: "1,240" },
  { title: "A Practical Guide to the ACCA Strategic Professional Level",   date: "Jun 28, 2025", status: "published", views: "890" },
  { title: "IFRS vs Nigerian GAAP: Key Differences Every Accountant...",   date: "Jun 15, 2025", status: "published", views: "1,050" },
  { title: "Draft: Nigerian Tax Law Changes 2025",                         date: "Jul 12, 2025", status: "draft",     views: "—" },
];
export default function AdminBlogPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between gap-4 mb-7">
        <div><h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Blog / CMS</h1></div>
        <button className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#152D6E] shadow-sm">
          <Plus className="w-4 h-4" /> New Article
        </button>
      </div>
      <div className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden">
        <div className="divide-y divide-[#F1F3F5]">
          {posts.map(p => (
            <div key={p.title} className="flex items-center gap-4 px-6 py-4 hover:bg-[#F8F9FA]">
              <div className="w-8 h-8 bg-[#EFF4FF] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-[#1E3A8A]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#222222] truncate">{p.title}</p>
                <p className="text-xs text-[#ADB5BD]">{p.date} · {p.views} views</p>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.status === "published" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#FFFBEB] text-[#D97706]"}`}>{p.status}</span>
              <button className="text-xs font-semibold text-[#1E3A8A] hover:text-[#152D6E] flex items-center gap-1">
                <Edit className="w-3.5 h-3.5" /> Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
