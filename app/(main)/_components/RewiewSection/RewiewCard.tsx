import Image from "next/image";
import starIcon from "@icons/star-yellow-fill.svg";

interface RewiewCardProps {
    rewiewText: string;
    authorName: string;
}

const RewiewCard = (props: RewiewCardProps) => {
    return (
        <div className="bg-background-primary flex flex-col gap-4 rounded-2xl p-8">
            <div className="flex gap-1">
                <Image src={starIcon} alt="" />
                <Image src={starIcon} alt="" />
                <Image src={starIcon} alt="" />
                <Image src={starIcon} alt="" />
                <Image src={starIcon} alt="" />
            </div>
            <blockquote>
                <p>{props.rewiewText}</p>
            </blockquote>
            <cite className="text-sm text-neutral-500 not-italic">
                {props.authorName}
            </cite>
        </div>
    );
};

export default RewiewCard;
