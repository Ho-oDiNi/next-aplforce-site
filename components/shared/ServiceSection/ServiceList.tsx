import ServiceCard from "./ServiceCard";

const ServiceList = () => {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
                title="Ремонт межпанельных швов"
                description="Полное восстановление разрушенного или протекающего межпанельного шва"
                link="/services/remont-mezhpanelnykh-shvov"
                price={1490}
                isLinearMeter={true}
            />
            <ServiceCard
                title="Герметизация межпанельных швов"
                description="Комплексная защита вашего дома от теплопотерь, влаги и сквозняков"
                link="/services/germetizatsiya-mezhpanelnykh-shvov"
                price={590}
                isLinearMeter={true}
            />
            <ServiceCard
                title="Первичная заделка швов"
                description="Качественная заделка межпанельных швов в новостройках"
                link="/services/pervichnaya-zadelka-shvov"
                price={790}
                isLinearMeter={true}
            />
        </div>
    );
};

export default ServiceList;
