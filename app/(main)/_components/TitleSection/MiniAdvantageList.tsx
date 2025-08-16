import MiniAdvantageElement from "./MiniAdvantageElement";

const MiniAdvantageList = () => {
  return (
    <dl className="flex justify-between items-center w-full">
      <MiniAdvantageElement title="100+" description="Объектов" />
      <MiniAdvantageElement title="5 лет" description="Опыта" />
      <MiniAdvantageElement title="24/7" description="Аварийный вызов" />
      <MiniAdvantageElement title="5 лет" description="Гарантии" />
    </dl>
  );
};

export default MiniAdvantageList;
