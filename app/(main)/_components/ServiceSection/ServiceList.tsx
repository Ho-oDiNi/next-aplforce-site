import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return (
    <dl className="grid grid-cols-3 gap-6">
      <ServiceCard
        title="Ремонт кровли"
        description="Полный комплекс работ по ремонту кровель методом промышленного альпинизма"
        price={850}
      />
      <ServiceCard
        title="Герметизация швов"
        description="Устранение протечек межпанельных швов современными материалами"
        price={320}
        isLinearMeter={true}
      />
      <ServiceCard
        title="Демонтаж козырьков"
        description="Безопасный демонтаж и монтаж скатных козырьков"
        price={1200}
      />
      <ServiceCard
        title="Сброс снега"
        description="Аварийная очистка кровель от снега и наледи круглосуточно"
        price={45}
      />
      <ServiceCard
        title="Гидроизоляция балконов"
        description="Надежная защита балконов жидкой резиной и ПВХ-мембранами"
        price={650}
      />
      <ServiceCard
        title="Высотные работы"
        description="Полный спектр высотных работ: фасады, окна, рекламные конструкции"
        price={500}
      />
    </dl>
  );
};

export default ServiceList;
