import Link from "next/link";

// Доработать
interface ConsultFormProps {
    bgColor: string;
    formColor: string;
}

const ConsultForm = (props: ConsultFormProps) => {
    return (
        <form className={`p-8 lg:max-w-2xl ${props.formColor} rounded-2xl`}>
            <div className="xs:gap-12 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <label className="flex flex-col gap-4">
                        Имя
                        <input
                            type="text"
                            className={`${props.bgColor} w-full rounded-2xl px-4 py-3`}
                            placeholder="Напишите ваше имя"
                        />
                    </label>
                    <label className="flex flex-col gap-4">
                        Телефон
                        <input
                            type="tel"
                            className={`${props.bgColor} w-full rounded-2xl px-4 py-3`}
                            placeholder="+7 ( 000 ) 000 - 00 - 00"
                        />
                    </label>
                </div>

                <div className="flex flex-col gap-4">
                    <button className="text-foreground-secondary h-12 w-full rounded-xl bg-red-500 font-bold">
                        Отправить заявку
                    </button>
                    <label className="flex-center text-neutral-500">
                        <input type="checkbox" className="mr-2" />
                        <p className="text-xs">
                            Даю согласие на обработку персональных данных в
                            соответствии{" "}
                            <Link className="text-xs text-blue-900" href="">
                                с политикой конфиденциальности
                            </Link>
                        </p>
                    </label>
                </div>
            </div>
        </form>
    );
};

export default ConsultForm;
