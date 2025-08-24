import StyledSection from "../StyledSection";
import AccordionItem from "./AccordionItem";

const AccordionFAQ = () => {
    return (
        <StyledSection>
            <hgroup>
                <h2>Ответы на вопросы</h2>
                <p>Ответы на самые популярные вопросы</p>
            </hgroup>
            <div className="flex-start w-full flex-col gap-4">
                <AccordionItem
                    title="Вопрос 1"
                    description="Ответ 1"
                    isOpen={true}
                />
                <AccordionItem title="Вопрос 2" description="Ответ 2" />
                <AccordionItem title="Вопрос 3" description="Ответ 3" />
                <AccordionItem title="Вопрос 4" description="Ответ 4" />
            </div>
        </StyledSection>
    );
};

export default AccordionFAQ;
