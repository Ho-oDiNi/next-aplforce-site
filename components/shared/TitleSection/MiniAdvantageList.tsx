import MiniAdvantageElement from "./MiniAdvantageElement";

const MiniAdvantageList = () => {
    return (
        <dl className="flex-between w-full md:max-w-2xl">
            <MiniAdvantageElement title="100+" description="Объектов" />
            <MiniAdvantageElement title="8 лет" description="Опыта" />
            <MiniAdvantageElement title="24/7" description="Аварийный вызов" />
            <MiniAdvantageElement title="5 лет" description="Гарантии" />
        </dl>
    );
};

export default MiniAdvantageList;
