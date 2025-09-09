import questionIcon from "@icons/question-red-solid.svg";
import { AnswerCardProps } from "@types";
import Image from "next/image";

const AnswerCard = (props: AnswerCardProps) => {
    return (
        <section className="bg-background-secondary flex flex-col gap-4 rounded-2xl p-8">
            <div className="flex-center gap-4">
                <Image src={questionIcon} alt="" />
                <h3 className="2xs:text-lg xs:text-xl text-base font-bold">
                    {props.title}
                </h3>
            </div>
            <p className="2xs:text-base text-sm">{props.description}</p>
        </section>
    );
};

export default AnswerCard;
