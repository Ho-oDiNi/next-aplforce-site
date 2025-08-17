import Link from "next/link";
import ServiceList from "./ServiceList";

const ServiceSection = () => {
  return (
    <section>
      <div className="container mx-auto flex-center flex-col gap-10">
        <hgroup>
          <h2>Наши услуги</h2>
          <p>
            Комплексное обслуживание многоквартирных домов с использованием современных технологий и
            безопасных методов промышленного альпинизма
          </p>
        </hgroup>

        <ServiceList />

        <Link
          href=""
          className="h-12 w-70 bg-red-500 text-foreground-secondary rounded-xl font-bold flex-center"
        >
          Все услуги
        </Link>
      </div>
    </section>
  );
};

export default ServiceSection;
