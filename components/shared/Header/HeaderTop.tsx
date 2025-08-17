import Image from "next/image";
import Link from "next/link";
import locationIcon from "@icons/location-blue-dark.svg"

const HeaderTop = () => {
  return (
    <div className=" bg-background-secondary px-(--space-inside-x)">
      <div className="container mx-auto flex-between py-3">
        <div className="flex-center gap-4 cursor-pointer">
          <Image src={locationIcon} alt="SEO" />
          <span>Новосибирск</span>
        </div>
        <div className="flex-center gap-8">
          <Link href="tel:+73831234567" className="flex-center gap-4">
            <Image src={locationIcon} alt="SEO" />
            <span className="hidden xs:block">+ 7 (383) 123 - 45 - 67</span>
          </Link>
          <button className="h-10 w-55 bg-red-500 text-foreground-secondary rounded-xl font-bold hidden md:block">
            Заказать консультацию
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
