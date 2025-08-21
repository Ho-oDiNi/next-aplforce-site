import StyledButton from "@/components/ui/StyledButton";
import MiniAdvantageList from "./MiniAdvantageList";
import StyledSection from "@/components/ui/StyledSection";

interface TitleSectionProps {
    title: string;
    description: string;
    hasMiniAdvantage?: boolean;
}

const TitleSection = (props: TitleSectionProps) => {
    const unitAdvantage = props.hasMiniAdvantage ? (
        <MiniAdvantageList />
    ) : (
        <></>
    );

    return (
        <StyledSection isSecondary={true} sectionClassName="bg-[url(/images/home.webp)] bg-cover bg-center bg-no-repeat text-foreground-secondary">
            <hgroup className="max-w-none lg:max-w-2xl">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </hgroup>

            <StyledButton variant="primary" size="lg">
                Заказать консультацию
            </StyledButton>

            {unitAdvantage}
        </StyledSection>
    );
};

export default TitleSection;
