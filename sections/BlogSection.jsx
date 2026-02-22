"use client";
import { blogPosts } from "@/data/blogData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export default function BlogSection() {
  // Only show the latest 3 posts on the homepage
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section
      id="blog"
      className="py-24 px-6 md:px-16 lg:px-24 xl:px-32 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          text1="Blog"
          text2="Latest from our blog"
          text3="Insights, updates, and guides to help you master WhatsApp communication and customer support."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {blogPosts.length > 0 && blogPosts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl mb-6 bg-slate-100 block group"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-indigo-600/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-indigo-600 text-[10px] font-bold px-3 py-1 rounded-full border border-indigo-100/50 uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </Link>

              <div className="flex flex-col flex-grow">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-base font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug mb-3">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
                    <Calendar size={12} className="text-indigo-400" />
                    <span>{post.date}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:gap-2 transition-all translate-y-0 group-hover:-translate-y-0.5"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white font-semibold rounded-md hover:bg-slate-800 transition shadow-lg shadow-slate-900/10 text-sm"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
