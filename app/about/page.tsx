import { Metadata } from "next";

import AboutSection from "@/components/sections/AboutSection";
import EquipmentSection from "@/components/sections/EquipmentSection";
import LicenseSection from "@/components/sections/LicenseSection";
import MapSection from "@/components/sections/MapSection";

// import getCityFromHost from "@/utils/getCityFromHost";

export const metadata: Metadata = {
    title: `О компании Alpforce - Высотные работы для МКД по ГОСТ и СНИП`, // ${await getCityFromHost()}
    description: `Команда профессиональных промышленных альпинистов Alpforce. Комплексное обслуживание МКД. Работа по ГОСТ с допусками и страховкой. Аварийный выезд 24/7`,
};

const About = async () => {
    return (
        <>
            <AboutSection />
            <LicenseSection />
            <EquipmentSection />
            <MapSection />
        </>
    );
};
export default About;
