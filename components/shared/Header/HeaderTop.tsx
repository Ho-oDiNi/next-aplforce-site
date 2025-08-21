import Image from "next/image";
import Link from "next/link";
import locationIcon from "@icons/location-blue-dark.svg";
import phoneIcon from "@icons/phone-blue-dark.svg";

const HeaderTop = () => {
    return (
        <div className="bg-background-secondary px-(--space-inside-x)">
            <div className="flex-between container mx-auto py-3">
                <div className="flex-center cursor-pointer gap-4">
                    <Image src={locationIcon} alt="SEO" />
                    <span>Новосибирск</span>
                </div>
                <div className="flex-center gap-8">
                    <Link href="tel:+73831234567" className="flex-center gap-4">
                        <Image src={phoneIcon} alt="SEO" />
                        <span className="xs:block hidden">
                            + 7 (383) 123 - 45 - 67
                        </span>
                    </Link>
                    <button className="text-foreground-secondary hidden h-10 w-55 rounded-xl bg-red-500 font-bold md:block">
                        Заказать консультацию
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
