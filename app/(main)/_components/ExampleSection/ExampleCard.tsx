import Image from "next/image";

interface ExampleCardProps {
  title: string;
  description: string;
  img: string;
}

const ExampleCard = (props: ExampleCardProps) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-slate-200">
      <Image
        className="max-w-101 max-h-50"
        src={`/images/${props.img}`}
        height={200}
        width={404}
        alt=""
      />
      <div className="flex flex-col gap-4 p-8">
        <dt className="font-bold text-xl">{props.title}</dt>
        <dd className="text-sm">{props.description}</dd>
        <div className="bg-blue-900 rounded-lg flex items-center justify-center text-white w-25 h-8">
          Завершено
        </div>
      </div>
    </div>
  );
};

export default ExampleCard;
