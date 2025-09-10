import AnswerList from "./AnswerList";

import StyledSection from "@/components/ui/StyledNode/StyledSection";

const RewiewSection = () => {
    return (
        <StyledSection>
            <hgroup>
                <h2>Ответы на вопросы</h2>
                <p>Ответы на самые популярные вопросы</p>
            </hgroup>

            <AnswerList />
        </StyledSection>
    );
};

export default RewiewSection;
