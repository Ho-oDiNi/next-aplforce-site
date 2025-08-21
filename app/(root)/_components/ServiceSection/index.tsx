import StyledLink from "@ui/StyledLink"
import ServiceList from "./ServiceList";

const ServiceSection = () => {
    return (
        <section>
            <div className="flex-center container mx-auto flex-col gap-10">
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
            </div>
        </section>
    );
};

export default ServiceSection;
