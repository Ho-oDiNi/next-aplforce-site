import StyledButton from "@/components/ui/StyledButton";
import MiniAdvantageList from "./MiniAdvantageList";

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
        <section className="text-foreground-secondary bg-[url(/images/home.webp)] bg-cover bg-center bg-no-repeat">
            <div className="flex-center container mx-auto flex-col gap-10">
                <hgroup className="max-w-none lg:max-w-2xl">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </hgroup>

                <StyledButton variant="primary" size="lg">
                    Заказать консультацию
                </StyledButton>

                {unitAdvantage}
            </div>
        </section>
    );
};

export default TitleSection;
