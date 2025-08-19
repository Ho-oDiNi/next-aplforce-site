import Link from "next/link";
import RewiewList from "./RewiewList";

const RewiewSection = () => {
    return (
        <section className="bg-background-secondary">
            <div className="flex-center container mx-auto flex-col gap-10">
                <hgroup>
                    <h2>Отзывы клиентов</h2>
                    <p>Что говорят о нас ТСЖ и управляющие компании</p>
                </hgroup>

                <RewiewList />

                <Link
                    href=""
                    className="text-foreground-secondary flex-center h-12 w-70 rounded-xl bg-blue-500 font-bold"
                >
                    Читать
                </Link>
            </div>
        </section>
    );
};

export default RewiewSection;
