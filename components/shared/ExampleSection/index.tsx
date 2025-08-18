import Link from "next/link";
import ExampleList from "./ExampleList";

const ExampleSection = () => {
    return (
        <section>
            <div className="flex-center container mx-auto flex-col gap-10">
                <hgroup>
                    <h2>Примеры наших работ</h2>
                    <p>Фотоотчеты с выполненных объектов</p>
                </hgroup>

                <ExampleList />

                <Link
                    href=""
                    className="text-foreground-secondary flex-center h-12 w-70 rounded-xl bg-blue-500 font-bold"
                >
                    Смотреть все работы
                </Link>
            </div>
        </section>
    );
};

export default ExampleSection;
