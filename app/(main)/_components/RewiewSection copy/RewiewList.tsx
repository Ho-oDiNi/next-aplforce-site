import RewiewCard from "./RewiewCard";

const RewiewList = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
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
