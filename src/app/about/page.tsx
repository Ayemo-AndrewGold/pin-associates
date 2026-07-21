import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle2, Award, Target, Eye, Heart, Users, BookOpen, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsletterSection from "@/components/home/NewsletterSection";
import TeamCard from "@/components/ui/TeamCard";
import StatsSection from "@/components/home/StatsSection";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "About PIN Consultancy Services",
  description:
    "Learn about PIN Consultancy Services our history, mission, vision, teaching philosophy, and the experienced team behind Nigeria's trusted professional examination tuition provider.",
};

const team = [
  {
    name: "Mr. Olurunmishola Olalekan",
    role: "Founder & Director of Studies",
    quals: "FCA, FCTI, MBA",
    bio: "Over 20 years of professional practice in audit, tax, and financial consulting. Former partner at a Big Four firm. Founded PIN in 2009 with a mission to make professional qualification accessible.",
    initials: "OA",
    color: "#1E3A8A",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784402552/Olalekan_j80keu.jpg",
  },
  {
    name: "Mr. Anthony Babatunde",
    role: "Head of ICAN Programmes",
    quals: "ACA, M.Sc. Accounting",
    bio: "An ICAN examiner with 14 years of teaching experience. Specialises in Financial Reporting, Audit, and Advanced Taxation. Known for his ability to simplify complex financial concepts.",
    initials: "AB",
    color: "#16A34A",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784402566/Anthony_Tunde_bq4utq.jpg",
  },
  {
    name: "Mrs. Chiamaka Linda",
    role: "ACCA Programme Lead",
    quals: "FCCA, ACFE, MBA",
    bio: "An ACCA-qualified professional with Big Four experience. Has helped over 800 students pass ACCA exams at all levels, with particular expertise in the Strategic Professional papers.",
    initials: "CL",
    color: "#7C3AED",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=85",
  },
  {
    name: "Ms. Amaka Eze",
    role: "CITN & Tax Faculty Lead",
    quals: "ACTI, LLB, BL",
    bio: "A practising tax consultant and CITN member with deep expertise in Nigerian tax law, transfer pricing, and international tax planning. Brings real-world case studies into every session.",
    initials: "AE",
    color: "#0891B2",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=85",
  },
  {
    name: "Mr. Ibrahim Suleiman",
    role: "CISA & Technology Lead",
    quals: "CISA, CRISC, B.Sc. Computer Science",
    bio: "An IT audit and information security specialist with 12 years at leading financial institutions. Simplifies ISACA frameworks and IS governance concepts for finance professionals.",
    initials: "IS",
    color: "#D97706",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=85",
  },
  {
    name: "Mrs. Ngozi Obi-Nwosu",
    role: "Student Services & Pastoral Care",
    quals: "B.Sc. Education, PGDip",
    bio: "Oversees student welfare, learning support, and pastoral care at PIN. Ensures every student has access to the resources, guidance, and motivation needed to succeed.",
    initials: "NO",
    color: "#1E3A8A",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&q=85",
  },
];

const values = [
  { icon: Award,     title: "Academic Excellence",   body: "We hold ourselves to the highest academic standards. Our teaching materials, examination preparation, and student outcomes reflect a commitment to excellence at every level." },
  { icon: Heart,     title: "Student-First Culture",  body: "Every decision we make starts with the student. From class scheduling to pricing, we prioritise accessibility, support, and outcomes for the people we serve." },
  { icon: Target,    title: "Results Orientation",    body: "We measure our success by your results. Our exam-focused curriculum, continuous assessment, and mock examination programme exist for one purpose: to help you pass." },
  { icon: Users,     title: "Inclusivity",            body: "Professional qualifications should not be gatekept by geography, employment status, or financial circumstance. We offer flexible modes, payment plans, and accessible resources." },
  { icon: BookOpen,  title: "Intellectual Integrity",  body: "We teach honestly and thoroughly. If a topic is difficult, we say so and we teach it with greater care. We do not take shortcuts with student knowledge." },
  { icon: TrendingUp,"title": "Continuous Growth",   body: "We invest in our tutors, our materials, and our technology to stay ahead of examiner changes, regulatory updates, and evolving best practices in professional education." } as { icon: typeof Award; title: string; body: string },
];

