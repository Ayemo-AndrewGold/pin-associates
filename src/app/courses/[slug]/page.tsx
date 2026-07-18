import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { courses } from "@/lib/courseData";
import { CheckCircle2, Clock, Monitor, ArrowRight, BookOpen, Award, Users, Plus, Minus } from "lucide-react";
import Badge from "@/components/ui/Badge";
import NewsletterSection from "@/components/home/NewsletterSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(courses).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses[slug];
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.title} — ${course.fullName}`,
    description: `PIN Consultancy Services provides expert tuition for ${course.title} (${course.fullName}). ${course.overview.slice(0, 150)}...`,
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = courses[slug];
  if (!course) notFound();

  const badgeVariantMap: Record<string, "blue" | "gold" | "green" | "gray"> = {
    "Most Popular": "gold",
    "International": "blue",
    "Tax Specialist": "green",
    "Entry Level": "gray",
    "IT Audit": "blue",
    "ACCA Accredited": "gold",
    "Advisory": "blue",
    "For Organisations": "gray",
  };
  const badgeVariant = badgeVariantMap[course.badge] ?? "blue";

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative pt-40 pb-20"
          style={{ background: "linear-gradient(135deg, #0F2055 0%, #1a3070 50%, #152D6E 100%)" }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, #F4C430 0%, transparent 70%)" }} />
          </div>
          <div className="container-pin relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/courses" className="hover:text-white/70 transition-colors">Programmes</Link>
              <span>/</span>
              <span className="text-white/70">{course.title}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl">{course.icon}</span>
                  <Badge variant={badgeVariant}>{course.badge}</Badge>
                </div>
                <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl leading-tight mb-2">
                  {course.title}
                </h1>
                <p className="text-[#F4C430] font-semibold text-base mb-4">{course.fullName}</p>
                <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                  {course.tagline}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/apply" className="inline-flex items-center gap-2 bg-[#F4C430] text-[#152D6E] font-bold text-base px-8 py-4 rounded-2xl hover:bg-[#D4A820] transition-all shadow-lg hover:-translate-y-0.5">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white font-semibold text-base px-8 py-4 rounded-2xl hover:bg-white/15 transition-all">
                    Speak to an Advisor
                  </Link>
                </div>
              </div>

              {/* Quick facts card */}
              <div className="bg-white/[0.07] border border-white/[0.15] rounded-3xl p-7 backdrop-blur-sm">
                <h3 className="font-heading font-bold text-white text-base mb-5">Programme Overview</h3>
                <div className="space-y-4">
                  {[
                    { icon: Clock, label: "Duration", value: course.levels.map(l => l.duration).join(" + ") },
                    { icon: Monitor, label: "Study Mode", value: course.mode },
                    { icon: BookOpen, label: "Levels", value: `${course.levels.length} Level${course.levels.length > 1 ? "s" : ""}` },
                    { icon: Award, label: "Qualification", value: course.outcomes[0] },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#F4C430]" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs font-medium">{label}</p>
                        <p className="text-white text-sm font-semibold leading-tight">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-[#F4C430] text-xs font-bold uppercase tracking-wider mb-3">Tuition Fees</p>
                  {course.fees.map((fee) => (
                    <div key={fee.level} className="flex items-center justify-between py-1.5">
                      <span className="text-white/60 text-xs">{fee.level}</span>
                      <span className="text-white font-semibold text-sm">{fee.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
            <svg viewBox="0 0 1440 40" fill="none" className="w-full">
              <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Overview */}
        <section className="section-py bg-white">
          <div className="container-pin max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-[#222222] text-2xl mb-5">About This Programme</h2>
            <p className="text-[#495057] text-base leading-relaxed mb-10">{course.overview}</p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Who it's for */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-[#1E3A8A]" />
                  <h3 className="font-heading font-bold text-[#222222] text-base">Who Is This For?</h3>
                </div>
                <ul className="space-y-3">
                  {course.who.map((w) => (
                    <li key={w} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                      <span className="text-[#495057] text-sm leading-relaxed">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-[#1E3A8A]" />
                  <h3 className="font-heading font-bold text-[#222222] text-base">Career Outcomes</h3>
                </div>
                <ul className="space-y-3">
                  {course.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#F4C430] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#152D6E]" />
                      </div>
                      <span className="text-[#495057] text-sm leading-relaxed">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="section-py bg-[#F8F9FA]">
          <div className="container-pin max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-[#222222] text-2xl mb-8">Programme Structure</h2>
            <div className="space-y-5">
              {course.levels.map((level, i) => (
                <div key={level.name} className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden">
                  <div className="flex items-center justify-between p-6 border-b border-[#F1F3F5]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#1E3A8A] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-[#222222] text-base">{level.name}</h3>
                        <p className="text-xs text-[#ADB5BD] flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          {level.duration}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#1E3A8A] bg-[#EFF4FF] px-3 py-1 rounded-full">
                      {level.papers.length} Paper{level.papers.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="p-6 grid sm:grid-cols-2 gap-3">
                    {level.papers.map((paper) => (
                      <div key={paper} className="flex items-start gap-2.5">
                        <BookOpen className="w-4 h-4 text-[#ADB5BD] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#495057]">{paper}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {course.faq.length > 0 && (
          <section className="section-py bg-white">
            <div className="container-pin max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-[#222222] text-2xl mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {course.faq.map((item, i) => (
                  <div key={i} className="bg-[#F8F9FA] rounded-2xl border border-[#E9ECEF] p-6">
                    <h3 className="font-heading font-semibold text-[#222222] text-base mb-2">{item.q}</h3>
                    <p className="text-[#495057] text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA banner */}
        <section
          className="py-16"
          style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #152D6E 100%)" }}
        >
          <div className="container-pin text-center">
            <h2 className="font-heading font-bold text-white text-3xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/65 text-base mb-8 max-w-xl mx-auto">
              Apply now to secure your place in the upcoming diet or speak to one of our
              admissions advisors for personalised guidance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/apply" className="inline-flex items-center gap-2 bg-[#F4C430] text-[#152D6E] font-bold text-base px-8 py-4 rounded-2xl hover:bg-[#D4A820] transition-all shadow-lg">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white font-semibold text-base px-8 py-4 rounded-2xl hover:bg-white/15 transition-all">
                Contact an Advisor
              </Link>
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
