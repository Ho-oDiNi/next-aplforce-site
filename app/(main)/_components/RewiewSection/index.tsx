import Link from "next/link";
import RewiewList from "./RewiewList";

const RewiewSection = () => {
  return (
    <section className="bg-background-secondary">
      <div className="container mx-auto flex-center flex-col gap-10">
        <hgroup>
          <h2>Примеры наших работ</h2>
          <p>Фотоотчеты с выполненных объектов</p>
        </hgroup>

        <RewiewList />

        <Link
          href=""
          className="h-12 w-70 bg-blue-500 text-foreground-secondary rounded-xl font-bold flex-center"
        >
          Смотреть все работы
        </Link>
      </div>
    </section>
  );
};

export default RewiewSection;
