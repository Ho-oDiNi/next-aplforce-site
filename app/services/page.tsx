import TitleSection from "@shared/TitleSection";
import ExampleSection from "@shared/ExampleSection";
import AdvantageSection from "@shared/AdvantageSection";
import AnswerSection from "@shared/AnswerSection";
import ServiceSwitchSection from "./_components/ServiceSwitchSection";
import CompareSection from "./_components/CompareSection";
import InviteSection from "./_components/InviteSection";

export default function Services() {
    return (
        <>
            <TitleSection
                title="Ремонт межпанельных швов в Новосибирске"
                description="Профессиональная герметизация швов между панелями с использованием современных герметиков и технологий для полного устранения протечек."
            />
            <ServiceSwitchSection />
            <CompareSection />
            <InviteSection />
            <ExampleSection />
            <AdvantageSection />
            <AnswerSection />
        </>
    );
}
