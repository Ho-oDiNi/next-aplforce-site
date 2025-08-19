import Link from "next/link";
import ServiceList from "./ServiceList";

const ServiceSection = () => {
    return (
        <section>
            <div className="flex-center container mx-auto flex-col gap-10">
                <hgroup>
                    <h2>Наши услуги</h2>
                    <p>
                        Комплексное обслуживание многоквартирных домов с
                        использованием современных технологий и безопасных
                        методов промышленного альпинизма
                    </p>
                </hgroup>

                <ServiceList />

                <Link
                    href=""
                    className="text-foreground-secondary flex-center h-12 w-70 rounded-xl bg-red-500 font-bold"
                >
                    Все услуги
                </Link>
            </div>
        </section>
    );
};

export default ServiceSection;
