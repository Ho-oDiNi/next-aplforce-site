import OpenDialogButton from "@/components/ui/OrderDialog/OpenDialogButton";
import CompareSection from "../../_components/CompareSection";

export default function Sealing() {
    return (
        <>
            <section className="bg-background-secondary rounded-2xl p-8">
                <div className="grid gap-8 md:grid-cols-2 md:gap-14">
                    <div className="flex flex-col md:gap-15 gap-8">
                        <hgroup className="text-start">
                            <h2>Герметизация межпанельных швов</h2>
                            <p>Устранение протечек современными материалами</p>
                        </hgroup>

                        <div className="flex flex-col gap-6">
                            <p>
                                Профессиональная герметизация швов между
                                панелями с использованием современных герметиков
                                и технологий для полного устранения протечек
                            </p>
                            <div className="flex-start flex-wrap gap-4">
                                <span className="bg-background-primary rounded-lg px-4 py-2 text-center whitespace-nowrap text-red-500 lg:w-auto">
                                    от <data value={320}>320</data>{" "}
                                    <abbr
                                        className="no-underline"
                                        title={"рублей за погонный метр"}
                                    >
                                        руб./п.м.
                                    </abbr>
                                </span>
                                <span className="rounded-lg bg-blue-500 px-4 py-2 text-center text-white lg:w-auto">
                                    Гаранития 3 года
                                </span>
                                <span className="rounded-lg bg-blue-500 px-4 py-2 text-center text-white lg:w-auto">
                                    Сроки выполнения 1-2 дня
                                </span>
                            </div>
                        </div>

                        <OpenDialogButton
                            variant="primary"
                            size="lg"
                        >
                            Заказать расчет
                        </OpenDialogButton>
                    </div>
                    <div className="flex flex-col gap-4">
                        <dl className="flex flex-col">
                            <div className="flex flex-col">
                                <dt className="xs:text-2xl mb-6 text-xl font-bold md:text-3xl lg:text-4xl">
                                    Что входит в работы
                                </dt>

                                <dd className="relative pl-4 before:absolute before:left-0 before:content-['•']">
                                    Очистка швов от старого герметика
                                </dd>
                                <dd className="relative pl-4 before:absolute before:left-0 before:content-['•']">
                                    Обработка антисептиком
                                </dd>
                                <dd className="relative pl-4 before:absolute before:left-0 before:content-['•']">
                                    Заполнение утеплителем
                                </dd>
                                <dd className="relative pl-4 before:absolute before:left-0 before:content-['•']">
                                    Нанесение герметика в 2 слоя
                                </dd>
                                <dd className="relative pl-4 before:absolute before:left-0 before:content-['•']">
                                    Финишная обработка
                                </dd>
                                <dd className="relative pl-4 before:absolute before:left-0 before:content-['•']">
                                    Гарантия от протечек
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="xs:text-2xl mb-6 text-xl font-bold md:text-3xl lg:text-4xl">
                                    Используемые материалы
                                </dt>

                                <dd className="relative pl-4 before:absolute before:left-0 before:content-['•']">
                                    Полиуретановые герметики
                                </dd>
                                <dd className="relative pl-4 before:absolute before:left-0 before:content-['•']">
                                    Силиконовые составы
                                </dd>
                                <dd className="relative pl-4 before:absolute before:left-0 before:content-['•']">
                                    Вспененный полиэтилен
                                </dd>
                                <dd className="relative pl-4 before:absolute before:left-0 before:content-['•']">
                                    Антисептики
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
            <CompareSection />
        </>
    );
}
