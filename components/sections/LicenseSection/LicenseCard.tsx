import { LicenseCardProps } from "@types";

import StyledLink from "@/components/ui/StyledNode/StyledLink";

const LicenseCard = (props: LicenseCardProps) => {
    return (
        <div className="bg-background-secondary flex h-full flex-col items-start justify-between gap-6 rounded-2xl p-8">
            <h3 className="2xs:text-lg xs:text-xl text-base font-bold">
                {props.title}
            </h3>
            <StyledLink href={props.href} variant="secondary" size="sm">
                Скачать
            </StyledLink>
        </div>
    );
};

export default LicenseCard;
