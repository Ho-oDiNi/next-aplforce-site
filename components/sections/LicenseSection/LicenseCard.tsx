import { LicenseCardProps } from "@types";

import LicenceDownload from "./LicenceDownload";

const LicenseCard = (props: LicenseCardProps) => {
    return (
        <div className="bg-background-secondary flex h-full flex-col items-start justify-between gap-6 rounded-2xl p-8">
            <h3 className="2xs:text-lg xs:text-xl text-base font-bold">
                {props.title}
            </h3>
            <LicenceDownload href={props.href} />
        </div>
    );
};

export default LicenseCard;
