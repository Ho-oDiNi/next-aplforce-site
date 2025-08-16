import Image from "next/image";
interface AdvantageCardProps {
  icon: string;
  title: string;
  description: string;
  commitmentArray: string[];
}

const AdvantageCard = (props: AdvantageCardProps) => {
  return (
    <div className="rounded-2xl bg-white flex flex-col">
      <div className="rounded-2xl bg-blue-900 text-white p-8 flex flex-col items-center text-center gap-2 min-h-50">
        <Image src={`/icons/${props.icon}`} height={24} width={24} alt="" />
        <dt className="font-bold text-xl text-nowrap">{props.title}</dt>
        <dd className="text-sm">{props.description}</dd>
      </div>
      <div className="p-6">
        {props.commitmentArray.map((commitment, key) => (
          <div className="flex items-start mt-2">
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
