"use client";

import { Twitter, Facebook, Linkedin, Instagram, Link2, Share2, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SocialShare({ title, slug }) {
    const [copied, setCopied] = useState(false);
    const [instaCopied, setInstaCopied] = useState(false);
    const url = typeof window !== 'undefined' ? `${window.location.origin}/blog/${slug}` : `https://connectapre.com/blog/${slug}`;

    const shareLinks = [
        {
            name: "WhatsApp",
            icon: MessageCircle,
            href: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
            color: "hover:bg-emerald-500",
        },
        {
            name: "X",
            icon: Twitter,
            href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
            color: "hover:bg-slate-900",
        },
        {
            name: "Facebook",
            icon: Facebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            color: "hover:bg-blue-600",
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            color: "hover:bg-blue-700",
        },
        {
            name: "Reddit",
            icon: Send,
            href: `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
            color: "hover:bg-orange-600",
        },
    ];

    const copyForInsta = () => {
        navigator.clipboard.writeText(url);
        setInstaCopied(true);
        setTimeout(() => setInstaCopied(false), 2000);
        // Instagram doesn't have a direct share URL, so we copy and inform
        window.open('https://www.instagram.com/', '_blank');
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    url: url
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            copyToClipboard();
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Share post</span>
            <div className="flex items-center gap-2">
                {shareLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`size-9 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 ${link.color} hover:text-white hover:border-transparent transition-all duration-300`}
                        title={`Share on ${link.name}`}
                    >
                        <link.icon size={16} />
                    </a>
                ))}
                
                <button
                    onClick={copyForInsta}
                    className="size-9 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent transition-all duration-300 relative"
                    title="Share to Instagram Story"
                >
                    <AnimatePresence mode="wait">
                        {instaCopied ? (
                            <motion.div
                                key="check-insta"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                            >
                                <motion.span className="text-[10px] absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-2 py-1 rounded whitespace-nowrap">
                                    Link copied for Story!
                                </motion.span>
                                <Instagram size={16} />
                            </motion.div>
                        ) : (
                            <Instagram size={16} />
                        )}
                    </AnimatePresence>
                </button>

                <button
                    onClick={copyToClipboard}
                    className="size-9 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-transparent transition-all duration-300 relative"
                    title="Copy link"
                >
                    <AnimatePresence mode="wait">
                        {copied ? (
                            <motion.div
                                key="check"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                            >
                                <motion.span className="text-[10px] absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-2 py-1 rounded whitespace-nowrap">
                                    Copied!
                                </motion.span>
                                <Link2 size={16} className="text-emerald-400" />
                            </motion.div>
                        ) : (
                            <Link2 size={16} />
                        )}
                    </AnimatePresence>
                </button>

                {typeof navigator !== 'undefined' && navigator.share && (
                    <button
                        onClick={handleShare}
                        className="size-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300"
                        title="Native Share"
                    >
                        <Share2 size={16} />
                    </button>
                )}
            </div>
        </div>
    );
}
