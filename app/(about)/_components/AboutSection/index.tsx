import checkmarkIcon from "@icons/checkmark-red-fill.svg";
import deliveryIcon from "@icons/delivery-red-fill.svg";
import qualityIcon from "@icons/quality-red-fill.svg";
import warningIcon from "@icons/warning-red-fill.svg";
import FeatureCard from "@ui/FeatureCard";
import StyledSection from "@ui/StyledSection";

const AboutSection = () => {
    return (
        <StyledSection isSecondary={true}>
            <hgroup>
                <h2>О компании ALPFORCE</h2>
                <p>
                    Мы специализируемся на комплексном обслуживании
                    многоквартирных домов в Новосибирске с 2017 года. Наша
                    команда профессиональных альпинистов выполняет работы любой
                    сложности на высоте, обеспечивая безопасность и качество
                </p>
            </hgroup>
            <dl className="w-full items-start md:grid-cols-4">
                <FeatureCard
                    icon={deliveryIcon}
                    title="2000+"
                    description="Выполненных обектов"
                />
                <FeatureCard
                    icon={qualityIcon}
                    title="8 лет"
                    description="Работаем на рынке"
                />
                <FeatureCard
                    icon={checkmarkIcon}
                    title="500+"
                    description="Довольных клиентов"
                />
                <FeatureCard
                    icon={warningIcon}
                    title="24/7"
                    description="Аварийная служба"
                />
            </dl>
        </StyledSection>
    );
};

export default AboutSection;
