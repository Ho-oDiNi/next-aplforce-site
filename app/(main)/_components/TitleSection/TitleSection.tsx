import MiniAdvantageList from "./MiniAdvantageList";

const TitleSection = () => {
  return (
    <section className="text-white bg-[#1D3E80]/90 py-16 px-(--space-inside-x)">
      <div className="max-w-5/12 flex flex-col items-center mx-auto gap-10">
        <hgroup className="text-center">
          <h1 className="font-bold text-5xl mb-6">Ремонт многоквартирных домов в Новосибирске</h1>
          <p>
            Профессиональный ремонт кровель, герметизация швов, высотные работы методом
            промышленного альпинизма. Работаем с ТСЖ и УК. Осмотр швов в день обращения. Гарантия до
            5 лет.
          </p>
        </hgroup>

        <button className="h-12 w-70 bg-red-500 text-white rounded-xl font-bold">
          Заказать консультацию
        </button>

        <MiniAdvantageList />
      </div>
    </section>
  );
};

export default TitleSection;