const milestones = [
  { year: "2009", event: "PIN Consultancy Services founded in Lagos with an initial cohort of 47 ICAN students." },
  { year: "2012", event: "Expanded to include ACCA tuition. First batch of 12 ACCA students qualify." },
  { year: "2014", event: "Launched CITN programme. Partnership with major audit and tax firms for student internships." },
  { year: "2016", event: "Reached 1,000 cumulative students trained. Introduced CBT practice examination simulator." },
  { year: "2018", event: "Added ATS and Diploma in IFRS programmes. Online class infrastructure launched." },
  { year: "2020", event: "Successfully transitioned to fully online delivery during pandemic. Zero programme interruptions." },
  { year: "2022", event: "Launched CISA programme. Corporate training division formalised with first institutional client." },
  { year: "2024", event: "5,000 cumulative students trained. 87% first-attempt pass rate across all programmes." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <PageHero
          label="About PIN"
          title="Who We Are"
          description="Founded in 2009, PIN Consultancy Services has grown into one of Nigeria's most trusted professional examination tuition providers with over 5,000 graduates and a proven 87% first-attempt pass rate."
          slides={[
            { id: 1, src: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784557870/Purple_Abstract_Graphic_Design_LinkedIn_Article_Cover_Image_1_lle3mb.png", alt: "University students studying together" },
            { id: 2, src: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784484978/wmremove-transformed_1_1_el1lye.jpg", alt: "Professional accounting class" },
            // { id: 3, src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=85", alt: "Corporate learning session" },
          ]}
        />

        {/* Mission & Vision */}
        <section className="section-py bg-white">
          <div className="container-pin">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Target,
                  label: "Our Mission",
                  color: "#1E3A8A",
                  bg: "#EFF4FF",
                  text: "To provide accessible, high-quality professional education that equips students with the knowledge, confidence, and practical skills required to pass professional examinations and excel in their careers.",
                },
                {
                  icon: Eye,
                  label: "Our Vision",
                  color: "#D97706",
                  bg: "#FFFBEB",
                  text: "To become Africa's leading professional examination preparation institution recognised for academic rigour, student outcomes, and the quality of the professionals we produce.",
                },
              ].map(({ icon: Icon, label, color, bg, text }) => (
                <div key={label} className="bg-[#F8F9FA] rounded-3xl p-4 sm:p-8 border border-[#E9ECEF]">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: bg }}>
                    <Icon className="w-6 h-6" style={{ color }} strokeWidth={1.75} />
                  </div>
                  <h2 className="font-heading font-bold text-[#222222] text-xl mb-4">{label}</h2>
                  <p className="text-[#495057] text-base leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-py bg-[#F8F9FA]">
          <div className="container-pin">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <SectionHeader label="Our Story" title="Built on a Simple Belief" highlight="Simple Belief" align="left" />
                <div className="mt-6 space-y-5">
                  <p className="text-[#495057] leading-relaxed">
                    PIN was founded in 2009 by Olorunishola Olalekan, a chartered accountant who had
                    observed a consistent pattern: bright, capable students were failing their professional
                    examinations not because they lacked intelligence, but because they lacked structured,
                    exam-intelligent preparation.
                  </p>
                  <p className="text-[#495057] leading-relaxed">
                    He started with 47 students in a single classroom in Lagos. The approach was
                    straightforward deeply experienced tutors, materials aligned to current examiner
                    reports, small classes, and relentless focus on examination performance.
                  </p>
                  <p className="text-[#495057] leading-relaxed">
                    The results spoke for themselves. Word spread. And PIN grew not through marketing,
                    but through the success of its graduates. Today, PIN alumni are chartered accountants,
                    tax managers, IT auditors, and finance directors at leading organisations across Nigeria.
                  </p>
                  <p className="text-[#495057] leading-relaxed">
                    The founding philosophy has never changed. We are here because passing matters.
                    And passing with the right preparation is achievable for every committed student.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="font-heading font-bold text-[#222222] text-lg mb-6">
                  Milestones
                </h3>
                <div className="relative pl-8 space-y-6">
                  <div className="absolute left-2.5 top-2 bottom-2 w-px bg-[#E9ECEF]" />
                  {milestones.map(({ year, event }) => (
                    <div key={year} className="relative">
                      <div className="absolute -left-8 top-1 w-5 h-5 rounded-full bg-[#1E3A8A] border-2 border-white shadow-sm flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430]" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">{year}</span>
                        <p className="text-sm text-[#495057] leading-relaxed mt-0.5">{event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-py bg-white">
          <div className="container-pin">
            <SectionHeader
              label="Our Values"
              title="The Principles That Guide Everything We Do"
              highlight="Everything We Do"
              align="center"
            />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-[#F8F9FA] rounded-2xl border border-[#E9ECEF] p-4 sm:p-6 hover:shadow-sm transition-shadow">
                  <div className="w-10 h-10 bg-[#EFF4FF] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#1E3A8A]" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading font-bold text-[#222222] text-base mb-2">{title}</h3>
                  <p className="text-[#6C757D] text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="section-py bg-[#F8F9FA]">
          <div className="container-pin">
            <SectionHeader
              label="Our Team"
              title="The People Behind Your Success"
              highlight="Behind Your Success"
              description="Every PIN tutor is an active professional not just an academic. They bring real-world practice into the classroom and are personally invested in your results."
              align="center"
            />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {team.map((member) => (
                <TeamCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>

        <StatsSection />
       

        {/* Teaching philosophy */}
        <section className="section-py bg-white">
          <div className="container-pin max-w-3xl mx-auto text-center">
            <SectionHeader
              label="Teaching Philosophy"
              title="How We Think About Professional Education"
              highlight="Professional Education"
              align="center"
            />
            <div className="mt-8 space-y-5 text-left">
              {[
                { h: "Exam intelligence, not just knowledge", b: "Understanding the subject is necessary but not sufficient. We teach students to understand how examiners approach topics, how marking schemes are structured, and how to translate knowledge into marks under exam conditions." },
                { h: "Active learning over passive listening", b: "Our classes are structured around application, not lecture. Students work through questions in real time, receive immediate feedback, and develop the analytical habits required to perform consistently under pressure." },
                { h: "Consistency produces results", b: "Passing professional exams is the product of disciplined, consistent study over time not last-minute cramming. We design our programmes to build knowledge progressively and reinforce learning through regular assessment." },
                { h: "Support is part of the curriculum", b: "A student who is confused, discouraged, or overwhelmed cannot learn effectively. Pastoral support, accessible tutors, and a responsive administration team are not optional extras at PIN they are part of what we deliver." },
              ].map(({ h, b }) => (
                <div key={h} className="flex items-start gap-4 p-5 bg-[#F8F9FA] rounded-2xl border border-[#E9ECEF]">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-[#222222] text-base mb-1">{h}</h3>
                    <p className="text-[#6C757D] text-sm leading-relaxed">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
