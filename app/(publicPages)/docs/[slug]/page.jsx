import { docsData } from "@/data/docsData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ArrowLeft, ArrowRight, Clock } from "lucide-react";

export async function generateStaticParams() {
    return docsData.flatMap(category => 
        category.items.map(item => ({
            slug: item.slug
        }))
    );
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    
    let currentItem = null;
    docsData.forEach(category => {
        category.items.forEach(item => {
            if (item.slug === slug) currentItem = item;
        });
    });
    
    if (!currentItem) return { title: "Article Not Found" };
    
    return {
        title: currentItem.title,
        description: `Learn how to use ${currentItem.title} in Connectapre to scale your WhatsApp support.`,
        alternates: {
            canonical: `/docs/${slug}`,
        },
    };
}

export default async function DocsArticlePage({ params }) {
    const { slug } = await params;
    
    let currentItem = null;
    let category = null;
    let prevItem = null;
    let nextItem = null;

    // Flatten items to find current, prev and next
    const allItems = docsData.flatMap(c => c.items);
    const currentIndex = allItems.findIndex(i => i.slug === slug);

    if (currentIndex === -1) {
        notFound();
    }

    currentItem = allItems[currentIndex];
    prevItem = allItems[currentIndex - 1];
    nextItem = allItems[currentIndex + 1];

    // Find category name
    category = docsData.find(c => c.items.some(i => i.slug === slug))?.category;

    return (
        <article>
            <nav className="mb-10 flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                <Link href="/docs" className="hover:text-indigo-600 transition-colors">Docs</Link>
                <ChevronRight size={12} className="text-slate-200" />
                <span className="text-slate-300">{category}</span>
                <ChevronRight size={12} className="text-slate-200" />
                <span className="text-slate-900 truncate">{currentItem.title}</span>
            </nav>

            <header className="mb-10 pb-10 border-b border-slate-50">
                <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
                    {currentItem.title}
                </h1>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <Clock size={14} className="text-indigo-500/50" />
                    <span>Last updated: Feb 2026</span>
                </div>
            </header>

            <div 
                className="blog-content max-w-none text-slate-600"
                dangerouslySetInnerHTML={{ __html: currentItem.content }}
            />

            <footer className="mt-20 pt-10 border-t border-slate-50">
                <div className="grid grid-cols-2 gap-4">
                    {prevItem ? (
                        <Link 
                            href={`/docs/${prevItem.slug}`}
                            className="group p-5 border border-slate-50 rounded-2xl hover:border-indigo-100 transition-colors text-left"
                        >
                            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1 group-hover:text-indigo-600">Previous</p>
                            <p className="text-xs font-semibold text-slate-900 flex items-center gap-1">
                                <ArrowLeft size={14} /> {prevItem.title}
                            </p>
                        </Link>
                    ) : <div></div>}

                    {nextItem ? (
                        <Link 
                            href={`/docs/${nextItem.slug}`}
                            className="group p-5 border border-slate-50 rounded-2xl hover:border-indigo-100 transition-colors text-right"
                        >
                            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1 group-hover:text-indigo-600">Next</p>
                            <p className="text-xs font-semibold text-slate-900 flex items-center justify-end gap-1">
                                {nextItem.title} <ArrowRight size={14} />
                            </p>
                        </Link>
                    ) : <div></div>}
                </div>

                <div className="mt-16 p-8 bg-indigo-600 rounded-3xl text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 size-48 bg-white/10 blur-3xl rounded-full -mr-24 -mt-24"></div>
                    <div className="relative z-10">
                        <h3 className="text-lg font-semibold text-white mb-2">Still need help?</h3>
                        <p className="text-indigo-100 text-xs mb-6 max-w-xs mx-auto">
                            If you couldn't find the answer you were looking for, our support team is ready to help.
                        </p>
                        <Link 
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-indigo-600 font-semibold rounded-md hover:bg-slate-50 transition text-xs"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </footer>
        </article>
    );
}
