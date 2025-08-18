import RewiewSection from "./_components/RewiewSection";
import ServiceSection from "./_components/ServiceSection";
import TitleSection from "@shared/TitleSection";
import AdvantageSection from "@shared/AdvantageSection";
import ExampleSection from "@shared/ExampleSection";
import AnswerSection from "@shared/AnswerSection";
import ConsultSection from "@shared/ConsultSection";

export default function Home() {
    return (
        <>
            <TitleSection
                title="Ремонт многоквартирных домов в Новосибирске"
                description="Профессиональный ремонт кровель, герметизация швов, высотные работы методом промышленного альпинизма. Работаем с ТСЖ и УК. Осмотр швов в день обращения. Гарантия до 5 лет."
                hasMiniAdvantage={true}
            />
            <ServiceSection />
            <AdvantageSection />
            <ExampleSection />
            <RewiewSection />
            <AnswerSection />
            <ConsultSection isWhite={true} />
        </>
    );
}
