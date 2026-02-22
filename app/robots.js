export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: "https://connectapre.sujitmagar.com.np/sitemap.xml",
    };
}
