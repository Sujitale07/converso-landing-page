import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mt-40 w-full text-slate-500">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 pb-6">
                <div className="md:max-w-114">
                    <a href="#!">
                        <Image className="h-9 md:h-9.5 w-auto shrink-0" src="/assets/LOGO.gif" alt="Logo" width={140} height={40} priority fetchPriority="high" />
                    </a>
                    <p className="mt-6">
                        Connectapre is the intelligent WhatsApp Chat widget for WordPress. Smart routing, analytics, and personalization to help you connect with customers better.
                    </p>
                    <p className="mt-6">WhatsApp is a registered trademark of Meta Platforms, Inc.<br />
This plugin is not affiliated with, endorsed, or sponsored by Meta or WhatsApp.</p>
                </div>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 md:justify-items-end">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
                            <li><Link href="/blog" className="hover:text-indigo-600">Blog</Link></li>
                            <li><Link href="/changelog" className="hover:text-indigo-600">Changelog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Product</h2>
                        <ul className="space-y-2">
                            <li><Link href="#features" className="hover:text-indigo-600">Features</Link></li>
                            <li><Link href="/integrations" className="hover:text-indigo-600">Integrations</Link></li>
                            <li><Link href="#pricing" className="hover:text-indigo-600">Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Support</h2>
                        <ul className="space-y-2">
                            <li><Link href="/contact" className="hover:text-indigo-600">Contact Us</Link></li>
                            <li><Link href="#faq" className="hover:text-indigo-600">FAQs</Link></li>
                            <li><Link href="/docs" className="hover:text-indigo-600">Documentation</Link></li>
                            <li><Link href="/sitemap.xml" className="hover:text-indigo-600" target="_blank">Sitemap</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center pb-5">
                Copyright {new Date().getFullYear()} © Connectapre. All Rights Reserved.
            </p>
        </footer>
    );
};