import { CheckIcon } from "lucide-react";

export const pricingData = [
    {
        title: "Single Site",
        price: 29,
        features: [
            {
                name: "1 Domain License",
                icon: CheckIcon,
            },
            {
                name: "Smart Agent Routing",
                icon: CheckIcon,
            },
            {
                name: "Standard Support",
                icon: CheckIcon,
            },
            {
                name: "Basic Analytics",
                icon: CheckIcon,
            },
            {
                name: "20 Button Styles",
                icon: CheckIcon,
            },
        ],
        buttonText: "Buy Now",
    },
    {
        title: "Agency",
        price: 79,
        mostPopular: true,
        features: [
            {
                name: "5 Domain Licenses",
                icon: CheckIcon,
            },
            {
                name: "Advanced Geo-Detection",
                icon: CheckIcon,
            },
            {
                name: "Priority Support",
                icon: CheckIcon,
            },
            {
                name: "Full Analytics & Exports",
                icon: CheckIcon,
            },
            {
                name: "Dynamic Placeholders",
                icon: CheckIcon,
            },
            {
                name: "Team Management",
                icon: CheckIcon,
            }
        ],
        buttonText: "Buy Now",
    },
    {
        title: "Unlimited",
        price: 149,
        features: [
            {
                name: "Unlimited Domains",
                icon: CheckIcon,
            },
            {
                name: "White Label Mode",
                icon: CheckIcon,
            },
            {
                name: "Priority 24/7 Support",
                icon: CheckIcon,
            },
            {
                name: "Expert Installation",
                icon: CheckIcon,
            },
            {
                name: "Developer API Access",
                icon: CheckIcon,
            }
        ],
        buttonText: "Contact Sales",
    }
];