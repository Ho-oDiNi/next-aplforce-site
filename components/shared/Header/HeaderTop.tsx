import Image from "next/image";

const HeaderTop = () => {
  return (
    <div className=" bg-background-secondary px-(--space-inside-x)">
      <div className="container mx-auto flex-between py-3">
        <div className="flex-center gap-4">
          <Image src="/icons/location-solid.svg" width={25} height={25} alt="SEO" />
          <span>Новосибирск</span>
        </div>
        <div className="flex-center gap-8">
          <div className="flex-center gap-4">
            <Image src="/icons/phone-solid.svg" width={25} height={25} alt="SEO" />
            <a href="tel:+73831234567">+ 7 (383) 123 - 45 - 67</a>
          </div>
          <button className="h-10 w-55 bg-red-500 text-foreground-secondary rounded-xl font-bold">
            Заказать консультацию
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
