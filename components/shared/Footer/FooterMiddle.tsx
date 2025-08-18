import Image from "next/image";
import logoIcon from "@icons/logo-white.svg";

const FooterMiddle = () => {
    return (
        <div className="bg-blue-900 px-(--space-inside-x) py-6">
            <div className="container mx-auto grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex gap-5">
                    <Image src={logoIcon} className="h-full w-auto" alt="" />
                    <div className="flex flex-col justify-center">
                        <strong>ALPFORCE</strong>
                        <p className="text-sm">Ремонт многоквартирных домов</p>
                    </div>
                </div>
                <p className="max-w-xs text-sm opacity-50 sm:col-2 lg:col-4">
                    © 2025 АльпСервис. Все права защищены. Лицензия на высотные
                    работы № 12345
                </p>
            </div>
        </div>
    );
};

export default FooterMiddle;
