"use client";

import { useState } from "react";
import { Monitor, Clock, CheckCircle2, XCircle, ChevronRight, ChevronLeft, Flag, RotateCcw } from "lucide-react";

const subjects = [
  { name: "Financial Reporting",   questions: 60, attempts: 8, bestScore: 74 },
  { name: "Audit & Assurance",     questions: 60, attempts: 5, bestScore: 68 },
  { name: "Taxation",              questions: 60, attempts: 6, bestScore: 71 },
  { name: "Performance Management",questions: 60, attempts: 3, bestScore: 62 },
];

const sampleQuestions = [
  {
    id: 1,
    question: "Under IAS 16 Property, Plant and Equipment, which of the following costs would be capitalised as part of the initial cost of an asset?",
    options: [
      "A) Annual maintenance costs incurred after the asset is in use",
      "B) Administrative overheads allocated to the asset during construction",
      "C) Professional fees directly attributable to bringing the asset to its intended location",
      "D) Costs of relocating staff to operate the new asset",
    ],
    correct: "C",
  },
  {
    id: 2,
    question: "An entity leases equipment for 5 years. The asset's useful life is 8 years. The present value of lease payments represents 85% of the asset's fair value. Under IFRS 16, how should the lessee classify this lease?",
    options: [
      "A) Short-term lease — recognise payments as an expense",
      "B) Finance lease — recognise right-of-use asset and liability",
      "C) Operating lease — no balance sheet recognition required",
      "D) Cannot be determined without knowing the interest rate",
    ],
    correct: "B",
  },
  {
    id: 3,
    question: "Which of the following best describes the purpose of audit evidence?",
    options: [
      "A) To provide absolute assurance that financial statements are free from misstatement",
      "B) To support the auditor's conclusions and form the basis for the audit opinion",
      "C) To guarantee that all fraud has been detected and reported",
      "D) To replace management's responsibility for the financial statements",
    ],
    correct: "B",
  },
];

type Mode = "select" | "practice" | "result";

