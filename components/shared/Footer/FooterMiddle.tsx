import Image from "next/image";

const FooterMiddle = () => {
  return (
    <div className="bg-blue-900 px-(--space-inside-x) py-6">
      <div className="container mx-auto flex-between">
        <div className="flex-center gap-5">
          <Image src="/icons/logo-white.svg" width={48} height={44} alt="" />
          <div>
            <strong>ALPFORCE</strong>
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
