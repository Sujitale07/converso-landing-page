import { blogPosts } from "@/data/blogData";
import { docsData } from "@/data/docsData";

export default function sitemap() {
    const baseUrl = "https://connectapre.sujitmagar.com.np";

    // 1. Static Routes
    const staticRoutes = ["", "/blog", "/docs", "/integrations", "/changelog", "/contact"].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: route === "" ? 1 : 0.8,
        })
    );

    // 2. Blog Posts
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
    }));

    // 3. Documentation
    const docRoutes = docsData.flatMap((cat) =>
        cat.items.map((item) => ({
            url: `${baseUrl}/docs/${item.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        }))
    );

    return [...staticRoutes, ...blogRoutes, ...docRoutes];
}
