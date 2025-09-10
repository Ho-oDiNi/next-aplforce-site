import { LicenseCardProps } from "@types";

import OpenDialogButton from "@/components/ui/DialogNode/OpenDialogButton";
import { dialogContentOrderForm } from "@/data/services";

const LicenseCard = (props: LicenseCardProps) => {
    return (
        <div className="bg-background-secondary flex h-full flex-col items-start justify-between gap-6 rounded-2xl p-8">
            <h3 className="2xs:text-lg xs:text-xl text-base font-bold">
                {props.title}
            </h3>
            <OpenDialogButton
                variant="secondary"
                size="sm"
                dialogContent={dialogContentOrderForm}
            >
                Скачать
            </OpenDialogButton>
        </div>
    );
};

export default LicenseCard;
