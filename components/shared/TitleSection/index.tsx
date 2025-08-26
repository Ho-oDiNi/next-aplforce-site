import { TitleSectionProps } from "@types";

import MiniAdvantageList from "./MiniAdvantageList";

import OpenDialogButton from "@/components/ui/OrderDialog/OpenDialogButton";
import StyledSection from "@/components/ui/StyledSection";

const TitleSection = (props: TitleSectionProps) => {
    const unitAdvantage = props.hasMiniAdvantage ? (
        <MiniAdvantageList />
    ) : (
        <></>
    );

    return (
        <StyledSection
            isSecondary={true}
            sectionClassName="bg-[url(/images/home.webp)] bg-cover bg-center bg-no-repeat text-foreground-secondary"
        >
            <hgroup className="max-w-none lg:max-w-2xl">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </hgroup>

            <OpenDialogButton variant="primary" size="lg">
                Заказать консультацию
            </OpenDialogButton>

            {unitAdvantage}
        </StyledSection>
    );
};

export default TitleSection;
