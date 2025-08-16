import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  isLinearMeter?: boolean;
}

const ServiceCard = (props: ServiceCardProps) => {
  const unitExplanation = props.isLinearMeter
    ? "рублей за погонный метр"
    : "рублей за квадратный метр";
  const unitText = props.isLinearMeter ? "руб./п.м." : "руб./м²";

  return (
    <div className="bg-slate-200 rounded-3xl p-8 flex flex-col gap-6 justify-between">
      <dt className="font-bold text-xl">{props.title}</dt>
      <dd>{props.description}</dd>
      <div className="flex justify-between items-center">
        <p className="text-red-500 bg-white rounded-lg py-2 px-4 whitespace-nowrap">
          от <data value={props.price}>{props.price}</data>{" "}
          <abbr className="no-underline" title={unitExplanation}>
            {unitText}
          </abbr>
        </p>
        <Link className="text-white bg-blue-500 rounded-lg py-2 px-4" href="">
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
