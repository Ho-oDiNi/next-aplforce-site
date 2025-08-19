import ServiceSwitchLink from "./ServiceSwitchLink";

const ServiceSwitchNav = () => {
    return (
        <nav className="mb-8 grid gap-2 md:m-0 md:grid-cols-3 md:gap-4">
            <ServiceSwitchLink href="/services/sealing" roundedOrder={0}>
                Герметезация
            </ServiceSwitchLink>

            <ServiceSwitchLink href="/services/dismantling" roundedOrder={1}>
                Демонтаж
            </ServiceSwitchLink>

            <ServiceSwitchLink href="/services/repairing" roundedOrder={2}>
                Ремонт
            </ServiceSwitchLink>
        </nav>
    );
};

export default ServiceSwitchNav;
