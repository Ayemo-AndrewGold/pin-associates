"use client";

import { useState } from "react";
import { Bell, Mail, Moon, Shield, Save } from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    classReminders: true,
    assignmentAlerts: true,
    resultNotifications: true,
  });

  const toggle = (key: keyof typeof settings) =>
    setSettings(s => ({ ...s, [key]: !s[key] }));

  const items = [
    { key: "emailNotifications" as const, icon: Mail,    label: "Email Notifications",    desc: "Receive updates and announcements via email" },
    { key: "smsNotifications" as const,   icon: Bell,    label: "SMS Notifications",       desc: "Receive class reminders via text message" },
    { key: "classReminders" as const,     icon: Bell,    label: "Class Reminders",          desc: "Get reminded 1 hour before each class" },
    { key: "assignmentAlerts" as const,   icon: Shield,  label: "Assignment Due Alerts",    desc: "Get notified 24 hours before assignment deadlines" },
    { key: "resultNotifications" as const,icon: Mail,    label: "Result Notifications",     desc: "Get notified when a result is posted" },
  ];

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7">
        <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">Settings</h1>
        <p className="text-[#6C757D] text-sm">Manage your notification and account preferences.</p>
      </div>
      <div className="max-w-2xl space-y-4">
        {items.map(({ key, icon: Icon, label, desc }) => (
          <div key={key} className="bg-white rounded-2xl border border-[#E9ECEF] p-5 flex items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-[#EFF4FF] rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-[#1E3A8A]" />
              </div>
              <div>
                <p className="font-semibold text-[#222222] text-sm">{label}</p>
                <p className="text-xs text-[#ADB5BD] mt-0.5">{desc}</p>
              </div>
            </div>
            <button
              role="switch"
              aria-checked={settings[key]}
              onClick={() => toggle(key)}
              className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${settings[key] ? "bg-[#1E3A8A]" : "bg-[#DEE2E6]"}`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${settings[key] ? "translate-x-5" : "translate-x-0"}`} />
            </button>
          </div>
        ))}
        <button className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#152D6E] transition-colors shadow-sm">
          <Save className="w-4 h-4" /> Save Settings
        </button>
      </div>
    </div>
  );
}
