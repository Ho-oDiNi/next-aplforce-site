import StyledLink from "@ui/StyledLink"
import RewiewList from "./RewiewList";
import StyledSection from "@ui/StyledSection";

const RewiewSection = () => {
    return (
        <StyledSection isSecondary={true}>
            <hgroup>
                <h2>Отзывы клиентов</h2>
                <p>Что говорят о нас ТСЖ и управляющие компании</p>
            </hgroup>

            <RewiewList />
            <StyledLink href="" variant="secondary" size="lg" isBold={true}>
                Читать
            </StyledLink>
        </StyledSection>
    );
};

export default RewiewSection;
