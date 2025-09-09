import ServiceSwitchLink from "./ServiceSwitchLink";

const ServiceSwitchNav = () => {
    return (
        <nav className="mb-8 grid gap-2 md:m-0 md:grid-cols-3 md:gap-4">
            <ServiceSwitchLink
                href="/services/remont-mezhpanelnykh-shvov"
                roundedOrder={0}
            >
                Ремонт
            </ServiceSwitchLink>

            <ServiceSwitchLink
                href="/services/germetizatsiya-mezhpanelnykh-shvov"
                roundedOrder={1}
            >
                Герметезация
            </ServiceSwitchLink>

            <ServiceSwitchLink
                href="/services/pervichnaya-zadelka-shvov"
                roundedOrder={2}
            >
                Заделка
            </ServiceSwitchLink>
        </nav>
    );
};

export default ServiceSwitchNav;
