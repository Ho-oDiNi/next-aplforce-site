import ServiceMain from "@shared/ServiceMain";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import AdvantageSection from "@/components/sections/AdvantageSection";
import InviteSection from "@/components/sections/InviteSection";
import TitleSection from "@/components/sections/TitleSection";
import AccordionFAQ from "@/components/ui/AccordionFAQ";
import { getServiceBySlug } from "@/data/services";
import { ServicePageProps } from "@/types";
import getCityFromHost from "@/utils/getCityFromHost";
import getCityInPrepositional from "@/utils/getCityInPrepositional";

type Props = {
    params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    return {
        title: service?.metaTitle,
        description: service?.metaDescription,
    };
};

export default async function ServicePage({ params }: ServicePageProps) {
    const cityName = await getCityFromHost();
    const inCity = getCityInPrepositional(cityName);

    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <TitleSection
                title={`${service.title} в ${inCity}`}
                description={service.description}
                hasMiniAdvantage={true}
            />
            <ServiceMain service={service} />
            <AdvantageSection />
            <AccordionFAQ
                title="Ответы на вопросы"
                description={service.faqDescription}
                AccordionItems={service.faqItems}
            />
            <InviteSection />
        </>
    );
}

export const generateStaticParams = async () => {
    return [
        { slug: "remont-mezhpanelnykh-shvov" },
        { slug: "germetizatsiya-mezhpanelnykh-shvov" },
        { slug: "pervichnaya-zadelka-shvov" },
    ];
};

export const revalidate = 1;
