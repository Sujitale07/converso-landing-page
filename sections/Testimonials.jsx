import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonialsData } from "@/data/testimonialsData";
import Marquee from "react-fast-marquee";

export default function Testimonials() {
    return (
        <>
            <SectionTitle text1="Testimonials" text2="What Our Users Say" text3="See how businesses around the world are using Connectapre to improve their customer support." />

            <Marquee className="max-w-5xl mx-auto mt-11" gradient={true} speed={25}>
                <div className="flex items-center justify-center py-5">
                    {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </Marquee>
            <Marquee className="max-w-5xl mx-auto" gradient={true} speed={25} direction="right">
                <div className="flex items-center justify-center py-5">
                    {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </Marquee>
        </>
    );
}