import Image from "next/image";
import Link from "next/link";
import StyledLink from "@ui/StyledLink";
import phoneIcon from "@icons/phone-blue-light.svg";
import calendarIcon from "@icons/calendar-blue-light.svg";
import emailIcon from "@icons/email-blue-light.svg";
import warningIcon from "@icons/warning-red-solid.svg";
import StyledSection from "@ui/StyledSection";

const MiniAdvantageList = () => {
    return (
        <StyledSection isSecondary={true}>
            <hgroup>
                <h2>Контакты</h2>
                <p>
                    Свяжитесь с нами удобным способом или заполните форму
                    обратной связи
                </p>
            </hgroup>
            <dl className="w-full items-start">
                <div className="flex flex-col gap-5">
                    <div className="bg-background-primary flex flex-col gap-4 rounded-2xl p-8">
                        <div className="flex-start gap-4">
                            <Image src={phoneIcon} alt="" />
                            <dt>Телефон</dt>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link href="tel:+73831234567">
                                <dd>+ 7 (383) 123 - 45 - 67</dd>
                            </Link>
                            <dd className="text-zinc-300">
                                Основной номер <wbr /> (Пн-Пт:&nbsp;8:00-18:00)
                            </dd>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link href="tel:+73831234567">
                                <dd>+7 (383) 999-88-77</dd>
                            </Link>
                            <dd className="text-zinc-300">
                                Аварийная служба (круглосуточно)
                            </dd>
                        </div>
                    </div>

                    <div className="bg-background-primary flex flex-col gap-4 rounded-2xl p-8">
                        <div className="flex-start gap-4">
                            <Image src={calendarIcon} alt="" />
                            <dt className="text-nowrap">Режим работы</dt>
                        </div>
                        <div className="flex-between">
                            <dd>Понедельник - Пятница</dd>
                            <dd className="text-nowrap">8:00 - 18:00</dd>
                        </div>
                        <div className="flex-between">
                            <dd className="text-red-500">Аварийная служба</dd>
                            <dd className="text-red-500">24/7</dd>
                        </div>
                    </div>
                </div>

                <div className="bg-background-primary flex flex-col gap-4 rounded-2xl p-8">
                    <div className="flex-start gap-4">
                        <Image src={emailIcon} alt="" />
                        <dt>Email</dt>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href="mailto:info@remont-mkd-nsk.ru">
                            <dd>info@remont-mkd-nsk.ru</dd>
                        </Link>
                        <dd className="text-zinc-300">Основная почта</dd>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href="mailto:zakaz@remont-mkd-nsk.ru">
                            <dd>zakaz@remont-mkd-nsk.ru</dd>
                        </Link>
                        <dd className="text-zinc-300">Заказы и сметы</dd>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href="mailto:director@remont-mkd-nsk.ru">
                            <dd>director@remont-mkd-nsk.ru</dd>
                        </Link>
                        <dd className="text-zinc-300">Директор</dd>
                    </div>
                </div>

                <div className="bg-background-primary flex flex-col gap-4 rounded-2xl p-8">
                    <div className="flex-start gap-4">
                        <Image src={warningIcon} alt="" />
                        <strong>Нужна срочная помощь?</strong>
                    </div>
                    <StyledLink
                        href=""
                        variant="primary"
                        size="max"
                        isBold={true}
                    >
                        Аварийный вызов
                    </StyledLink>
                    <StyledLink href="" variant="whatsapp" size="max">
                        Написать в WhatsApp
                    </StyledLink>
                </div>
            </dl>
        </StyledSection>
    );
};

export default MiniAdvantageList;
