import Image from "next/image";

interface RewiewCardProps {
  rewiewText: string;
  authorName: string;
}

const RewiewCard = (props: RewiewCardProps) => {
  return (
    <div className="rounded-2xl bg-white flex flex-col gap-4 p-8">
      <div className="flex gap-1">
        <Image src={"/icons/star-fill.svg"} height={24} width={24} alt="" />
        <Image src={"/icons/star-fill.svg"} height={24} width={24} alt="" />
        <Image src={"/icons/star-fill.svg"} height={24} width={24} alt="" />
        <Image src={"/icons/star-fill.svg"} height={24} width={24} alt="" />
        <Image src={"/icons/star-fill.svg"} height={24} width={24} alt="" />
      </div>
      <blockquote>
        <p>{props.rewiewText}</p>
      </blockquote>
      <cite className="text-neutral-500 text-sm not-italic">{props.authorName}</cite>
    </div>
  );
};

export default RewiewCard;
