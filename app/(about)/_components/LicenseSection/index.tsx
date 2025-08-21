import StyledSection from "@ui/StyledSection";
import LicenseCard from "./LicenseCard";

const LicenseSection = () => {
    return (
        <StyledSection>
            <hgroup>
                <h2>Лицензии и сертификаты</h2>
                <p>
                    Свяжитесь с нами удобным способом или заполните форму
                    обратной связи
                </p>
            </hgroup>
            <dl className="w-full items-start">
                <LicenseCard title="Лицензия на высотные работы" href="" />
                <LicenseCard
                    title="Допуск СРО на строительные работы"
                    href=""
                    />
                <LicenseCard title="Сертификат ISO 9001:2015" href="" />
                <LicenseCard
                    title="Допуск к работе в опасных условиях"
                    href=""
                    />
                <LicenseCard title="Страхование ответственности" href="" />
            </dl>
        </StyledSection>
    );
};

export default LicenseSection;
