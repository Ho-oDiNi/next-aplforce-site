import AdvantageList from "./AdvantageList";

const AdvantageSection = () => {
  return (
    <section className="bg-slate-200  py-16">
      <div className="container mx-auto flex flex-col items-center gap-10 px-(--space-inside-x)">
        <hgroup className="max-w-5/12 text-center">
          <h2 className="font-bold text-4xl mb-6">Почему выбирают нас</h2>
          <p>Преимущества работы с нашей компанией</p>
        </hgroup>
        <AdvantageList />
      </div>
    </section>
  );
};

export default AdvantageSection;
