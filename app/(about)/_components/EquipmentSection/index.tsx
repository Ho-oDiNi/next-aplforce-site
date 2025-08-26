import checkmarkIcon from "@icons/checkmark-red-solid.svg";
import mockImage1 from "@images/house1.png";
import mockImage2 from "@images/house2.png";
import StyledSection from "@ui/StyledSection";
import Image from "next/image";

const EquipmentSection = () => {
    return (
        <StyledSection isSecondary={true}>
            <h2 className="m-0">Оборудование и технологии</h2>
            <dl className="flex-between w-full flex-col lg:flex-row">
                <div className="mr-8">
                    <dt className="mb-6">Профессиональное снаряжение</dt>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-4">
                            <Image src={checkmarkIcon} alt="" />
                            <dd>Сертифицированные веревки и карабины</dd>
                        </div>
                        <div className="flex gap-4">
                            <Image src={checkmarkIcon} alt="" />
                            <dd>Современные страховочные системы</dd>
                        </div>
                        <div className="flex gap-4">
                            <Image src={checkmarkIcon} alt="" />
                            <dd>Специальные инструменты для высотных работ</dd>
                        </div>
                        <div className="flex gap-4">
                            <Image src={checkmarkIcon} alt="" />
                            <dd>Профессиональная строительная техника</dd>
                        </div>
                    </div>
                </div>
                <Image src={mockImage1} className="rounded-2xl" alt="" />
                <Image src={mockImage2} className="rounded-2xl" alt="" />
            </dl>
        </StyledSection>
    );
};

export default EquipmentSection;
