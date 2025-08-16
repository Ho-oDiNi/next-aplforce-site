import Link from "next/link";
import RewiewList from "./RewiewList";

const RewiewSection = () => {
  return (
    <section className=" py-16 bg-slate-200">
      <div className="container mx-auto flex flex-col items-center gap-10 px-(--space-inside-x)">
        <hgroup className="max-w-5/12 text-center">
          <h2 className="font-bold text-4xl mb-6">Примеры наших работ</h2>
          <p>Фотоотчеты с выполненных объектов</p>
        </hgroup>

        <RewiewList />

        <Link
          href=""
          className="h-12 w-70 bg-blue-500 text-white rounded-xl font-bold flex items-center justify-center"
        >
          Смотреть все работы
        </Link>
      </div>
    </section>
  );
};

export default RewiewSection;
