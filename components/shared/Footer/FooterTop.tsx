import Link from "next/link";
import Image from "next/image";
import phoneIcon from "@icons/phone-red-fill.svg"
import emailIcon from "@icons/email-red-fill.svg"
import locationIcon from "@icons/location-red-fill.svg"
import warningIcon from "@icons/warning-red-fill.svg"

const FooterTop = () => {
  return (
    <div className="bg-blue-900 px-(--space-inside-x) pt-14 pb-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-y-12">
          <div className="flex flex-col gap-8">
            <strong>Контакты</strong>
            <address className="flex not-italic flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image className="h-6 w-auto" src={phoneIcon}  alt="" />
                <Link href="tel:+79831310113">+7(983) 13-101-13</Link>
              </div>
              <div className="flex items-center gap-2">
                <Image className="h-6 w-auto" src={emailIcon}  alt="" />
                <Link href="mailto:info@remont-mkd-nsk.ru">info@remont-mkd-nsk.ru</Link>
              </div>
              <div className="flex items-center gap-2">
                <Image className="h-6 w-auto" src={locationIcon}  alt="" />
                <Link
                  href="https://yandex.ru/maps/65/novosibirsk/house/ulitsa_lenina_15/bEsYfwZgSE0HQFtvfXxzeXpmYg==/?ll=82.910180%2C55.028656&z=16"
                  prefetch={false}
                  rel="noreferrer"
                  target="_blank"
                >
                  г. Новосибирск, ул. Ленина, 15
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Image className="h-6 w-auto" src={warningIcon}  alt="" />
                <span>
                  Пн-Пт: 8:00-18:00
                  <br />
                  Аварийная служба: 24/7
                </span>
              </div>
            </address>
          </div>
          <div className="flex flex-col gap-8">
            <strong>Услуги</strong>
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
            <strong>Компания</strong>
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
            <strong>География работ</strong>
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