export default function CBTPracticePage() {
  const [mode, setMode] = useState<Mode>("select");
  const [selected, setSelected] = useState("");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(5400); // 90 mins in seconds

  const q = sampleQuestions[current];
  const answered = Object.keys(answers).length;
  const score = Object.entries(answers).filter(([i, a]) => a === sampleQuestions[parseInt(i)].correct).length;

  const formatTime = (s: number) => `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  if (mode === "result") {
    const pct = Math.round((score / sampleQuestions.length) * 100);
    return (
      <div className="p-6 lg:p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-[#E9ECEF] p-10 text-center shadow-sm">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${pct >= 50 ? "bg-[#DCFCE7]" : "bg-red-50"}`}>
            {pct >= 50 ? <CheckCircle2 className="w-10 h-10 text-[#16A34A]" /> : <XCircle className="w-10 h-10 text-red-500" />}
          </div>
          <h2 className="font-heading font-bold text-[#222222] text-3xl mb-2">{pct}%</h2>
          <p className="text-[#6C757D] text-base mb-1">{score} of {sampleQuestions.length} correct</p>
          <p className={`font-semibold text-base mb-8 ${pct >= 50 ? "text-[#16A34A]" : "text-red-600"}`}>
            {pct >= 50 ? "Good work! Keep practising to improve further." : "Keep studying — you'll get there with more practice."}
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { l: "Score",    v: `${pct}%` },
              { l: "Correct",  v: score },
              { l: "Answered", v: answered },
            ].map(({ l, v }) => (
              <div key={l} className="bg-[#F8F9FA] rounded-2xl p-4">
                <p className="font-heading font-bold text-[#1E3A8A] text-2xl">{v}</p>
                <p className="text-[#ADB5BD] text-xs">{l}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 justify-center">
            <button onClick={() => { setMode("select"); setCurrent(0); setAnswers({}); }}
              className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#152D6E] transition-colors">
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
            <button onClick={() => setMode("select")}
              className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold text-sm px-6 py-3 rounded-xl border border-[#1E3A8A]/20 hover:bg-[#EFF4FF] transition-all">
              Choose Another Subject
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (mode === "practice") {
    return (
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 bg-white rounded-2xl border border-[#E9ECEF] px-6 py-4">
          <div>
            <p className="text-xs text-[#ADB5BD] font-medium">{selected}</p>
            <p className="font-heading font-semibold text-[#222222] text-sm">
              Question {current + 1} of {sampleQuestions.length}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-sm font-bold text-[#D97706]">
              <Clock className="w-4 h-4" />
              {formatTime(timeLeft)}
            </div>
            <button onClick={() => setMode("result")}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6C757D] hover:text-[#222222] border border-[#E9ECEF] px-3 py-1.5 rounded-lg">
              <Flag className="w-3.5 h-3.5" /> Submit
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6 h-1.5 bg-[#F1F3F5] rounded-full overflow-hidden">
          <div className="h-full bg-[#1E3A8A] rounded-full transition-all" style={{ width: `${((current + 1) / sampleQuestions.length) * 100}%` }} />
        </div>

        {/* Question card */}
        <div className="bg-white rounded-3xl border border-[#E9ECEF] p-8 max-w-3xl mx-auto shadow-sm">
          <p className="text-[#222222] text-base leading-relaxed font-medium mb-7">{q.question}</p>
          <div className="space-y-3">
            {q.options.map((opt) => {
              const letter = opt.charAt(0);
              const selected2 = answers[q.id] === letter;
              return (
                <button
                  key={opt}
                  onClick={() => setAnswers(a => ({ ...a, [q.id]: letter }))}
                  className={`w-full text-left flex items-start gap-4 p-4 rounded-xl border-2 transition-all text-sm leading-relaxed ${
                    selected2
                      ? "border-[#1E3A8A] bg-[#EFF4FF] text-[#1E3A8A] font-medium"
                      : "border-[#E9ECEF] hover:border-[#DBEAFE] hover:bg-[#F8F9FA] text-[#343A40]"
                  }`}
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                    selected2 ? "bg-[#1E3A8A] text-white" : "bg-[#F1F3F5] text-[#495057]"
                  }`}>{letter}</span>
                  {opt.slice(3)}
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-5 border-t border-[#F1F3F5]">
            <button
              onClick={() => setCurrent(c => Math.max(0, c - 1))}
              disabled={current === 0}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#495057] px-5 py-2.5 rounded-xl border border-[#E9ECEF] hover:bg-[#F8F9FA] disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            {current < sampleQuestions.length - 1 ? (
              <button
                onClick={() => setCurrent(c => c + 1)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#1E3A8A] px-5 py-2.5 rounded-xl hover:bg-[#152D6E] transition-colors"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setMode("result")}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#152D6E] bg-[#F4C430] px-5 py-2.5 rounded-xl hover:bg-[#D4A820] transition-colors"
              >
                Submit Test <Flag className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-7">
        <h1 className="font-heading font-bold text-[#222222] text-2xl mb-1">CBT Practice</h1>
        <p className="text-[#6C757D] text-sm">Sharpen your exam readiness with timed practice tests.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {subjects.map((s) => (
          <div key={s.name} className="bg-white rounded-2xl border border-[#E9ECEF] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all group">
            <div className="w-10 h-10 bg-[#EFF4FF] rounded-xl flex items-center justify-center mb-4">
              <Monitor className="w-5 h-5 text-[#1E3A8A]" />
            </div>
            <h3 className="font-heading font-bold text-[#222222] text-base mb-1 leading-snug">{s.name}</h3>
            <div className="space-y-1 mb-5 text-xs text-[#ADB5BD]">
              <p>{s.questions} Questions · 90 minutes</p>
              <p>{s.attempts} attempts · Best: <span className="font-bold text-[#16A34A]">{s.bestScore}%</span></p>
            </div>
            <button
              onClick={() => { setSelected(s.name); setMode("practice"); }}
              className="w-full inline-flex items-center justify-center gap-1.5 bg-[#1E3A8A] text-white font-semibold text-xs px-4 py-2.5 rounded-xl hover:bg-[#152D6E] transition-colors"
            >
              Start Practice
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
