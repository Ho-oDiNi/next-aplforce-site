import Image from "next/image";

interface AnswerCardProps {
  title: string;
  description: string;
}

const AnswerCard = (props: AnswerCardProps) => {
  return (
    <div className="rounded-2xl bg-slate-200 flex flex-col gap-4 p-8">
      <div className="flex gap-4 items-center">
        <Image src={"/icons/question-red.svg"} height={40} width={40} alt="" />
        <dt className="font-bold text-xl">{props.title}</dt>
      </div>
      <dd className="text-base">{props.description}</dd>
    </div>
  );
};

export default AnswerCard;
