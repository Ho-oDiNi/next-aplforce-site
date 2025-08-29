import AdvantageSection from "@shared/AdvantageSection";
import ExampleSection from "@shared/ExampleSection";
import TitleSection from "@shared/TitleSection";
import AccordionFAQ from "@ui/AccordionFAQ";
import React from "react";

import getCityFromHost from "../api/middleware/getCityFromHost";

import InviteSection from "./_components/InviteSection";
import ServiceSwitchNav from "./_components/ServiceSwitchNav";

const Layout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const cityName = await getCityFromHost();
    return (
        <>
            <TitleSection
                title={`Ремонт межпанельных швов в ${cityName}е`}
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
};

export default Layout;
