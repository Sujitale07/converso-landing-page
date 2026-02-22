"use client";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <main className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-32">
                <header className="mb-20 text-center">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="uppercase font-medium text-indigo-600 mb-2 tracking-wide"
                    >
                        Contact
                    </motion.p>
                    <motion.h1 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4"
                    >
                        How can we <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">help you?</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed"
                    >
                        Have a question about our features or need technical assistance? Our team is here to support your growth.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-base font-semibold text-slate-800 mb-6">Contact Information</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 rounded-2xl bg-white border border-slate-100 group hover:border-indigo-100 transition-all">
                                    <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                        <Mail size={18} />
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                                    <p className="text-sm font-semibold text-slate-800">support@connectapre.com</p>
                                </div>

                                <div className="p-6 rounded-2xl bg-white border border-slate-100 group hover:border-emerald-100 transition-all">
                                    <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-emerald-500 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                        <MessageCircle size={18} />
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">WhatsApp</p>
                                    <p className="text-sm font-semibold text-slate-800">+1 (234) 567-890</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 group">
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-indigo-600 shadow-sm transition-all group-hover:bg-indigo-600 group-hover:text-white">
                                    <Clock size={18} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Business Hours</p>
                                    <p className="text-sm font-semibold text-slate-800">Monday - Friday, 9am - 6pm EST</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 bg-slate-900 rounded-3xl text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 size-48 bg-indigo-600/30 blur-[80px] rounded-full -mr-24 -mt-24 transition-all group-hover:bg-indigo-600/40"></div>
                            <div className="relative z-10">
                                <h3 className="text-lg font-semibold mb-4 text-white">Instant Demo?</h3>
                                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                                    Want to see Connectapre in action? Test our dynamic routing right now.
                                </p>
                                <Link href="/" className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition text-sm">
                                    View Live Demo <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-[0px_4px_26px] shadow-black/5"
                    >
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="size-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h2 className="text-xl font-semibold text-slate-900 mb-3">Message Sent!</h2>
                                <p className="text-sm text-slate-500 mb-8 max-w-xs mx-auto">
                                    We've received your inquiry and will get back to you as soon as possible.
                                </p>
                                <button 
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition text-xs"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Name</label>
                                        <input 
                                            required
                                            type="text" 
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-300"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Email</label>
                                        <input 
                                            required
                                            type="email" 
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-300"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Subject</label>
                                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-slate-800 font-medium">
                                        <option>General Inquiry</option>
                                        <option>Technical Support</option>
                                        <option>Sales & Licensing</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Message</label>
                                    <textarea 
                                        required
                                        rows={5}
                                        placeholder="Tell us how we can help you..."
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-300 resize-none"
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit"
                                    className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-indigo-600/10 active:scale-[0.98] text-sm"
                                >
                                    <span>Send Message</span>
                                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                                <p className="text-[10px] text-center text-slate-400 pt-2">
                                    By submitting, you agree to our <Link href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link>.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
