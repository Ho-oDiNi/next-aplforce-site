import RewiewCard from "./RewiewCard";

const RewiewList = () => {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            <RewiewCard
                rewiewText="Отличная работа по герметизации швов. Протечки полностью устранены, работали аккуратно и быстро."
                authorName="ТСЖ «Северный», ул. Кирова, 15"
            />
            <RewiewCard
                rewiewText="Отличная работа по герметизации швов. Протечки полностью устранены, работали аккуратно и быстро."
                authorName="ТСЖ «Северный», ул. Кирова, 15"
            />
            <RewiewCard
                rewiewText="Отличная работа по герметизации швов. Протечки полностью устранены, работали аккуратно и быстро."
                authorName="ТСЖ «Северный», ул. Кирова, 15"
            />
        </div>
    );
};

export default RewiewList;
