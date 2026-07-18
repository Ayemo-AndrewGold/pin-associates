"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

const posts = [
  {
    slug: "ican-nov-dec-2026-examination-tips",
    category: "Exam Strategy",
    categoryVariant: "blue" as const,
    title: "ICAN Nov/Dec 2026: Six Strategies That Separate Pass Students From the Rest",
    excerpt:
      "After coaching thousands of ICAN candidates, our tutors have identified the consistent habits and approaches that produce first-time passes. Here is what the data shows.",
    readTime: "8 min read",
    date: "July 10, 2026",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    featured: true,
  },
  {
    slug: "acca-strategic-professional-guide-2026",
    category: "ACCA",
    categoryVariant: "gold" as const,
    title: "A Practical Guide to the ACCA Strategic Professional Level in 2026",
    excerpt:
      "The Strategic Professional level is where many ACCA candidates stall. This guide breaks down SBL, SBR, and the optional papers with a clear study framework.",
    readTime: "11 min read",
    date: "June 28, 2026",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    featured: false,
  },
  {
    slug: "ifrs-vs-nigerian-gaap-key-differences",
    category: "Accounting",
    categoryVariant: "green" as const,
    title: "IFRS vs Nigerian GAAP: The Key Differences Every Accountant Must Know",
    excerpt:
      "As Nigerian companies increasingly adopt IFRS, understanding the practical differences between standards has become essential for finance professionals.",
    readTime: "9 min read",
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    featured: false,
  },
  {
    slug: "career-paths-after-ican-qualification",
    category: "Career",
    categoryVariant: "gray" as const,
    title: "What Comes After ICAN? Six Career Paths for Newly Qualified Chartered Accountants",
    excerpt:
      "Passing your ICAN exams opens a wide range of professional pathways. We explore the most rewarding career options for newly qualified accountants in Nigeria.",
    readTime: "7 min read",
    date: "June 3, 2026",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    featured: false,
  },
];

export default function BlogSection() {
  const [featured, ...rest] = posts;

  return (
    <section className="section-py bg-[#F8F9FA]">
      <div className="container-pin">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <SectionHeader
            label="Blog & Insights"
            title="Knowledge That Helps You Pass and Grow"
            highlight="Pass and Grow"
            align="left"
          />
          <Link
            href="/blog"
            className="flex-shrink-0 inline-flex items-center gap-2 text-[#1E3A8A] font-semibold text-sm border border-[#1E3A8A]/20 px-5 py-2.5 rounded-xl hover:bg-[#EFF4FF] hover:border-[#1E3A8A]/40 transition-all"
          >
            All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Link href={`/blog/${featured.slug}`} className="group block h-full">
              <article className="bg-white rounded-3xl overflow-hidden border border-[#E9ECEF] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant={featured.categoryVariant}>{featured.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#F4C430] text-[#152D6E] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-[#222222] text-xl leading-snug mb-3 group-hover:text-[#1E3A8A] transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-[#6C757D] text-sm leading-relaxed mb-5 flex-1">{featured.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[#ADB5BD]">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                    <span>{featured.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>

          {/* Secondary posts */}
          <div className="flex flex-col gap-5">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article className="bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex gap-4 p-4">
                    <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Tag className="w-3 h-3 text-[#ADB5BD]" />
                          <span className="text-xs font-semibold text-[#1E3A8A]">{post.category}</span>
                        </div>
                        <h3 className="font-heading font-semibold text-[#222222] text-sm leading-snug group-hover:text-[#1E3A8A] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[#ADB5BD] mt-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
