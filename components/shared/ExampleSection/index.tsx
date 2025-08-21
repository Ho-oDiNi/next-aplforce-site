import Link from "next/link";
import ExampleList from "./ExampleList";
import StyledLink from "@/components/ui/StyledLink";

const ExampleSection = () => {
    return (
        <section>
            <div className="flex-center container mx-auto flex-col gap-10">
                <hgroup>
                    <h2>Примеры наших работ</h2>
                    <p>Фотоотчеты с выполненных объектов</p>
                </hgroup>

                <ExampleList />
                <StyledLink
                    href=""
                    isBold={true}
                    variant="secondary"
                    size="lg"
                >
                    Смотреть все работы
                </StyledLink>
            </div>
        </section>
    );
};

export default ExampleSection;
