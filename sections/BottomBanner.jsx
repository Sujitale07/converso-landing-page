"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BottomBanner() {
    return (
        <section className="px-6 py-24">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto relative overflow-hidden rounded-[3rem] bg-indigo-600 p-8 md:p-16 lg:p-20 text-center"
            >
                {/* Decorative Background Circles */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-400/20 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px]" />

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-8">
                        Ready to boost conversions with intelligent WhatsApp routing?
                    </h2>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-2 rounded-2xl py-4 px-10 bg-white text-indigo-600 font-bold shadow-xl shadow-indigo-900/20 transition-all"
                    >
                        <span>Get Started Now</span>
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
}