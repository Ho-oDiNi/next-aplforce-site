import Image from "next/image";
interface AdvantageCardProps {
  icon: string;
  title: string;
  description: string;
  commitmentArray: string[];
}

const AdvantageCard = (props: AdvantageCardProps) => {
  return (
    <div className="rounded-2xl bg-background-primary flex flex-col">
      <div className="rounded-2xl bg-blue-900 text-foreground-secondary p-8 flex-center flex-col  text-center gap-2 min-h-50">
        <Image src={`/icons/${props.icon}`} height={24} width={24} alt="" />
        <dt className=" text-nowrap">{props.title}</dt>
        <dd>{props.description}</dd>
      </div>
      <div className="p-6">
        {props.commitmentArray.map((commitment, key) => (
          <div className="flex-start mt-2" key={`${key}`}>
            <span className="relative text-sm before:content-['•'] before:absolute before:-left-3 ml-3">
              {commitment}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantageCard;
