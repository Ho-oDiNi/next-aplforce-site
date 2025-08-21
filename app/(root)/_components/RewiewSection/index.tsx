import StyledLink from "@ui/StyledLink"
import RewiewList from "./RewiewList";

const RewiewSection = () => {
    return (
        <section className="bg-background-secondary">
            <div className="flex-center container mx-auto flex-col gap-10">
                <hgroup>
                    <h2>Отзывы клиентов</h2>
                    <p>Что говорят о нас ТСЖ и управляющие компании</p>
                </hgroup>

                <RewiewList />
                <StyledLink href="" variant="secondary" size="lg" isBold={true}>
                    Читать
                </StyledLink>
            </div>
        </section>
    );
};

export default RewiewSection;
