import calendarIcon from "@icons/calendar-blue-light.svg";
import emailIcon from "@icons/email-blue-light.svg";
import phoneIcon from "@icons/phone-blue-light.svg";
import warningIcon from "@icons/warning-red-solid.svg";

import ContactCard from "./ContactCard";
import ContactInfoBlock from "./ContactInfoBlock";
import EmergencyContact from "./EmergencyContact";
import ScheduleBlock from "./ScheduleBlock";

import StyledSection from "@/components/ui/StyledNode/StyledSection";

const ContactSection = () => {
    return (
        <StyledSection isSecondary={true}>
            <hgroup>
                <h1>Контакты</h1>
                <p>
                    Свяжитесь с нами удобным способом или заполните форму
                    обратной связи
                </p>
            </hgroup>
            <div className="grid w-full items-start gap-6 md:grid-cols-3">
                <div className="flex flex-col gap-5">
                    <ContactCard icon={phoneIcon} title="Телефон">
                        <ContactInfoBlock
                            link="tel:+79831310113"
                            text="+ 7 (983) 131 - 01 - 13"
                            description="Основной номер (Пн-Пт: 8:00-22:00)"
                        />
                        <ContactInfoBlock
                            link="tel:+79831310113"
                            text="+ 7 (983) 131 - 01 - 13"
                            description="Аварийная служба (круглосуточно)"
                        />
                    </ContactCard>

                    <ContactCard icon={calendarIcon} title="Режим работы">
                        <ScheduleBlock
                            period="Понедельник - Пятница"
                            time="8:00 - 20:00"
                        />
                        <ScheduleBlock
                            period="Аварийная служба"
                            time="24/7"
                            isEmergency={true}
                        />
                    </ContactCard>
                </div>

                <ContactCard icon={emailIcon} title="Email">
                    <ContactInfoBlock
                        link="mailto:info@alpforce.ru"
                        text="info@alpforce.ru"
                        description="Основная почта"
                    />
                    <ContactInfoBlock
                        link="mailto:zakaz@alpforce.ru"
                        text="zakaz@alpforce.ru"
                        description="Заказы и сметы"
                    />
                    <ContactInfoBlock
                        link="mailto:director@alpforce.ru"
                        text="director@alpforce.ru"
                        description="Директор"
                    />
                </ContactCard>

                <ContactCard icon={warningIcon} title="Нужна срочная помощь?">
                    <EmergencyContact />
                </ContactCard>
            </div>
        </StyledSection>
    );
};

export default ContactSection;
