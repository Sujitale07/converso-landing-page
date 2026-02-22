"use client";
import { blogPosts } from "@/data/blogData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

export default function BlogPage() {
    return (
        <main className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-32">
                <header className="mb-20 text-center">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="uppercase font-medium text-indigo-600 mb-2 tracking-wide"
                    >
                        Blog
                    </motion.p>
                    <motion.h1 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4"
                    >
                        Direct insights <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">for you</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed"
                    >
                        Insights, updates, and expert tips on how to scale your customer support and sales via WhatsApp using Connectapre.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post, index) => (
                        <motion.article 
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col"
                        >
                            <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl mb-6 bg-slate-100 block group">
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
            </div>
        </main>
    );
}

