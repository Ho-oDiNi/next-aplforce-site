import StyledSection from "../StyledSection";
import DetailsCard from "./DetailsCard";

const AccordionFAQ = () => {
    return (
        <StyledSection>
            <hgroup>
                <h2>Ответы на вопросы</h2>
                <p>Ответы на самые популярные вопросы</p>
            </hgroup>
            <div className="flex-start w-full flex-col gap-4">
                <DetailsCard
                    title="Вопрос 1"
                    description="Ответ 1"
                    isOpen={true}
                />
                <DetailsCard title="Вопрос 2" description="Ответ 2" />
                <DetailsCard title="Вопрос 3" description="Ответ 3" />
                <DetailsCard title="Вопрос 4" description="Ответ 4" />
            </div>
        </StyledSection>
    );
};

export default AccordionFAQ;
