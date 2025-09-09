import StyledLink from "@/components/ui/StyledNode/StyledLink";
import StyledSection from "@/components/ui/StyledNode/StyledSection";

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
