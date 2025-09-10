import LicenseCard from "./LicenseCard";

import StyledSection from "@/components/ui/StyledNode/StyledSection";

const LicenseSection = () => {
    return (
        <StyledSection>
            <hgroup>
                <h2>Лицензии и сертификаты</h2>
                <p>
                    Действуем в строгом соответствии с требованиями ГОСТ и СНИП
                </p>
            </hgroup>
            <div className="grid w-full items-start gap-6 md:grid-cols-3">
                <LicenseCard title="Допуск на высотные работы" href="" />
                <LicenseCard
                    title="Образец договора на оказание услуг"
                    href=""
                />
                <LicenseCard title="Образец акта выполненных работ" href="" />
            </div>
        </StyledSection>
    );
};

export default LicenseSection;
