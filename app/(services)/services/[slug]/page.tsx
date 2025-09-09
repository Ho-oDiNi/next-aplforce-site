import { notFound } from "next/navigation";

import InviteSection from "../_components/InviteSection";
import ServiceSection from "../_components/ServiceSection";

import AdvantageSection from "@/components/shared/AdvantageSection";
import AccordionFAQ from "@/components/ui/AccordionFAQ";
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

    const faqItems: [string, string][] = [
        [
            "Что делать, если течет межпанельный шов в моей квартире?",
            "Немедленно обратиться в управляющую компанию с письменным заявлением. Зафиксируйте проблему фото и видео. УК обязана составить акт и назначить ремонт текущих межпанельных швов.",
        ],
        [
            "Кто должен делать ремонт межпанельных швов?",
            "По закону, содержание общедомового имущества (фасада) — обязанность управляющей компании (УК). Жильцы вправе требовать от УК устранения проблем. Мы ведем работы по заделке межпонельных швов как с УК, так и напрямую с ТСЖ и собственниками квартир.",
        ],
        [
            "Как формируется цена и нужна ли смета на межпанельные швы?",
            "Смета на межпанельные швы составляется после осмотра объекта. Цена ремонта зависит от объема работ, состояния стыков, этажности и используемых материалов. Мы предоставляем детализированный расчет перед началом работ.",
        ],
        [
            "Чем лучше заделывают межпанельные швы?",
            "«Золотой стандарт» — технология «теплый шов»: монтаж утеплителя «Вилатерм» с последующей герметизацией полиуретановым герметиком. Это обеспечивает и гидроизоляцию, и утепление стыков.",
        ],
        [
            "Нужна ли первичная заделка швов в новостройке?",
            "Да, это критически важно. Своевременная первичная заделка межпанельного шва профессиональными материалами предотвратит проблемы в будущем и сэкономит средства на последующий ремонт.",
        ],
    ];

    return (
        <>
            <ServiceSection service={service} />
            <AdvantageSection />
            <AccordionFAQ
                title="Ответы на вопросы"
                description=""
                AccordionItems={faqItems}
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
