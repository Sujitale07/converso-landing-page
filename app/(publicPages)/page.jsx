import BottomBanner from "@/sections/BottomBanner";
import DashboardPreview from "@/sections/DashboardPreview";
import { FaqSection } from "@/sections/FaqSection";
import FeaturesSection from "@/sections/FeaturesSection";
import HeroSection from "@/sections/HeroSection";
import HowItWorks from "@/sections/HowItWorks";
import Testimonials from "@/sections/Testimonials";
import TrustedCompanies from "@/sections/TrustedCompanies";
import BlogSection from "@/sections/BlogSection";

export const metadata = {
    title: "Connectapre - Intelligent WhatsApp Chat Widget for WordPress",
    description: "Connectapre is the most intelligent WhatsApp chat widget for WordPress. Featuring smart routing, location-based agent matching, and real-time analytics.",
    alternates: {
        canonical: "/",
    },
};

export default function Page() {
    return (
        <>
            <HeroSection />
            {/* <TrustedCompanies /> */}
            <HowItWorks />
            <FeaturesSection />
            <DashboardPreview />
            <Testimonials />
            <FaqSection />
            <BlogSection />
            {/* <BottomBanner /> */}
        </>
    );
}