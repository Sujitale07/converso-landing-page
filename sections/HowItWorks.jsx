"use client";

import SectionTitle from "@/components/SectionTitle";
import { Globe, UserCheck, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        icon: Globe,
        title: "1. Auto-Detection",
        desc: "Instant detection of visitor location via IP or GPS as soon as they land.",
    },
    {
        icon: UserCheck,
        title: "2. Smart Matching",
        desc: "Automatically finds the assigned agent for that specific region.",
    },
    {
        icon: MessageCircle,
        title: "3. Direct Connection",
        desc: "Dynamic link updates to the correct agent's WhatsApp number.",
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50/50 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-32">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle 
                        text1="Workflow" 
                        text2="How Smart Routing Works" 
                        text3="Connectapre handles the complex logic behind the scenes so your customers get instant support." 
                    />
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 relative">
                    {/* Connection Line (Desktop) with Shooting Star Effect */}
                    <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-slate-100 z-0 overflow-hidden rounded-full">
                        <motion.div 
                            animate={{ 
                                x: ["-100%", "400%"] 
                            }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity, 
                                ease: "linear",
                                repeatDelay: 1
                            }}
                            className="w-1/4 h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_rgba(52,211,153,0.8)]"
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group flex flex-col items-center text-center z-10"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-indigo-600 mb-8 border border-slate-100 shadow-sm group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300">
                                <step.icon size={32} strokeWidth={1.5} />
                            </div>
                            
                            <h3 className="text-base font-semibold text-slate-800 tracking-tight">{step.title}</h3>
                            <p className="text-sm text-slate-500 mt-3 leading-relaxed max-w-[240px]">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
