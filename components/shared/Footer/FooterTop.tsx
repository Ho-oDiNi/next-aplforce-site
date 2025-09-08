import emailIcon from "@icons/email-red-fill.svg";
import locationIcon from "@icons/location-red-fill.svg";
import phoneIcon from "@icons/phone-red-fill.svg";
import warningIcon from "@icons/warning-red-fill.svg";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import pasteCityIntoUrl from "@/utils/pasteCityIntoUrl";

// TODO: Заменить ссылки

const FooterTop = async () => {
    const headersList = await headers();
    const host = headersList.get("host") || "";
    const protocol = headersList.get("x-forwarded-proto") || "";
    const urlPath = protocol + "://" + host;

    return (
        <div className="bg-blue-900 px-(--space-inside-x) pt-14 pb-6">
            <div className="container mx-auto grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col gap-8">
                    <strong>Контакты</strong>
                    <address className="flex flex-col gap-4 not-italic">
                        <div className="flex items-center gap-2">
                            <Image
                                className="h-6 w-auto"
                                src={phoneIcon}
                                alt=""
                            />
                            <Link
                                href="tel:+79831310113"
                                className="hover:opacity-70"
                            >
                                + 7 (983) 131 - 01 - 13
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                className="h-6 w-auto"
                                src={emailIcon}
                                alt=""
                            />
                            <Link
                                href="mailto:info@remont-mkd-nsk.ru"
                                className="hover:opacity-70"
                            >
                                info@remont-mkd-nsk.ru
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                className="h-6 w-auto"
                                src={locationIcon}
                                alt=""
                            />
                            <Link
                                href="https://yandex.ru/maps/65/novosibirsk/house/ulitsa_lenina_15/bEsYfwZgSE0HQFtvfXxzeXpmYg==/?ll=82.910180%2C55.028656&z=16"
                                prefetch={false}
                                rel="noreferrer"
                                target="_blank"
                                className="hover:opacity-70"
                            >
                                г.&nbsp;Новосибирск, ул.&nbsp;Ленина,&nbsp;15
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                className="h-6 w-auto"
                                src={warningIcon}
                                alt=""
                            />
                            <Link href="/contacts" className="hover:opacity-70">
                                Пн-Пт:&nbsp;8:00-18:00
                                <br />
                                Аварийная служба:&nbsp;24/7
                            </Link>
                        </div>
                    </address>
                </div>
                <div className="flex flex-col gap-8">
                    <strong>Услуги</strong>
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/services/remont-mezhpanelnykh-shvov"
                            className="hover:opacity-70"
                        >
                            Ремонт швов
                        </Link>
                        <Link
                            href="/services/germetizatsiya-mezhpanelnykh-shvov"
                            className="hover:opacity-70"
                        >
                            Герметизация швов
                        </Link>
                        <Link
                            href="/services/pervichnaya-zadelka-shvov"
                            className="hover:opacity-70"
                        >
                            Первичная заделка
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <strong>Компания</strong>
                    <nav className="flex flex-col gap-4">
                        <Link href="/about" className="hover:opacity-70">
                            О компании
                        </Link>
                        {/* <Link href="" className="hover:opacity-70">
                            Портфолио
                        </Link> */}
                        {/* <Link href="" className="hover:opacity-70">
                            Отзывы
                        </Link> */}
                        {/* <Link href="" className="hover:opacity-70">
                            Полезные статьи
                        </Link> */}
                        {/* <Link href="" className="hover:opacity-70">
                            Для ТСЖ и УК
                        </Link> */}
                        <Link href="/contacts" className="hover:opacity-70">
                            Контакты
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-col gap-8">
                    <strong>География работ</strong>
                    <nav className="flex flex-col gap-4">
                        <Link
                            href={pasteCityIntoUrl({
                                url: urlPath,
                                newSubdomain: "novosibirsk",
                            })}
                            className="hover:opacity-70"
                        >
                            Новосибирск
                        </Link>
                        <Link
                            href={pasteCityIntoUrl({
                                url: urlPath,
                                newSubdomain: "berdsk",
                            })}
                            className="hover:opacity-70"
                        >
                            Бердск
                        </Link>
                        <Link
                            href={pasteCityIntoUrl({
                                url: urlPath,
                                newSubdomain: "academgorodok",
                            })}
                            className="hover:opacity-70"
                        >
                            Академгородок
                        </Link>
                        <Link
                            href={pasteCityIntoUrl({
                                url: urlPath,
                                newSubdomain: "nso",
                            })}
                            className="hover:opacity-70"
                        >
                            Новосибирская область
                        </Link>
                    </nav>
                    <div>
                        <p>Аварийная служба</p>
                        <p className="text-sm">
                            <em className="text-xl text-red-500 not-italic">
                                24/7
                            </em>{" "}
                            <br /> Круглосуточно
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
