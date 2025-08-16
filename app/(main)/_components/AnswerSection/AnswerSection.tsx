import Link from "next/link";
import AnswerList from "./AnswerList";

const RewiewSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col items-center gap-10 px-(--space-inside-x)">
        <hgroup className="max-w-5/12 text-center">
          <h2 className="font-bold text-4xl mb-6">Примеры наших работ</h2>
          <p>Фотоотчеты с выполненных объектов</p>
        </hgroup>

        <AnswerList />
      </div>
    </section>
  );
};

export default RewiewSection;
