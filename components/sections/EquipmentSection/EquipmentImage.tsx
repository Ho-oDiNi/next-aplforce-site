import Image, { StaticImageData } from "next/image";

interface EquipmentImageProps {
    src: StaticImageData;
    alt: string;
    className?: string;
}

const EquipmentImage = ({ src, alt, className = "" }: EquipmentImageProps) => {
    return (
        <Image
            src={src}
            className={`overflow-hidden rounded-2xl shadow-xl ${className}`}
            alt={alt}
        />
    );
};

export default EquipmentImage;
