import StyledSection from "@ui/StyledSection";

import ExampleList from "./ExampleList";

import StyledLink from "@/components/ui/StyledLink";

const ExampleSection = () => {
    return (
        <StyledSection>
            <hgroup>
                <h2>Примеры наших работ</h2>
                <p>Фотоотчеты с выполненных объектов</p>
            </hgroup>

            <ExampleList />
            <StyledLink href="" isBold={true} variant="secondary" size="lg">
                Смотреть все работы
            </StyledLink>
        </StyledSection>
    );
};

export default ExampleSection;
