"use client";

import { useState } from "react";
import { Upload, FileText, CheckCircle2 } from "lucide-react";

const subjects = ["Financial Reporting", "Audit & Assurance", "Taxation", "Performance Management"];

export default function UploadNotesPage() {
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7">
        <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Upload Notes</h1>
        <p className="text-[#6C757D] text-sm">Share study materials with your students.</p>
      </div>
      <div className="max-w-xl">
        <div className="bg-white rounded-3xl border border-[#E9ECEF] p-8">
          {!uploaded ? (
            <form className="space-y-5" onSubmit={e => { e.preventDefault(); setUploaded(true); }}>
              <div>
                <label className="form-label">Subject *</label>
                <select required className="form-input">
                  <option value="">Select subject...</option>
                  {subjects.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="form-label">Document Title *</label>
                <input type="text" required placeholder="e.g. FR Chapter 8 — Impairment" className="form-input" />
              </div>
              <div>
                <label className="form-label">Description</label>
                <textarea rows={3} placeholder="Brief description of the content..." className="form-input resize-none" />
              </div>
              <div>
                <label className="form-label">File *</label>
                <div className="border-2 border-dashed border-[#DBEAFE] rounded-2xl p-8 text-center hover:border-[#1E3A8A] transition-colors cursor-pointer">
                  <FileText className="w-8 h-8 text-[#ADB5BD] mx-auto mb-2" />
                  <p className="text-sm font-medium text-[#495057]">Drop your file here, or click to browse</p>
                  <p className="text-xs text-[#ADB5BD] mt-1">PDF, DOCX, PPTX · Max 50MB</p>
                </div>
              </div>
              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#16A34A] text-white font-semibold text-sm px-8 py-4 rounded-xl hover:bg-green-700 transition-colors shadow-sm">
                <Upload className="w-4 h-4" /> Upload Material
              </button>
            </form>
          ) : (
            <div className="py-10 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 bg-[#DCFCE7] rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-[#16A34A]" />
              </div>
              <h3 className="font-heading font-bold text-[#222222] text-lg">File Uploaded Successfully</h3>
              <p className="text-[#6C757D] text-sm">Students will be notified and can access the material immediately.</p>
              <button onClick={() => setUploaded(false)} className="text-sm font-semibold text-[#16A34A] mt-2">
                Upload Another File
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
