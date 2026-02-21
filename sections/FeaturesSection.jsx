import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function FeaturesSection() {
    return (
        <>
        <section id="features" className="pb-24 px-6 md:px-16 lg:px-24 xl:px-32">

            <SectionTitle text1="Features" text2="Why Choose Connectapre?" text3="Advanced routing, detailed analytics, and complete customization to power your WhatsApp customer support." />

            <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <Image className="rounded-xl" src="/assets/smart-routing.svg" alt="Card Image" height={400} width={400} />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Smart Agent Routing</h3>
                    <p className="text-sm text-slate-600 mt-1">Route visitors to the right agent based on their City, State, or Country automatically. Fallback to default agents if needed.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <Image className="rounded-xl" src="/assets/dashboard.svg" alt="Card Image" height={400} width={400} />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Analytics Dashboard</h3>
                    <p className="text-sm text-slate-600 mt-1">Track total clicks, top markets, and engagement pages. Get real-time logs of interactions and export reports.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <Image className="rounded-xl" src="/assets/dynamic-fields.svg" alt="Card Image" height={400} width={400} />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Dynamic Personalization</h3>
                    <p className="text-sm text-slate-600 mt-1">Use Smart Placeholders to pre-fill greeting messages with dynamic context like product names or offer codes.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <Image className="rounded-xl" src="/assets/style.svg" alt="Card Image" height={400} width={400} />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Visual Customization</h3>
                    <p className="text-sm text-slate-600 mt-1">Choose from 20+ button styles and position them anywhere. Preview changes in real-time within your admin panel.</p>
                </div>
            </div>
        </section>
        </>
    );
}