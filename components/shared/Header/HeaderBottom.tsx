import Image from "next/image";
import HeaderNavbar from "./HeaderNavbar";

const HeaderBottom = () => {
  return (
    <div className="bg-white px-(--space-inside-x)">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="flex gap-8 items-center">
          <Image src="/icons/logo.svg" width={70} height={64} alt="SEO" />
          <div>
            <strong className="font-bold text-xl">ALPFORCE</strong>
            <p className="text-sm">Ремонт многоквартирных домов</p>
          </div>
        </div>
        <HeaderNavbar />
      </div>
    </div>
  );
};

export default HeaderBottom;
