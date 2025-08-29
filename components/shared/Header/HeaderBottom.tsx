import burgerIcon from "@icons/burger-blue-dark.svg";
import logoIcon from "@icons/logo-main.svg";
import Image from "next/image";
import Link from "next/link";

import HeaderNavbar from "./HeaderNavbar";

const HeaderBottom = () => {
    return (
        <div className="bg-background-primary mt-12 px-(--space-inside-x) md:mt-16">
            <div className="flex-between container mx-auto flex-row-reverse py-3 md:flex-row">
                <Link href="/" className="flex-center gap-8">
                    <Image
                        src={logoIcon}
                        className="h-12 w-auto md:h-16"
                        alt="SEO"
                    />
                    <div className="hidden md:block">
                        <strong>ALPFORCE</strong>
                        <p className="text-sm">Ремонт многоквартирных домов</p>
                    </div>
                </Link>
                <HeaderNavbar />
                <button className="block md:hidden">
                    <Image src={burgerIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default HeaderBottom;
