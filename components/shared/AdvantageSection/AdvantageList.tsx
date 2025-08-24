import FeatureCard from "@ui/FeatureCard";
import deliveryIcon from "@icons/delivery-red-fill.svg";
import qualityIcon from "@icons/quality-red-fill.svg";
import checkmarkIcon from "@icons/checkmark-red-fill.svg";
import warningIcon from "@icons/warning-red-fill.svg";

const AdvantageList = () => {
    return (
        <dl className="items-start md:grid-cols-4">
            <FeatureCard
                icon={deliveryIcon}
                title="Скорость"
                description="Осмотр в день обращения, выполнение типовых высотных работ за 1-3 дня"
                commitmentArray={[
                    "Предотвращаем рост повреждений (протечки, промерзание швов)",
                    "Минимизируем жалобы жильцов – решаем проблемы до эскалации",
                    "Не тратим ваше время на долгие согласования",
                ]}
            />
            <FeatureCard
                icon={qualityIcon}
                title="10 лет опыта"
                description="Работаем с 2014 года, отремонтировали более 500 объектов в Новосибирске"
                commitmentArray={[
                    "Гарантия качества без переделок",
                    "Безопасность работ на высоте",
                    "Соблюдение сроков",
                ]}
            />
            <FeatureCard
                icon={checkmarkIcon}
                title="Гарантия до 5 лет"
                description="Договор, акты выполненных работ и гарантию на все виды ремонта"
                commitmentArray={[
                    "Финансовая и юридическая прозрачность",
                    "Возможность включения в годовую смету",
                    "Защита от недобросовестных подрядчиков",
                ]}
            />
            <FeatureCard
                icon={warningIcon}
                title="Аварийный выез 24/7"
                description="Круглосуточная служба реагирования для срочного ремонта кровли, сброса снега или устранения протечек"
                commitmentArray={[
                    "Угроза обрушения наледи с крыши",
                    "Протечки в межпанельных швах после дождя",
                    "Аварийные повреждения балконов",
                ]}
            />
        </dl>
    );
};

export default AdvantageList;
