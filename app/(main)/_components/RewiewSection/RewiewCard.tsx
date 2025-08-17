import Image from "next/image";
import starIcon from "@icons/star-yellow-fill.svg"

interface RewiewCardProps {
  rewiewText: string;
  authorName: string;
}

const RewiewCard = (props: RewiewCardProps) => {
  return (
    <div className="rounded-2xl bg-background-primary flex flex-col gap-4 p-8">
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
      <cite className="text-neutral-500 text-sm not-italic">{props.authorName}</cite>
    </div>
  );
};

export default RewiewCard;
