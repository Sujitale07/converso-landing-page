import { blogPosts } from "@/data/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, ChevronRight } from "lucide-react";
import ArticleFeedback from "@/components/ArticleFeedback";

// This enables SSG for this dynamic route
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    
    if (!post) return { title: "Post Not Found" };
    
    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
        alternates: {
            canonical: `/blog/${slug}`,
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
    const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

    // Get related posts (from the same category, excluding current)
    const relatedPosts = blogPosts
        .filter((p) => p.category === post.category && p.slug !== slug)
        .slice(0, 3);

    // If not enough related posts in same category, fill with others
    if (relatedPosts.length < 3) {
        const others = blogPosts
            .filter((p) => p.category !== post.category && p.slug !== slug)
            .slice(0, 3 - relatedPosts.length);
        relatedPosts.push(...others);
    }

    return (
        <main className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <nav className="mb-12 flex items-center gap-2 text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                    <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
                    <ChevronRight size={12} className="text-slate-200" />
                    <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
                    <ChevronRight size={12} className="text-slate-200" />
                    <span className="text-slate-900 truncate max-w-[150px] md:max-w-none">{post.title}</span>
                </nav>

                <article>
                    <header className="mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full mb-6 uppercase tracking-widest border border-indigo-100/50">
                            {post.category}
                        </div>
                        <h1 className="text-[32px]/10 md:text-[44px]/13 font-semibold text-slate-900 mb-8 tracking-tight">
                            {post.title}
                        </h1>
                        
                        <div className="flex flex-wrap items-center gap-8 py-6 border-y border-slate-50">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xs">
                                    {post.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-slate-900">{post.author}</span>
                                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Author</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium mb-0.5">
                                        <Calendar size={13} className="text-indigo-500" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider pl-5">Date</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium mb-0.5">
                                        <Clock size={13} className="text-indigo-500" />
                                        <span>{post.readTime}</span>
                                    </div>
                                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider pl-5">Read Time</div>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="w-full aspect-[16/9] bg-slate-100 rounded-2xl overflow-hidden mb-12 relative border border-slate-100 shadow-sm">
                         <Image 
                            src={post.image} 
                            alt={post.title} 
                            fill 
                            className="object-cover"
                            priority 
                         />
                    </div>

                    <div 
                        className="blog-content max-w-none text-slate-600 mb-20"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Navigation between posts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 border-y border-slate-50 mb-20">
                        {prevPost ? (
                            <Link href={`/blog/${prevPost.slug}`} className="group p-6 rounded-2xl border border-slate-50 hover:border-indigo-100 hover:bg-slate-50/50 transition-all text-left">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Previous Article</span>
                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-1">{prevPost.title}</h4>
                            </Link>
                        ) : <div />}
                        
                        {nextPost ? (
                            <Link href={`/blog/${nextPost.slug}`} className="group p-6 rounded-2xl border border-slate-50 hover:border-indigo-100 hover:bg-slate-50/50 transition-all text-right">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Next Article</span>
                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-1">{nextPost.title}</h4>
                            </Link>
                        ) : <div />}
                    </div>

                    <div className="mb-20">
                        <h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <div className="w-8 h-[2px] bg-indigo-600"></div>
                            Related Articles
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((rPost) => (
                                <Link key={rPost.id} href={`/blog/${rPost.slug}`} className="group">
                                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-50">
                                        <Image src={rPost.image} alt={rPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <h4 className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">
                                        {rPost.title}
                                    </h4>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <footer className="mt-20 pt-12 border-t border-slate-100">
                        <ArticleFeedback slug={slug} />

                        <div className="mt-8 bg-slate-900 p-10 md:p-14 rounded-3xl text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 size-64 bg-indigo-600/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                                    Scale your WhatsApp support
                                </h3>
                                <p className="text-slate-400 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                                    Join thousands of WordPress businesses using Connectapre to manage their WhatsApp communications efficiently.
                                </p>
                                <Link 
                                    href="https://wordpress.org/plugins/connectapre/"
                                    className="inline-flex items-center justify-center px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition text-sm"
                                >
                                    Download Plugin Free
                                </Link>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 text-sm font-semibold hover:text-indigo-600 transition">
                                <ArrowLeft size={16} /> Back to Blog
                            </Link>
                        </div>
                    </footer>
                </article>
            </div>
        </main>
    );
}
