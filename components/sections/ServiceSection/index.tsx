import ServiceList from "./ServiceList";

import StyledLink from "@/components/ui/StyledNode/StyledLink";
import StyledSection from "@/components/ui/StyledNode/StyledSection";

// TODO: Изменить ссылку страницы услуг

const ServiceSection = () => {
    return (
        <StyledSection>
            <hgroup>
                <h2>Наши услуги</h2>
                <p>
                    Комплексное обслуживание многоквартирных домов с
                    использованием современных технологий и безопасных методов
                    промышленного альпинизма
                </p>
            </hgroup>

            <ServiceList />

            <StyledLink
                href="/services/remont-mezhpanelnykh-shvov"
                variant="primary"
                size="lg"
            >
                Все услуги
            </StyledLink>
        </StyledSection>
    );
};

export default ServiceSection;
