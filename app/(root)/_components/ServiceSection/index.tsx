import StyledLink from "@ui/StyledLink"
import ServiceList from "./ServiceList";
import StyledSection from "@ui/StyledSection";

const ServiceSection = () => {
    return (
        <StyledSection>
            <hgroup>
                <h2>Наши услуги</h2>
                <p>
                    Комплексное обслуживание многоквартирных домов с
                    использованием современных технологий и безопасных
                    методов промышленного альпинизма
                </p>
            </hgroup>

            <ServiceList />

            <StyledLink
                href=""
                variant="primary"
                size="lg"
                isBold={true}
                >
                Все услуги
            </StyledLink>
        </StyledSection>
    );
};

export default ServiceSection;
