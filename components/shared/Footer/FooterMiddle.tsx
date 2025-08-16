import Image from "next/image";

const FooterMiddle = () => {
  return (
    <div className="bg-blue-900 px-(--space-inside-x) py-6">
      <div className="container mx-auto justify-between flex items-center">
        <div className="flex gap-5 items-center">
          <Image src="/icons/logo-white.svg" width={48} height={44} alt="" />
          <div>
            <strong className="font-bold text-xl">ALPFORCE</strong>
            <p className="text-sm">Ремонт многоквартирных домов</p>
          </div>
        </div>
        <p className="max-w-xs opacity-50">
          © 2025 АльпСервис. Все права защищены. Лицензия на высотные работы № 12345
        </p>
      </div>
    </div>
  );
};

export default FooterMiddle;
