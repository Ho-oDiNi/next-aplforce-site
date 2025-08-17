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
    <div className="bg-background-secondary rounded-3xl p-8 flex flex-col gap-6 justify-between">
      <dt>{props.title}</dt>
      <dd>{props.description}</dd>
      <div className="flex-between lg:flex-row flex-col gap-3">
        <p className="text-red-500 bg-background-primary rounded-lg py-2 px-4 text-center whitespace-nowrap lg:w-auto w-full">
          от <data value={props.price}>{props.price}</data>{" "}
          <abbr className="no-underline" title={unitExplanation}>
            {unitText}
          </abbr>
        </p>
        <Link
          className="text-foreground-secondary bg-blue-500 rounded-lg py-2 px-4 text-center lg:w-auto w-full"
          href=""
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
