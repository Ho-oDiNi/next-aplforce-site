import ConsultSection from "@shared/ConsultSection";
import TitleSection from "@shared/TitleSection";

import ContactSection from "../_components/ContactSection";

import getCityFromHost from "@/app/api/middleware/getCityFromHost";

const Contacts = async () => {
    const cityName = await getCityFromHost();
    return (
        <>
            <TitleSection
                title={`Ремонт межпанельных швов в ${cityName}е`}
                description="Профессиональная герметизация швов между панелями с использованием современных герметиков и технологий для полного устранения протечек."
            />
            <ContactSection />
            <ConsultSection />
        </>
    );
};

export default Contacts;
