import questionIcon from "@icons/question-red-solid.svg";
import { AnswerCardProps } from "@types";
import Image from "next/image";

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
