"use client";
import { motion } from "framer-motion";
import { Layout, Globe, ShoppingBag, BarChart3, Mail, Puzzle, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const integrations = [
    {
        name: "WooCommerce",
        desc: "Automatically include product names and prices in the WhatsApp greeting message when a customer chats from a product page.",
        icon: ShoppingBag,
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100",
        tag: "E-Commerce"
    },
    {
        name: "Elementor",
        desc: "Fully compatible with the world's most popular page builder. Add custom WhatsApp triggers to any Elementor button or widget.",
        icon: Layout,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        tag: "Page Builder"
    },
    {
        name: "Google Analytics",
        desc: "Track every chat click as an event in GA4. Understand which pages and markets are driving the most interactions.",
        icon: BarChart3,
        color: "text-orange-500",
        bg: "bg-orange-50",
        border: "border-orange-100",
        tag: "Analytics"
    },
    {
        name: "Contact Form 7",
        desc: "Redirect users to WhatsApp after form submission or provide a direct chat link within your contact forms.",
        icon: Mail,
        color: "text-sky-500",
        bg: "bg-sky-50",
        border: "border-sky-100",
        tag: "Form Builder"
    },
    {
        name: "WPML & Polylang",
        desc: "Fully translatable widget. Serve different WhatsApp numbers and messages based on the current site language.",
        icon: Globe,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
        tag: "Multilingual"
    },
    {
        name: "Divi & Gutenberg",
        desc: "Seamlessly integrates with Divi and the native WordPress block editor. No code required for full feature support.",
        icon: Puzzle,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-100",
        tag: "Core Compatibility"
    }
];

export default function IntegrationsPage() {
    return (
        <main className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-32">
                <header className="mb-20 text-center">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="uppercase font-medium text-indigo-600 mb-2 tracking-wide"
                    >
                        Ecosystem
                    </motion.p>
                    <motion.h1 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4"
                    >
                        Works with the tools <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">you love</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed"
                    >
                        Connectapre seamlessly integrates with popular WordPress plugins and external services to supercharge your workflow.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {integrations.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
                        >
                            <div className={`size-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                                <item.icon size={26} strokeWidth={1.5} />
                            </div>
                            
                            <div className="mb-6 flex items-center justify-between">
                                <span className={`text-[10px] font-bold ${item.color} uppercase tracking-widest px-2 py-0.5 ${item.bg} rounded-full`}>
                                    {item.tag}
                                </span>
                                <CheckCircle2 size={16} className="text-emerald-500" />
                            </div>

                            <h3 className="text-base font-semibold text-slate-900 mb-4">{item.name}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center bg-slate-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 size-64 bg-indigo-600/5 blur-[100px] rounded-full -ml-32 -mt-32"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                            Missing an integration?
                        </h2>
                        <p className="text-sm text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
                            We are constantly adding new features. If you need a specific integration for your business, let us know and we'll prioritize it.
                        </p>
                        <Link 
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/20 text-sm"
                        >
                            Request Integration
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
