import TitleSection from "@shared/TitleSection";
import React from "react";

import getCityFromHost from "@/utils/getCityFromHost";
import getCityInPrepositional from "@/utils/getCityInPrepositional";

const Layout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const cityName = await getCityFromHost();
    const inCity = getCityInPrepositional(cityName);

    return (
        <>
            <TitleSection
                title={`Ремонт межпанельных швов в ${inCity}`}
                description="Профессиональная герметизация швов между панелями с использованием современных герметиков и технологий для полного устранения протечек."
            />

            {children}
        </>
    );
};

export default Layout;
