"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

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

export default function WhatsAppWidget({ isVisible }) {
    const [showPopup, setShowPopup] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false);

    const handleWhatsAppClick = () => {
        setShowPopup(true);
    };

    const handleRedirect = () => {
        setIsRedirecting(true);
        // Simulate location detection and redirect
        setTimeout(() => {
            // we could use an actual geo-ip service here, but for demo we just use a generic link
            window.open("https://wa.link/connectapre", "_blank");
            setIsRedirecting(false);
            setShowPopup(false);
        }, 2000);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-20 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 overflow-hidden"
                    >
                        <div className="relative z-10">
                            <button 
                                onClick={() => setShowPopup(false)}
                                className="absolute -top-1 -right-1 p-1 text-slate-400 hover:text-slate-600 transition"
                            >
                                <X size={18} />
                            </button>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                    <WhatsAppIcon className="text-emerald-600" size={28} />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900">Start Chatting</h3>
                                <p className="text-sm text-slate-600 mt-2">
                                    You'll be redirected to your local agent based on your location.
                                </p>
                                <button
                                    onClick={handleRedirect}
                                    disabled={isRedirecting}
                                    className="w-full mt-5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                                >
                                    {isRedirecting ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <WhatsAppIcon size={18} />
                                            Redirect Me
                                        </>
                                    )}
                                </button>
                                <p className="text-[10px] text-slate-400 mt-3 uppercase tracking-wider font-medium">
                                    Powered by Connectapre
                                </p>
                            </div>
                        </div>
                        {/* Decorative background circle */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-50 rounded-full -z-0" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleWhatsAppClick}
                className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 transition-colors"
            >
                <WhatsAppIcon size={32} />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                </span>
            </motion.button>
        </div>
    );
}
