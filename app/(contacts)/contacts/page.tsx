import ConsultSection from "@shared/ConsultSection";
import { Metadata } from "next";

import ContactSection from "../_components/ContactSection";

// import getCityFromHost from "@/utils/getCityFromHost";

export const metadata: Metadata = {
    title: `Контакты Alpforce - Аварийная служба ремонта`, // ${await getCityFromHost()}
    description: `Прямые контакты отдела по работе с УК и ТСЖ. Организуем срочный ремонт и устранение аварий. Работаем по официальному договору`,
};

const Contacts = async () => {
    return (
        <>
            <ContactSection />
            <ConsultSection />
        </>
    );
};

export default Contacts;
