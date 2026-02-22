import DocsLayoutClient from "@/components/DocsLayoutClient";

export const metadata = {
    title: "Documentation",
    description: "Welcome to the Connectapre documentation. Everything you need to set up, customize, and optimize your WhatsApp chat widget.",
    alternates: {
        canonical: "/docs",
    },
};

export default function DocsLayout({ children }) {
    return <DocsLayoutClient>{children}</DocsLayoutClient>;
}
