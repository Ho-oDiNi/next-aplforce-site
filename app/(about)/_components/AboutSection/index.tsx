import AdvantageCard from "@ui/AdvantageCard";
import deliveryIcon from "@icons/delivery-red-fill.svg";
import qualityIcon from "@icons/quality-red-fill.svg";
import checkmarkIcon from "@icons/checkmark-red-fill.svg";
import warningIcon from "@icons/warning-red-fill.svg";

const AboutSection = () => {
    return (
        <section className="bg-background-secondary">
            <div className="flex-center container mx-auto flex-col gap-10">
                <hgroup>
                    <h2>О компании ALPFORCE</h2>
                    <p>
                        Мы специализируемся на комплексном обслуживании
                        многоквартирных домов в Новосибирске и области с 2009
                        года. Наша команда профессиональных альпинистов
                        выполняет работы любой сложности на высоте, обеспечивая
                        безопасность и качество
                    </p>
                </hgroup>
                <dl className="w-full items-start md:grid-cols-4">
                    <AdvantageCard
                        icon={deliveryIcon}
                        title="2000+"
                        description="Выполненных обектов"
                    />
                    <AdvantageCard
                        icon={qualityIcon}
                        title="15 лет"
                        description="Работаем на рынке"
                    />
                    <AdvantageCard
                        icon={checkmarkIcon}
                        title="500+"
                        description="Довольных клиентов"
                    />
                    <AdvantageCard
                        icon={warningIcon}
                        title="24/7"
                        description="Аварийная служба"
                    />
                </dl>
            </div>
        </section>
    );
};

export default AboutSection;
