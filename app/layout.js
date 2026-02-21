import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Connectapre - Intelligent WhatsApp Chat Widget for WordPress",
    description: "Connectapre helps you scale your customer support with smart routing, location-based agent matching, and detailed analytics.",
    icons: {
        icon: "/assets/favicon.ico",
        shortcut: "/assets/favicon-32x32.png",
        apple: "/assets/apple-touch-icon.png",
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