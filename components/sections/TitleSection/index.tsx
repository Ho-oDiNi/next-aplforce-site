import ImageHome from "@images/home.webp";
import { TitleSectionProps } from "@types";
import Image from "next/image";

import MiniAdvantageList from "./MiniAdvantageList";

import OpenDialogButton from "@/components/ui/DialogNode/DialogNode/OpenDialogButton";
import StyledSection from "@/components/ui/StyledNode/StyledSection";

const TitleSection = ({
    title,
    description,
    hasMiniAdvantage,
}: TitleSectionProps) => {
    const unitAdvantage = hasMiniAdvantage ? <MiniAdvantageList /> : <></>;

    return (
        <StyledSection
            isSecondary={true}
            sectionClassName="text-foreground-secondary relative"
        >
            <hgroup className="z-1 max-w-none lg:max-w-2xl">
                <h1>{title}</h1>
                <p>{description}</p>
            </hgroup>

            <OpenDialogButton variant="primary" size="lg" className="z-1">
                Заказать консультацию
            </OpenDialogButton>

            {unitAdvantage}
            <Image
                src={ImageHome}
                alt=""
                className="absolute top-0 left-0 h-full object-cover"
                priority={true}
            />
        </StyledSection>
    );
};

export default TitleSection;
