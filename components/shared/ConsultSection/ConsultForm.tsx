import Link from "next/link";

// Доработать
interface ConsultFormProps {
  bgColor: string;
  formColor: string;
}

const ConsultForm = (props: ConsultFormProps) => {
  return (
    <form className={`lg:max-w-2xl p-8 ${props.formColor} rounded-2xl`}>
      <div className="flex flex-col gap-8 xs:gap-12">
       
       <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-4">
          Имя
          <input type="text" className={`${props.bgColor} rounded-2xl px-4 py-3 w-full`} placeholder="Напишите ваше имя" />
        </label>
        <label className="flex flex-col gap-4">
          Телефон
          <input type="tel" className={`${props.bgColor} rounded-2xl px-4 py-3 w-full`} placeholder="+7 ( 000 ) 000 - 00 - 00" />
        </label>
       </div>

       <div className="flex flex-col gap-4">
        <button className="h-12 w-full bg-red-500 text-foreground-secondary rounded-xl font-bold">Отправить заявку</button>
          <label className="text-neutral-500 flex-center">
            <input type="checkbox" className="mr-2"/>
            <p className="text-xs">Даю согласие на обработку персональных данных в соответствии <Link className="text-blue-900 text-xs" href="">с политикой конфиденциальности</Link></p>
          </label>
        </div>
      </div>
    </form>
  );
};

export default ConsultForm;
