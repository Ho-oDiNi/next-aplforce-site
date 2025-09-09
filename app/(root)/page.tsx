import AdvantageSection from "@shared/AdvantageSection";
import AnswerSection from "@shared/AnswerSection";
import ConsultSection from "@shared/ConsultSection";
import ServiceSection from "@shared/ServiceSection";
import TitleSection from "@shared/TitleSection";

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
