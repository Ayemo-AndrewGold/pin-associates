import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Clock, ArrowRight, Tag } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import NewsletterSection from "@/components/home/NewsletterSection";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Professional accounting insights, exam strategies, ICAN and ACCA updates, and career advice from PIN Consultancy Services.",
};

const categories = ["All", "Exam Strategy", "ICAN", "ACCA", "CITN", "Accounting", "Career", "Tax"];

const posts = [
  { slug: "ican-nov-dec-2026-examination-tips", category: "Exam Strategy", categoryVariant: "blue" as const, featured: true,
    title: "ICAN Nov/Dec 2026: Six Strategies That Separate Pass Students From the Rest",
    excerpt: "After coaching thousands of ICAN candidates, our tutors have identified the consistent habits and approaches that produce first-time passes.",
    readTime: "8 min", date: "Jul 10, 2026",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=80" },
  { slug: "acca-strategic-professional-guide-2026", category: "ACCA", categoryVariant: "gold" as const, featured: false,
    title: "A Practical Guide to the ACCA Strategic Professional Level in 2026",
    excerpt: "The Strategic Professional level is where many ACCA candidates stall. This guide breaks down SBL, SBR, and the optional papers.",
    readTime: "11 min", date: "Jun 28, 2026",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80" },
  { slug: "ifrs-vs-nigerian-gaap", category: "Accounting", categoryVariant: "green" as const, featured: false,
    title: "IFRS vs Nigerian GAAP: The Key Differences Every Accountant Must Know",
    excerpt: "As Nigerian companies increasingly adopt IFRS, understanding the practical differences between standards has become essential.",
    readTime: "9 min", date: "Jun 15, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80" },
  { slug: "career-paths-after-ican", category: "Career", categoryVariant: "gray" as const, featured: false,
    title: "What Comes After ICAN? Six Career Paths for Newly Qualified Chartered Accountants",
    excerpt: "Passing your ICAN exams opens a wide range of professional pathways. We explore the most rewarding career options.",
    readTime: "7 min", date: "Jun 3, 2026",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80" },
  { slug: "citn-examination-strategy-2026", category: "CITN", categoryVariant: "green" as const, featured: false,
    title: "How to Pass the CITN Professional Examination: A Tutor's Insider Guide",
    excerpt: "CITN examinations test your application of Nigerian tax law, not just your knowledge of it. Here is how to approach each paper strategically.",
    readTime: "10 min", date: "May 22, 2026",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&q=80" },
  { slug: "nigerian-tax-law-2026-updates", category: "Tax", categoryVariant: "blue" as const, featured: false,
    title: "Nigerian Tax Law Changes in 2026: What Finance Professionals Need to Know",
    excerpt: "The Finance Act 2026 introduces several material changes to corporate income tax, VAT, and capital gains tax. Here is what changed.",
    readTime: "12 min", date: "May 10, 2026",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80" },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}

        <PageHero
          label="Blog & Insights"
          title="Knowledge That Helps You Pass and Grow"
          description="Founded in 2009, PIN Consultancy Services has grown into one of Nigeria's most trusted professional examination tuition providers with over 5,000 graduates and a proven 87% first-attempt pass rate."
          slides={[
            { id: 1, src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=85", alt: "University students studying together" },
            { id: 2, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=85", alt: "Professional accounting class" },
            { id: 3, src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=85", alt: "Corporate learning session" },
          ]}
        />

        <section className="section-py bg-white">
          <div className="container-pin">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button key={cat}
                  className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                    cat === "All"
                      ? "bg-[#1E3A8A] text-white"
                      : "bg-[#F8F9FA] text-[#495057] border border-[#E9ECEF] hover:border-[#1E3A8A]/30 hover:text-[#1E3A8A]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured post */}
            <Link href={`/blog/${featured.slug}`} className="group block mb-10">
              <div className="grid md:grid-cols-2 bg-[#F8F9FA] rounded-3xl overflow-hidden border border-[#E9ECEF] hover:shadow-lg transition-all duration-300">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant={featured.categoryVariant}>{featured.category}</Badge>
                    <span className="text-[10px] font-bold text-[#152D6E] bg-[#F4C430] px-2.5 py-1 rounded-full uppercase">Featured</span>
                  </div>
                  <h2 className="font-heading font-bold text-[#222222] text-2xl leading-snug mb-4 group-hover:text-[#1E3A8A] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-[#6C757D] text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-[#ADB5BD]">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                      <span>{featured.date}</span>
                    </div>
                    <span className="text-sm font-semibold text-[#1E3A8A] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Rest of posts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="bg-[#F8F9FA] rounded-2xl border border-[#E9ECEF] overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
                    <div className="aspect-video overflow-hidden">
                      <img src={post.image} alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-3 h-3 text-[#ADB5BD]" />
                        <span className="text-xs font-semibold text-[#1E3A8A]">{post.category}</span>
                      </div>
                      <h3 className="font-heading font-bold text-[#222222] text-base leading-snug mb-2 group-hover:text-[#1E3A8A] transition-colors flex-1">
                        {post.title}
                      </h3>
                      <p className="text-[#6C757D] text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-[#ADB5BD]">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </article>
                </Link>
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
