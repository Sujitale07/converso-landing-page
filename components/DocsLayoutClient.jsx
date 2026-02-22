"use client";
import { docsData } from "@/data/docsData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Book, FileText, Search } from "lucide-react";
import { useState } from "react";

export default function DocsLayoutClient({ children }) {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState("");

    // Filter docs based on search
    const filteredDocs = searchQuery 
        ? docsData.map(cat => ({
            ...cat,
            items: cat.items.filter(item => 
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
        })).filter(cat => cat.items.length > 0)
        : docsData;

    return (
        <div className="pt-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
                {/* Sidebar */}
                <aside className="w-full md:w-72 md:fixed md:h-[calc(100vh-6rem)] md:overflow-y-auto px-6 py-10 border-b md:border-b-0 md:border-r border-slate-50 scrollbar-hide">
                    <div className="mb-10 relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            <Search size={14} />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search docs..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-300"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <nav className="space-y-10">
                        {filteredDocs.map((category, index) => (
                            <div key={index}>
                                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                    <Book size={12} className="text-indigo-500/50" />
                                    {category.category}
                                </h3>
                                <ul className="space-y-1">
                                    {category.items.map((item) => (
                                        <li key={item.slug}>
                                            <Link 
                                                href={`/docs/${item.slug}`}
                                                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                                                    pathname === `/docs/${item.slug}` 
                                                    ? "bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-500/5" 
                                                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                                }`}
                                            >
                                                <FileText size={14} className={pathname === `/docs/${item.slug}` ? "text-indigo-500" : "text-slate-300"} />
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>

                    <div className="mt-20 p-5 bg-slate-900 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 size-24 bg-indigo-600/20 blur-[40px] rounded-full -mr-12 -mt-12"></div>
                        <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-2 relative z-10">Need Help?</p>
                        <p className="text-[11px] text-slate-400 leading-relaxed mb-4 relative z-10">Can't find what you're looking for?</p>
                        <Link href="/contact" className="text-[11px] font-bold text-white hover:text-indigo-400 transition flex items-center gap-1 relative z-10">
                            Chat with Support <ChevronRight size={12} />
                        </Link>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 md:ml-72 px-6 py-10 md:px-16 md:py-16">
                    <div className="max-w-3xl">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
