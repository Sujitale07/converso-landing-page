"use client";
import { motion } from "framer-motion";
import { Rocket, Zap, Shield, Bug, RefreshCcw, ChevronRight } from "lucide-react";
import Link from "next/link";

const releases = [
    {
        version: "v1.0.0",
        date: "February 20, 2026",
        title: "The Intelligence Update",
        type: "major",
        changes: [
            { type: "new", text: "Introduced Location-Based Smart Routing for agents." },
            { type: "new", text: "New Analytics Dashboard with real-time conversion tracking." },
            { type: "improve", text: "Redesigned Widget Admin UI for better user experience." },
            { type: "fix", text: "Resolved mobile responsiveness issue in wide containers." }
        ]
    },
    {
        version: "v0.9.5",
        date: "February 12, 2026",
        title: "Personalization Beta",
        type: "minor",
        changes: [
            { type: "new", text: "Dynamic Smart Placeholders for greet messages." },
            { type: "improve", text: "Increased IP detection accuracy for edge regions." },
            { type: "fix", text: "Fixed PHP 8.2 compatibility issues in core routing." }
        ]
    },
    {
        version: "v0.9.0",
        date: "January 28, 2026",
        title: "Initial Launch",
        type: "minor",
        changes: [
            { type: "new", text: "Core WhatsApp Widget functionality." },
            { type: "new", text: "Basic Agent Management system." },
            { type: "new", text: "WordPress Plugin Repo initial submission." }
        ]
    }
];

const TypeTag = ({ type }) => {
    const styles = {
        new: "bg-emerald-50 text-emerald-600 border-emerald-100",
        improve: "bg-indigo-50 text-indigo-600 border-indigo-100",
        fix: "bg-amber-50 text-amber-600 border-amber-100"
    };
    return (
        <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border ${styles[type]}`}>
            {type}
        </span>
    );
};

export default function ChangelogPage() {
    return (
        <main className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <header className="mb-20 text-center">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="uppercase font-medium text-indigo-600 mb-2 tracking-wide"
                    >
                        Evolution
                    </motion.p>
                    <motion.h1 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4"
                    >
                        Product <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">Changelog</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed"
                    >
                        Stay updated with the latest features, improvements, and fixes we've pushed to Connectapre.
                    </motion.p>
                </header>

                <div className="space-y-16 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[7px] md:left-1/2 top-4 bottom-4 w-px bg-slate-100 hidden md:block"></div>

                    {releases.map((release, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`relative flex flex-col md:flex-row gap-8 md:gap-24 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                        >
                            {/* Version & Date Side */}
                            <div className="flex-1 md:text-right">
                                <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                                    <div className="flex items-center gap-3 mb-2">
                                        {index % 2 !== 0 && <div className="size-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm ring-1 ring-slate-100 hidden md:block" />}
                                        <span className="text-xl font-bold text-slate-900 tracking-tight">{release.version}</span>
                                        {index % 2 === 0 && <div className="size-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm ring-1 ring-slate-100 hidden md:block" />}
                                    </div>
                                    <p className="text-sm font-medium text-slate-400">{release.date}</p>
                                </div>
                            </div>

                            {/* Centered Node (Mobile only) */}
                            <div className="absolute left-0 mt-2 md:hidden">
                                <div className="size-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm ring-1 ring-slate-100" />
                            </div>

                            {/* Content Side */}
                            <div className="flex-[1.5] bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative">
                                <div className="absolute top-4 right-6">
                                    {release.type === 'major' ? <Rocket className="text-indigo-600 opacity-20" size={40} /> : <Zap className="text-amber-500 opacity-20" size={40} />}
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-6">{release.title}</h3>
                                <div className="space-y-4">
                                    {release.changes.map((change, cIdx) => (
                                        <div key={cIdx} className="flex items-start gap-3">
                                            <div className="mt-1">
                                                <TypeTag type={change.type} />
                                            </div>
                                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                                {change.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-sm text-slate-400 font-medium mb-6">Want to be the first to know about new features?</p>
                    <Link 
                        href="https://wordpress.org/plugins/connectapre/"
                        className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all text-sm"
                    >
                        Follow us on WordPress.org <ChevronRight size={16} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
