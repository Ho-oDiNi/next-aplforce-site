import { notFound } from "next/navigation";

import ServiceContent from "../_components/ServiceContent";

import { getServiceBySlug } from "@/data/services";

interface ServicePageProps {
    params: {
        slug: string;
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <section className="bg-background-secondary rounded-2xl p-8">
            <ServiceContent service={service} />
        </section>
    );
}

export const generateStaticParams = async () => {
    return [
        { slug: "sealing" },
        { slug: "repairing" },
        { slug: "dismantling" },
    ];
};

export const revalidate = 3600;
