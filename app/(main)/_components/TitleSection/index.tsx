import MiniAdvantageList from "./MiniAdvantageList";
import Image from "next/image";

const TitleSection = () => {
  return (
    <section className="text-foreground-secondary bg-[url(/images/home.webp)] bg-cover bg-center bg-no-repeat">
      <div className="max-w-5/12 flex-center flex-col mx-auto gap-10">
        <hgroup className="max-w-none">
          <h1>Ремонт многоквартирных домов в Новосибирске</h1>
          <p>
            Профессиональный ремонт кровель, герметизация швов, высотные работы методом
            промышленного альпинизма. Работаем с ТСЖ и УК. Осмотр швов в день обращения. Гарантия до
            5 лет.
          </p>
        </hgroup>

        <button className="h-12 w-70 bg-red-500 text-foreground-secondary rounded-xl font-bold">
          Заказать консультацию
        </button>

        <MiniAdvantageList />
      </div>
    </section>
  );
};

export default TitleSection;
