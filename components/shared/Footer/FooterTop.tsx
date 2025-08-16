import Link from "next/link";
import Image from "next/image";

const FooterTop = () => {
  return (
    <div className="bg-blue-900 px-(--space-inside-x) pt-14 pb-6">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col gap-8">
          <strong className="font-bold text-xl">Контакты</strong>
          <address className="flex not-italic flex-col gap-4">
            <div className="flex gap-2 items-center">
              <Image src="/icons/phone-fill.svg" height={24} width={24} alt="" />
              <Link href="tel:+79831310113">+7(983) 13-101-13</Link>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/icons/email-fill.svg" height={24} width={24} alt="" />
              <Link href="mailto:info@remont-mkd-nsk.ru">info@remont-mkd-nsk.ru</Link>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/icons/location-fill.svg" height={24} width={24} alt="" />
              <Link
                href="https://yandex.ru/maps/65/novosibirsk/house/ulitsa_lenina_15/bEsYfwZgSE0HQFtvfXxzeXpmYg==/?ll=82.910180%2C55.028656&z=16"
                prefetch={false}
                rel="noreferrer"
                target="_blank"
              >
                г. Новосибирск, ул. Ленина, 15
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/icons/warning-fill.svg" height={24} width={24} alt="" />
              <span>
                Пн-Пт: 8:00-18:00
                <br />
                Аварийная служба: 24/7
              </span>
            </div>
          </address>
        </div>
        <div className="flex flex-col gap-8">
          <strong className="font-bold text-xl">Услуги</strong>
          <div className="flex flex-col gap-4">
            <p>Ремонт кровли</p>
            <p>Герметизация швов</p>
            <p>Демонтаж козырьков</p>
            <p>Сброс снега</p>
            <p>Гидроизоляция балконов</p>
            <p>Высотные работы</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <strong className="font-bold text-xl">Компания</strong>
          <nav className="flex flex-col gap-4">
            <Link href="">О компании</Link>
            <Link href="">Портфолио</Link>
            <Link href="">Отзывы</Link>
            <Link href="">Полезные статьи</Link>
            <Link href="">Для ТСЖ и УК</Link>
            <Link href="">Контакты</Link>
          </nav>
        </div>
        <div className="flex flex-col gap-8">
          <strong className="font-bold text-xl">География работ</strong>
          <nav className="flex flex-col gap-4">
            <Link href="">Новосибирск</Link>
            <Link href="">Бердск</Link>
            <Link href="">Академгородок</Link>
            <Link href="">Новосибирская область</Link>
          </nav>
          <div>
            <p>Аварийная служба</p>
            <p className="text-sm">
              <em className="not-italic text-red-500 text-xl">24/7</em> <br /> Круглосуточно
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
