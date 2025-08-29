import StyledSection from "@ui/StyledSection";

import LicenseCard from "./LicenseCard";

const LicenseSection = () => {
    return (
        <StyledSection>
            <hgroup>
                <h2>Лицензии и сертификаты</h2>
                <p>
                    Действуем в строгом соответствии с требованиями ГОСТ и СНИП
                </p>
            </hgroup>
            <dl className="w-full items-start">
                <LicenseCard title="Допуск на высотные работы" href="" />
                <LicenseCard
                    title="Образец договора на оказание услуг"
                    href=""
                />
                <LicenseCard title="Образец акта выполненных работ" href="" />
            </dl>
        </StyledSection>
    );
};

export default LicenseSection;
