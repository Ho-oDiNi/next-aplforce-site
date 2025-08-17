import Image from "next/image";
import HeaderNavbar from "./HeaderNavbar";

const HeaderBottom = () => {
  return (
    <div className="bg-background-primary px-(--space-inside-x)">
      <div className="container mx-auto flex-between py-3 flex-row-reverse md:flex-row">
        <div className="flex-center gap-8">
          <Image src="/icons/logo.svg" className="h-12 w-auto md:h-16" width={70} height={64} alt="SEO" />
          <div className="hidden md:block">
            <strong>ALPFORCE</strong>
            <p className="text-sm">Ремонт многоквартирных домов</p>
          </div>
        </div>
        <HeaderNavbar />
        <button className="block md:hidden"><Image src="/icons/burger-solid.svg" height={24} width={24} alt=""/></button>
      </div>
    </div>
  );
};

export default HeaderBottom;
