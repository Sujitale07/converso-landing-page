"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ArticleFeedback({ slug }) {
    const [submitted, setSubmitted] = useState(false);

    const handleFeedback = async (type) => {
        setSubmitted(true);
        
        try {
            await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type,
                    slug,
                    timestamp: new Date().toISOString(),
                }),
            });
        } catch (error) {
            console.error('Failed to save feedback:', error);
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16">
            <AnimatePresence mode="wait">
                {!submitted ? (
                    <motion.div 
                        key="question"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex flex-col md:flex-row items-center justify-between w-full gap-8"
                    >
                        <div className="text-slate-900 font-semibold text-lg">
                            Was this article helpful?
                        </div>
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => handleFeedback('yes')}
                                className="group flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all text-xs shadow-md shadow-indigo-600/10 active:scale-95"
                            >
                                <ThumbsUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                                Yes, thanks!
                            </button>
                            <button 
                                onClick={() => handleFeedback('no')}
                                className="group flex items-center gap-2 px-6 py-2.5 bg-white text-slate-600 border border-slate-200 font-semibold rounded-xl hover:bg-slate-50 transition-all text-xs active:scale-95"
                            >
                                <ThumbsDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                                Not really
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="thanks"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-3 py-2 text-emerald-600 font-semibold"
                    >
                        <CheckCircle2 size={20} />
                        <span>Thanks for your feedback! It helps us improve our content.</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
