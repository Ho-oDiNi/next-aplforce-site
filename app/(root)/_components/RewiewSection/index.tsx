import StyledLink from "@ui/StyledLink";
import StyledSection from "@ui/StyledSection";

import RewiewList from "./RewiewList";

const RewiewSection = () => {
    return (
        <StyledSection isSecondary={true}>
            <hgroup>
                <h2>Отзывы клиентов</h2>
                <p>Что говорят о нас ТСЖ и управляющие компании</p>
            </hgroup>

            <RewiewList />
            <StyledLink href="" variant="secondary" size="lg">
                Читать
            </StyledLink>
        </StyledSection>
    );
};

export default RewiewSection;
