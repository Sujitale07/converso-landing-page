import BottomBanner from "@/sections/BottomBanner";
import DashboardPreview from "@/sections/DashboardPreview";
import { FaqSection } from "@/sections/FaqSection";
import FeaturesSection from "@/sections/FeaturesSection";
import HeroSection from "@/sections/HeroSection";
import HowItWorks from "@/sections/HowItWorks";
import Testimonials from "@/sections/Testimonials";
import TrustedCompanies from "@/sections/TrustedCompanies";

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
            {/* <BottomBanner /> */}
        </>
    );
}