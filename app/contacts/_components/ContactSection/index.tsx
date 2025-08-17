import Image from "next/image";
import Link from "next/link";

const MiniAdvantageList = () => {
  return (
    <section className="bg-background-secondary">
      <div className="container mx-auto flex-center flex-col gap-10">
        <hgroup>
          <h2>Контакты</h2>
          <p>Свяжитесь с нами удобным способом или заполните форму обратной связи</p>
        </hgroup>
        <dl className="items-start w-full">
            <div className="flex flex-col gap-5">
                <div className="rounded-2xl bg-background-primary p-8 flex flex-col gap-4">
                    <div className="flex-start gap-4">
                        <Image src="icons/phone-blue.svg" height={24} width={24} alt=""/>
                        <dt>Телефон</dt>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href="tel:+73831234567"><dd>+ 7 (383) 123 - 45 - 67</dd></Link>
                        <dd className="text-zinc-300">Основной номер <wbr/> (Пн-Пт:&nbsp;8:00-18:00)</dd>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href="tel:+73831234567"><dd>+7 (383) 999-88-77</dd></Link>
                        <dd className="text-zinc-300">Аварийная служба (круглосуточно)</dd>
                    </div>
                </div>

                <div className="rounded-2xl bg-background-primary p-8 flex flex-col gap-4">
                    <div className="flex-start gap-4">
                        <Image src="icons/calendar-blue.svg" height={24} width={24} alt=""/>
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

            <div className="rounded-2xl bg-background-primary p-8 flex flex-col gap-4">
                <div className="flex-start gap-4">
                    <Image src="icons/email-blue.svg" height={24} width={24} alt=""/>
                    <dt>Email</dt>
                </div>
                <div className="flex flex-col gap-2">
                    <Link href="mailto:info@remont-mkd-nsk.ru"><dd>info@remont-mkd-nsk.ru</dd></Link>
                    <dd className="text-zinc-300">Основная почта</dd>
                </div>
                <div className="flex flex-col gap-2">
                    <Link href="mailto:zakaz@remont-mkd-nsk.ru"><dd>zakaz@remont-mkd-nsk.ru</dd></Link>
                    <dd className="text-zinc-300">Заказы и сметы</dd>
                </div>
                <div className="flex flex-col gap-2">
                    <Link href="mailto:director@remont-mkd-nsk.ru"><dd>director@remont-mkd-nsk.ru</dd></Link>
                    <dd className="text-zinc-300">Директор</dd>
                </div>
            </div>

            <div className="rounded-2xl bg-background-primary p-8 flex flex-col gap-4">
                <div className="flex-start gap-4">
                    <Image src="icons/warning-red.svg" height={24} width={24} alt=""/>
                    <strong>Нужна срочная помощь?</strong>
                </div>
                <Link href="" className="h-12 w-full bg-red-500 text-foreground-secondary rounded-xl font-bold flex-center">Аварийный вызов</Link>
                <Link href="" className="h-12 w-full bg-background-secondary text-blue-500 rounded-xl flex-center">Написать в WhatsApp</Link>
            </div>
        </dl>
      </div>
    </section>
  );
};

export default MiniAdvantageList;
