import emailIcon from "@icons/email-red-fill.svg";
import locationIcon from "@icons/location-red-fill.svg";
import phoneIcon from "@icons/phone-red-fill.svg";
import warningIcon from "@icons/warning-red-fill.svg";
import { headers } from "next/headers";

import ContactItem from "./ContactItem";
import EmergencyService from "./EmergencyService";
import FooterBlock from "./FooterBlock";
import FooterLinks from "./FooterLinks";

import pasteCityIntoUrl from "@/utils/pasteCityIntoUrl";

const FooterTop = async () => {
    const headersList = await headers();
    const host = headersList.get("host") || "";
    const protocol = headersList.get("x-forwarded-proto") || "";
    const urlPath = protocol + "://" + host;

    const servicesLinks = [
        { href: "/services/remont-mezhpanelnykh-shvov", label: "Ремонт швов" },
        {
            href: "/services/germetizatsiya-mezhpanelnykh-shvov",
            label: "Герметизация швов",
        },
        {
            href: "/services/pervichnaya-zadelka-shvov",
            label: "Первичная заделка",
        },
    ];

    const companyLinks = [
        { href: "/", label: "Главное" },
        { href: "/sevices", label: "Услуги" },
        { href: "/about", label: "О компании" },
        { href: "/contacts", label: "Контакты" },
    ];

    const geographyLinks = [
        {
            href: pasteCityIntoUrl({
                url: urlPath,
                newSubdomain: "novosibirsk",
            }),
            label: "Новосибирск",
        },
        {
            href: pasteCityIntoUrl({ url: urlPath, newSubdomain: "berdsk" }),
            label: "Бердск",
        },
        {
            href: pasteCityIntoUrl({
                url: urlPath,
                newSubdomain: "academgorodok",
            }),
            label: "Академгородок",
        },
        {
            href: pasteCityIntoUrl({ url: urlPath, newSubdomain: "nso" }),
            label: "Новосибирская область",
        },
    ];

    return (
        <div className="bg-blue-900 px-(--space-inside-x) pt-14 pb-6">
            <div className="container mx-auto grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                <FooterBlock title="Контакты">
                    <address className="flex flex-col gap-4 not-italic">
                        <ContactItem
                            icon={phoneIcon}
                            alt="Телефон"
                            href="tel:+79831310113"
                        >
                            + 7 (983) 131 - 01 - 13
                        </ContactItem>
                        <ContactItem
                            icon={emailIcon}
                            alt="Email"
                            href="mailto:info@alpforce.ru"
                        >
                            info@alpforce.ru
                        </ContactItem>
                        {/* <ContactItem
                            icon={locationIcon}
                            alt="Адрес"
                            href="https://yandex.ru/maps/65/novosibirsk/house/ulitsa_lenina_15/bEsYfwZgSE0HQFtvfXxzeXpmYg==/?ll=82.910180%2C55.028656&z=16"
                            prefetch={false}
                            target="_blank"
                            rel="noreferrer"
                        >
                            г.&nbsp;Новосибирск, ул.&nbsp;Ленина,&nbsp;15
                        </ContactItem> */}
                        <ContactItem
                            icon={warningIcon}
                            alt="Режим работы"
                            href="/contacts"
                        >
                            Пн-Пт:&nbsp;8:00-20:00
                            <br />
                            Аварийная служба:&nbsp;24/7
                        </ContactItem>
                    </address>
                </FooterBlock>

                <FooterBlock title="Услуги">
                    <FooterLinks links={servicesLinks} />
                </FooterBlock>

                <FooterBlock title="Компания">
                    <FooterLinks links={companyLinks} />
                </FooterBlock>

                <FooterBlock title="География работ">
                    <FooterLinks links={geographyLinks} />
                    <EmergencyService />
                </FooterBlock>
            </div>
        </div>
    );
};

export default FooterTop;
