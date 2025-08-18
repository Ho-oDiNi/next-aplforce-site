import ConsultForm from "@shared/ConsultSection/ConsultForm";

const InviteSection = () => {
    return (
        <section className="bg-background-secondary">
            <div className="flex-between container mx-auto flex flex-col gap-10 md:flex-row">
                <div>
                    <h2>Бесплатно пригласить замерщика</h2>
                    <ol type="1" start={1}>
                        <li>
                            Выяснить проблему и подобрать подходящую технологию
                        </li>
                        <li>
                            Выбрать правильные материалы и посмотреть образцы
                        </li>
                        <li>Посчитать точный объем работ</li>
                        <li>
                            Узнать конечную стоимость и сроки проведения работ
                        </li>
                    </ol>
                </div>

                <ConsultForm
                    bgColor="bg-background-secondary"
                    formColor="bg-foreground-secondary"
                />
            </div>
        </section>
    );
};

export default InviteSection;
