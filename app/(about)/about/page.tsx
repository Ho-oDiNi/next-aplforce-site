import TitleSection from "@shared/TitleSection";

import AboutSection from "../_components/AboutSection";
import EquipmentSection from "../_components/EquipmentSection";
import LicenseSection from "../_components/LicenseSection";

import getCityFromHost from "@/app/api/middleware/getCityFromHost";
// import MapSection from "../_components/MapSection";

const About = async () => {
    const cityName = await getCityFromHost();

    return (
        <>
            <TitleSection
                title={`Ремонт межпанельных швов в ${cityName}е`}
                description="Профессиональная герметизация швов между панелями с использованием современных герметиков и технологий для полного устранения протечек."
            />
            <AboutSection />
            <LicenseSection />
            <EquipmentSection />
            {/* <MapSection /> */}
        </>
    );
};
export default About;
