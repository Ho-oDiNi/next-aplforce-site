import ExampleList from "./ExampleList";

import StyledLink from "@/components/ui/StyledNode/StyledLink";
import StyledSection from "@/components/ui/StyledNode/StyledSection";

const ExampleSection = () => {
    return (
        <StyledSection>
            <hgroup>
                <h2>Примеры наших работ</h2>
                <p>Фотоотчеты с выполненных объектов</p>
            </hgroup>

            <ExampleList />
            <StyledLink href="" variant="secondary" size="lg">
                Смотреть все работы
            </StyledLink>
        </StyledSection>
    );
};

export default ExampleSection;
