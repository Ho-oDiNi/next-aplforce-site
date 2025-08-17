import Image from "next/image";

interface AnswerCardProps {
  title: string;
  description: string;
}

const AnswerCard = (props: AnswerCardProps) => {
  return (
    <div className="rounded-2xl bg-background-secondary flex flex-col gap-4 p-8">
      <div className="flex-center gap-4">
        <Image src={"/icons/question-red.svg"} height={40} width={40} alt="" />
        <dt>{props.title}</dt>
      </div>
      <dd>{props.description}</dd>
    </div>
  );
};

export default AnswerCard;
