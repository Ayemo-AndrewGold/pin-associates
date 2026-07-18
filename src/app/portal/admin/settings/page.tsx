"use client";
import { Settings, Save } from "lucide-react";
export default function AdminSettingsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7"><h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Settings</h1></div>
      <div className="max-w-2xl space-y-6">
        {[
          { section: "Organisation", fields: [
            { l: "Organisation Name", v: "PIN Consultancy Services" },
            { l: "Registration Number", v: "RC 1234567" },
            { l: "Contact Email", v: "info@pinassociates.com.ng" },
          ]},
          { section: "Academic", fields: [
            { l: "Current Diet", v: "November / December 2025" },
            { l: "Registration Deadline", v: "31 October 2025" },
          ]},
        ].map(({ section, fields }) => (
          <div key={section} className="bg-white rounded-2xl border border-[#E9ECEF] p-6">
            <h2 className="font-heading font-bold text-[#222222] text-base mb-5">{section}</h2>
            <div className="space-y-4">
              {fields.map(({ l, v }) => (
                <div key={l}>
                  <label className="form-label">{l}</label>
                  <input defaultValue={v} className="form-input" />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#152D6E] shadow-sm">
          <Save className="w-4 h-4" /> Save Settings
        </button>
      </div>
    </div>
  );
}
