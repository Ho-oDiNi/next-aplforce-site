import TitleSection from "@/components/sections/TitleSection";

import AdvantageSection from "@/components/sections/AdvantageSection";
import AnswerSection from "@/components/sections/AnswerSection";
import ConsultSection from "@/components/sections/ConsultSection";
import ServiceSection from "@/components/sections/ServiceSection";
import getCityFromHost from "@/utils/getCityFromHost";
import getCityInPrepositional from "@/utils/getCityInPrepositional";

const Home = async () => {
    const cityName = await getCityFromHost();
    const inCity = getCityInPrepositional(cityName);
    return (
        <>
            <TitleSection
                title={`Ремонт многоквартирных домов в ${inCity}`}
                description="Профессиональный ремонт кровель, герметизация швов, высотные работы методом промышленного альпинизма. Работаем с ТСЖ и УК. Осмотр швов в день обращения. Гарантия до 5 лет."
                hasMiniAdvantage={true}
            />
            <ServiceSection />
            <AdvantageSection />
            {/* <ExampleSection /> */}
            {/* <RewiewSection /> */}
            <AnswerSection />
            <ConsultSection isWhite={true} />
        </>
    );
};

export default Home;
