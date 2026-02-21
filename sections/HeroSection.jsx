"use client";

import { ChevronRightIcon, MessageCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const WhatsAppIcon = ({ size = 24, className = "" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
);

export default function HeroSection() {
    const [demoActive, setDemoActive] = useState(false);

    const handleViewDemo = (e) => {
        e.preventDefault();
        setDemoActive(true);
    };

    return (
        <section className="relative flex flex-col items-center justify-center text-center bg-[url('/assets/hero-section-dot-image.png')] bg-cover bg-no-repeat overflow-hidden">
            
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-50/20 to-transparent -z-10" />

            <motion.a 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                href="#" 
                className="flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-indigo-600 bg-indigo-50"
            >
                <span className="bg-indigo-600 text-white text-[11px] font-medium px-3 py-0.5 rounded-full">
                    NEW
                </span>
                <p className="flex items-center gap-1 text-xs">
                    <span>Connectapre 1.0 is now live</span>
                    <ChevronRightIcon size={14} />
                </p>
            </motion.a>

            <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[40px]/12 md:text-[54px]/16 font-semibold max-w-3xl mt-4 text-slate-900"
            >
                Intelligent WhatsApp{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">
                    Chat Widget
                </span>
                {" "}for WordPress
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base text-slate-600 max-w-lg mt-5"
            >
                More than just a button. Smart routing, location-based agent matching, detailed analytics, and dynamic personalization to boost your conversions.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-4 mt-6"
            >
                <Link href="https://wordpress.org/plugins/connectapre/" className="bg-indigo-600 hover:bg-indigo-700 transition px-8 py-3 rounded-md text-white">
                    Get Started
                </Link>
                <button 
                    onClick={handleViewDemo}
                    className="flex items-center justify-center gap-2 border border-indigo-400 px-5 py-3 rounded-md text-indigo-600 hover:bg-indigo-50 transition"
                >
                    <WhatsAppIcon size={18} />
                    View Demo
                </button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-full max-w-xl mt-16 px-6"
            >
                <Image 
                    className="w-full h-auto drop-shadow-2xl drop-shadow-blue-500/15 mx-auto rounded-xl" 
                    src="/assets/hero-section-card-image.svg" 
                    alt="Connectapre Dashboard" 
                    width={1000} 
                    height={500} 
                    priority 
                />
            </motion.div>

            <WhatsAppWidget isVisible={demoActive} />
        </section>
    );
}