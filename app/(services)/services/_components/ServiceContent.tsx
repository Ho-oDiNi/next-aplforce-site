import React from "react";

import ServiceDetailsList from "./ServiceDetailsList";
import ServiceHeader from "./ServiceHeader";
import ServiceInfoBadge from "./ServiceInfoBadge";
import ServicePriceBadge from "./ServicePriceBadge";

import OpenDialogButton from "@/components/ui/OrderDialog/OpenDialogButton";

interface ServiceContentProps {
    service: {
        title: string | React.ReactNode;
        description: string | React.ReactNode;
        mainText: string | React.ReactNode;
        price: number;
        priceUnit: string;
        guarantee: string;
        duration: string;
        whatIncluded: React.ReactNode[];
        materials: React.ReactNode[];
    };
}

export default function ServiceContent({ service }: ServiceContentProps) {
    return (
        <div className="grid gap-8 md:grid-cols-2 md:gap-14">
            <div className="flex flex-col gap-8 md:gap-15">
                <ServiceHeader
                    title={service.title}
                    description={service.description}
                />

                <div className="flex flex-col gap-6">
                    {service.mainText}
                    <div className="flex-start flex-wrap gap-4">
                        <ServicePriceBadge
                            price={service.price}
                            priceUnit={service.priceUnit}
                        />
                        <ServiceInfoBadge text={service.guarantee} />
                        <ServiceInfoBadge text={service.duration} />
                    </div>
                </div>

                <OpenDialogButton variant="primary" size="lg">
                    Заказать расчет
                </OpenDialogButton>
            </div>

            <div className="flex flex-col gap-4">
                <ul className="flex flex-col">
                    <ServiceDetailsList
                        title="Что входит в работы"
                        items={service.whatIncluded}
                    />
                    <ServiceDetailsList
                        title="Используемые материалы"
                        items={service.materials}
                        isSecond={true}
                    />
                </ul>
            </div>
        </div>
    );
}
