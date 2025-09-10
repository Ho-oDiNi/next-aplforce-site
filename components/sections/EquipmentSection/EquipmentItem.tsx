import Image, { StaticImageData } from "next/image";

interface EquipmentItemProps {
    icon: StaticImageData;
    text: string;
    alt?: string;
}

const EquipmentItem = ({ icon, text, alt = "" }: EquipmentItemProps) => {
    return (
        <div className="flex gap-4">
            <Image src={icon} alt={alt} />
            <p className="2xs:text-base text-sm">{text}</p>
        </div>
    );
};

export default EquipmentItem;
