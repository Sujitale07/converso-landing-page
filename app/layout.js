import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    metadataBase: new URL("https://connectapre.sujitmagar.com.np"),
    title: {
        default: "Connectapre - Intelligent WhatsApp Chat Widget for WordPress",
        template: "%s | Connectapre"
    },
    description: "Connectapre helps you scale your customer support with smart routing, location-based agent matching, and detailed analytics for WordPress.",
    keywords: ["WhatsApp Chat Widget", "WordPress Plugin", "Smart Routing", "Customer Support", "Agent Matching", "Conversion Optimization"],
    authors: [{ name: "Connectapre Team" }],
    creator: "Connectapre",
    publisher: "Connectapre",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Connectapre - Intelligent WhatsApp Chat Widget for WordPress",
        description: "Scale your customer support with smart routing and location-based agent matching.",
        url: "https://connectapre.sujitmagar.com.np",
        siteName: "Connectapre",
        images: [
            {
                url: "/assets/og-image.png",
                width: 1200,
                height: 630,
                alt: "Connectapre Dashboard Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Connectapre - Intelligent WhatsApp Chat Widget for WordPress",
        description: "Scale your customer support with smart routing and location-based agent matching.",
        creator: "@connectapre",
        images: ["/assets/og-image.png"],
    },
    icons: {
        icon: "/assets/favicon.ico",
        shortcut: "/assets/favicon-32x32.png",
        apple: "/assets/apple-touch-icon.png",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>
                <SmoothScrollProvider>
                    {children}
                </SmoothScrollProvider>
            </body>
        </html>
    );
}