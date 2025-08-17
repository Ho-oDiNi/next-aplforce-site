import Image from "next/image";
import HeaderNavbar from "./HeaderNavbar";
import Link from "next/link";
import logoIcon from "@icons/logo-main.svg"
import burgerIcon from "@icons/burger-blue-dark.svg"

const HeaderBottom = () => {
  return (
    <div className="bg-background-primary px-(--space-inside-x)">
      <div className="container mx-auto flex-between py-3 flex-row-reverse md:flex-row">
        <Link href="/" className="flex-center gap-8">
          <Image src={logoIcon} className="h-12 w-auto md:h-16" alt="SEO" />
          <div className="hidden md:block">
            <strong>ALPFORCE</strong>
            <p className="text-sm">Ремонт многоквартирных домов</p>
          </div>
        </Link>
        <HeaderNavbar />
        <button className="block md:hidden">
          <Image src={burgerIcon}  alt=""/>
        </button>
      </div>
    </div>
  );
};

export default HeaderBottom;
