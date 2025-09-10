import { Metadata } from "next";

import ConsultSection from "@/components/sections/ConsultSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
    title: `Контакты компании Alpforce | Аварийная служба ремонта`,
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
