"use client";

import { BarChart3, Users, Palette, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DashboardPreview() {
    return (
        <section className="py-24 px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
                
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2"
                >
                    <p className="uppercase font-medium text-indigo-600 text-xs tracking-widest mb-2">Admin Dashboard</p>
                    
                    <h2 className="text-3xl font-semibold text-slate-800 leading-tight mb-4">
                        Everything you need to <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">scale support</span>.
                    </h2>
                    
                    <p className="text-sm text-slate-500 mb-10 leading-relaxed">
                        Say goodbye to messy spreadsheets. Track every click, manage every agent, and customize your experience in real-time.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { icon: Users, title: "Team Control", desc: "Unlimited agents & status toggle." },
                            { icon: BarChart3, title: "Live Insights", desc: "Heatmaps & visitor source data." },
                            { icon: Palette, title: "Widget Editor", desc: "20+ styles with live preview." },
                            { icon: ShieldCheck, title: "Privacy First", desc: "GDPR compliant data handling." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className="w-10 h-10 shrink-0 bg-slate-50 rounded-lg flex items-center justify-center text-indigo-600 border border-indigo-50">
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="text-base font-semibold text-slate-700">{item.title}</h4>
                                    <p className="text-xs text-slate-500 mt-1 leading-normal">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 relative"
                >
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-100 bg-white p-2">
                        <Image 
                            src="/assets/whole-dashboard.svg" 
                            alt="Dashboard Interface" 
                            width={1000} 
                            height={800} 
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
