import StyledLink from "@ui/StyledLink";
import { LicenseCardProps } from "@types";

const LicenseCard = (props: LicenseCardProps) => {
    return (
        <div className="bg-background-secondary flex h-full flex-col items-start justify-between gap-6 rounded-2xl p-8">
            <dt>{props.title}</dt>
            <StyledLink href={props.href} variant="secondary" size="sm">
                Скачать
            </StyledLink>
        </div>
    );
};

export default LicenseCard;
