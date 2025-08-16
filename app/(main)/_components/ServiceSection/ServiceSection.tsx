import Link from "next/link";
import ServiceList from "./ServiceList";

const ServiceSection = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto flex flex-col items-center gap-10 px-(--space-inside-x)">
        <hgroup className="max-w-5/12 text-center">
          <h2 className="font-bold text-4xl mb-6">Наши услуги</h2>
          <p>
            Комплексное обслуживание многоквартирных домов с использованием современных технологий и
            безопасных методов промышленного альпинизма
          </p>
        </hgroup>

        <ServiceList />

        <Link
          href=""
          className="h-12 w-70 bg-red-500 text-white rounded-xl font-bold flex items-center justify-center"
        >
          Все услуги
        </Link>
      </div>
    </section>
  );
};

export default ServiceSection;
