import TitleSection from "@shared/TitleSection";
import AboutSection from "../_components/AboutSection";
import LicenseSection from "../_components/LicenseSection";
import EquipmentSection from "../_components/EquipmentSection";
import MapSection from "../_components/MapSection";

export default function About() {
    return (
        <>
            <TitleSection
                title="Ремонт межпанельных швов в Новосибирске"
                description="Профессиональная герметизация швов между панелями с использованием современных герметиков и технологий для полного устранения протечек."
            />
            <AboutSection />
            <LicenseSection />
            <EquipmentSection />
            <MapSection />
        </>
    );
}
