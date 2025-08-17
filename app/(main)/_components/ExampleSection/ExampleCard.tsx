import Image from "next/image";

interface ExampleCardProps {
  title: string;
  description: string;
  img: string;
}

const ExampleCard = (props: ExampleCardProps) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-background-secondary">
      <Image
        className="max-w-101 max-h-50"
        src={`/images/${props.img}`}
        height={200}
        width={404}
        alt=""
      />
      <div className="flex flex-col gap-4 p-8">
        <dt>{props.title}</dt>
        <dd>{props.description}</dd>
        <div className="bg-blue-900 rounded-lg flex-center text-foreground-secondary w-25 h-8">
          Завершено
        </div>
      </div>
    </div>
  );
};

export default ExampleCard;
