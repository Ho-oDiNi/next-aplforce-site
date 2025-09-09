import ServiceSection from "@/components/sections/ServiceSection";
import StyledSection from "@/components/ui/StyledNode/StyledSection";

const AllServices = () => {
    return (
        <StyledSection isSecondary={true}>
            <hgroup>
                <h1>Услуги в городе Новосибирск</h1>
                <p>
                    Свяжитесь с нами удобным способом или заполните форму
                    обратной связи
                </p>
            </hgroup>
            <ServiceSection />
        </StyledSection>
    );
};

export default AllServices;
