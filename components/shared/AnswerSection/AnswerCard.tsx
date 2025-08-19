import Image from "next/image";
import questionIcon from "@icons/question-red-solid.svg";

interface AnswerCardProps {
    title: string;
    description: string;
}

const AnswerCard = (props: AnswerCardProps) => {
    return (
        <div className="bg-background-secondary flex flex-col gap-4 rounded-2xl p-8">
            <div className="flex-center gap-4">
                <Image src={questionIcon} alt="" />
                <dt>{props.title}</dt>
            </div>
            <dd>{props.description}</dd>
        </div>
    );
};

export default AnswerCard;
