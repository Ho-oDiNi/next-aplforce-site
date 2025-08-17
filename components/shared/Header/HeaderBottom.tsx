import Image from "next/image";
import HeaderNavbar from "./HeaderNavbar";

const HeaderBottom = () => {
  return (
    <div className="bg-background-primary px-(--space-inside-x)">
      <div className="container mx-auto flex-between py-3">
        <div className="flex-center gap-8">
          <Image src="/icons/logo.svg" width={70} height={64} alt="SEO" />
          <div>
            <strong>ALPFORCE</strong>
            <p className="text-sm">Ремонт многоквартирных домов</p>
          </div>
        </div>
        <HeaderNavbar />
      </div>
    </div>
  );
};

export default HeaderBottom;
