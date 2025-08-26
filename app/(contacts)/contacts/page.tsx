import ConsultSection from "@shared/ConsultSection";
import TitleSection from "@shared/TitleSection";

import ContactSection from "../_components/ContactSection";

export default function Contacts() {
    return (
        <>
            <TitleSection
                title="Ремонт межпанельных швов в Новосибирске"
                description="Профессиональная герметизация швов между панелями с использованием современных герметиков и технологий для полного устранения протечек."
            />
            <ContactSection />
            <ConsultSection />
        </>
    );
}
