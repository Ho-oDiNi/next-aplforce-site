import locationIcon from "@icons/location-blue-dark.svg";
import phoneIcon from "@icons/phone-blue-dark.svg";
import Image from "next/image";
import Link from "next/link";

import OpenPopupButton from "@/components/ui/CityPopup/OpenPopupButton";
import OpenDialogButton from "@/components/ui/OrderDialog/OpenDialogButton";
import { SubdomainProps } from "@/types";

const HeaderTop = (props: SubdomainProps) => {
    return (
        <div className="bg-background-secondary fixed top-0 z-99 w-full px-(--space-inside-x) shadow-sm">
            <div className="flex-between container mx-auto py-3">
                <OpenPopupButton>
                    <Image src={locationIcon} alt="SEO" />
                    <span>{props.cityName}</span>
                </OpenPopupButton>
                <div className="flex-center gap-8">
                    <Link
                        href="tel:+79831310113"
                        className="flex-center gap-4 hover:opacity-70"
                    >
                        <Image src={phoneIcon} alt="SEO" />
                        <span className="xs:block hidden">
                            + 7 (983) 131 - 01 - 13
                        </span>
                    </Link>
                    <OpenDialogButton
                        variant="primary"
                        size="md"
                        className="hidden md:block"
                    >
                        Заказать консультацию
                    </OpenDialogButton>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
