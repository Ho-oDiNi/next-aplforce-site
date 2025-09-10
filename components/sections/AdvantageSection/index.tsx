import AdvantageList from "./AdvantageList";

import StyledSection from "@/components/ui/StyledNode/StyledSection";

const AdvantageSection = () => {
    return (
        <StyledSection isSecondary={true}>
            <hgroup>
                <h2>Почему выбирают нас</h2>
                <p>Преимущества работы с нашей компанией</p>
            </hgroup>
            <AdvantageList />
        </StyledSection>
    );
};

export default AdvantageSection;
