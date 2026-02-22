"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Shield, HelpCircle, Activity } from "lucide-react";

const quickLinks = [
    { title: "Installation", icon: Zap, slug: "installation", color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Configuration", icon: Shield, slug: "basic-configuration", color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Smart Routing", icon: Activity, slug: "smart-routing", color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "FAQs", icon: HelpCircle, slug: "/#faq", color: "text-purple-600", bg: "bg-purple-50" },
];

export default function DocsPage() {
    return (
        <section>
            <header className="mb-12">
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="uppercase font-medium text-indigo-600 mb-2 tracking-wide text-xs"
                >
                    Learn
                </motion.p>
                <motion.h1 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight"
                >
                    Documentation
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-sm text-slate-500 leading-relaxed md:text-base max-w-xl"
                >
                    Welcome to the Connectapre documentation. Everything you need to set up, customize, and optimize your WhatsApp chat widget.
                </motion.p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
                {quickLinks.map((link, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (index * 0.05) }}
                    >
                        <Link 
                            href={link.slug.startsWith('/') ? link.slug : `/docs/${link.slug}`}
                            className="group p-6 bg-white border border-slate-100 rounded-2xl flex items-center justify-between hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`size-10 rounded-xl ${link.bg} ${link.color} flex items-center justify-center`}>
                                    <link.icon size={20} strokeWidth={1.5} />
                                </div>
                                <span className="text-sm font-semibold text-slate-900">{link.title}</span>
                            </div>
                            <ArrowRight size={16} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Key Resources</h2>
                <div className="space-y-4">
                    <p className="text-sm text-slate-500 leading-relaxed">
                        If you're new to Connectapre, we recommend starting with our <Link href="/docs/installation" className="text-indigo-600 font-semibold hover:underline">Installation Guide</Link>. 
                        It covers the basic setup and how to add your first agent.
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        For more advanced use cases, check out the <Link href="/docs/smart-routing" className="text-indigo-600 font-semibold hover:underline">Smart Routing</Link> documentation to learn how to direct users based on their location.
                    </p>
                </div>
            </div>
        </section>
    );
}
