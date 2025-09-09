import calendarIcon from "@icons/calendar-blue-light.svg";
import emailIcon from "@icons/email-blue-light.svg";
import phoneIcon from "@icons/phone-blue-light.svg";
import warningIcon from "@icons/warning-red-solid.svg";
import StyledLink from "@ui/StyledLink";
import StyledSection from "@ui/StyledSection";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
    return (
        <StyledSection isSecondary={true}>
            <hgroup>
                <h1>Контакты</h1>
                <p>
                    Свяжитесь с нами удобным способом или заполните форму
                    обратной связи
                </p>
            </hgroup>
            <div className="grid w-full items-start gap-6 md:grid-cols-3">
                <div className="flex flex-col gap-5">
                    <section className="bg-background-primary flex flex-col gap-4 rounded-2xl p-8">
                        <div className="flex-start gap-4">
                            <Image src={phoneIcon} alt="" />
                            <h3 className="2xs:text-lg xs:text-xl text-base font-bold">
                                Телефон
                            </h3>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link href="tel:+79831310113">
                                + 7 (983) 131 - 01 - 13
                            </Link>
                            <p className="text-zinc-300">
                                Основной номер <wbr /> (Пн-Пт:&nbsp;8:00-22:00)
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link href="tel:+79831310113">
                                + 7 (983) 131 - 01 - 13
                            </Link>
                            <p className="text-zinc-300">
                                Аварийная служба (круглосуточно)
                            </p>
                        </div>
                    </section>

                    <section className="bg-background-primary flex flex-col gap-4 rounded-2xl p-8">
                        <div className="flex-start gap-4">
                            <Image src={calendarIcon} alt="" />
                            <h3 className="2xs:text-lg xs:text-xl text-base font-bold text-nowrap">
                                Режим работы
                            </h3>
                        </div>
                        <div className="flex-between">
                            <span>Понедельник - Пятница</span>
                            <span className="text-nowrap">8:00 - 22:00</span>
                        </div>
                        <div className="flex-between">
                            <span className="text-red-500">
                                Аварийная служба
                            </span>
                            <span className="text-red-500">24/7</span>
                        </div>
                    </section>
                </div>

                <section className="bg-background-primary flex flex-col gap-4 rounded-2xl p-8">
                    <div className="flex-start gap-4">
                        <Image src={emailIcon} alt="" />
                        <h3 className="2xs:text-lg xs:text-xl text-base font-bold text-nowrap">
                            Email
                        </h3>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href="mailto:info@alpforce.ru">
                            info@alpforce.ru
                        </Link>
                        <p className="text-zinc-300">Основная почта</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href="mailto:zakaz@alpforce.ru">
                            zakaz@alpforce.ru
                        </Link>
                        <p className="text-zinc-300">Заказы и сметы</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href="mailto:director@alpforce.ru">
                            director@alpforce.ru
                        </Link>
                        <p className="text-zinc-300">Директор</p>
                    </div>
                </section>

                <section className="bg-background-primary flex flex-col gap-4 rounded-2xl p-8">
                    <div className="flex-start gap-4">
                        <Image src={warningIcon} alt="" />
                        <h3 className="2xs:text-lg xs:text-xl text-base font-bold">
                            Нужна срочная помощь?
                        </h3>
                    </div>
                    <StyledLink
                        href="tel:+79831310113"
                        variant="primary"
                        size="max"
                    >
                        Аварийный вызов
                    </StyledLink>
                    <StyledLink
                        href={`https://wa.me/79831310113?text=${encodeURI("Добрый день!\nЯ хочу воспользоваться услугами по ремонту многоквартирного дома")}`}
                        target="_blank"
                        variant="whatsapp"
                        size="max"
                    >
                        Написать в WhatsApp
                    </StyledLink>
                </section>
            </div>
        </StyledSection>
    );
};

export default ContactSection;
