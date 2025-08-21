import Image from "next/image";
import Link from "next/link";
import locationIcon from "@icons/location-blue-dark.svg";
import phoneIcon from "@icons/phone-blue-dark.svg";
import StyledButton from "@/components/ui/StyledButton";

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
                    <StyledButton variant="primary" size="md" className="hidden md:block">
                        Заказать консультацию
                    </StyledButton>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
