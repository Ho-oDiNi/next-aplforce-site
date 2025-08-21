import RequestForm from "@ui/RequestForm";
import { submitForm } from "@actions/formActions";

const InviteSection = () => {
    return (
        <section className="bg-background-secondary">
            <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
                <div className="flex flex-col items-start justify-center">
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

                <RequestForm
                    formAction={submitForm}
                    bgColor="bg-background-secondary"
                    formColor="bg-foreground-secondary"
                />
            </div>
        </section>
    );
};

export default InviteSection;
