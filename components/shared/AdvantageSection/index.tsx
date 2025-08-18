import AdvantageList from "./AdvantageList";

const AdvantageSection = () => {
  return (
    <section className="bg-background-secondary">
      <div className=" container mx-auto flex-center flex-col gap-10">
        <hgroup>
          <h2>Почему выбирают нас</h2>
          <p>Преимущества работы с нашей компанией</p>
        </hgroup>
        <AdvantageList />
      </div>
    </section>
  );
};

export default AdvantageSection;
