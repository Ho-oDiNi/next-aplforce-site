import AdvantageSection from "@shared/AdvantageSection";
import ExampleSection from "@shared/ExampleSection";
import TitleSection from "@shared/TitleSection";
import AccordionFAQ from "@ui/AccordionFAQ";
import React from "react";

import InviteSection from "./_components/InviteSection";
import ServiceSwitchNav from "./_components/ServiceSwitchNav";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <TitleSection
                title="Ремонт межпанельных швов в Новосибирске"
                description="Профессиональная герметизация швов между панелями с использованием современных герметиков и технологий для полного устранения протечек."
            />

            <div className="container mx-auto px-(--space-inside-x) pt-8 md:pt-(--space-inside-y)">
                <ServiceSwitchNav />
                {children}
            </div>

            <InviteSection />
            <ExampleSection />
            <AdvantageSection />
            <AccordionFAQ />
        </>
    );
}
