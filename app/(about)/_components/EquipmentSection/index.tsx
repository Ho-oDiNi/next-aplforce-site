import checkmarkIcon from "@icons/checkmark-red-solid.svg";
import equipmentHelmetImage from "@images/equipment-helmet.jpg";
import equipmentSlingsImage from "@images/equipment-slings.jpg";
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
                <Image
                    src={equipmentHelmetImage}
                    className="overflow-hidden rounded-2xl shadow-xl"
                    alt=""
                />
                <Image
                    src={equipmentSlingsImage}
                    className="overflow-hidden rounded-2xl shadow-xl"
                    alt=""
                />
            </dl>
        </StyledSection>
    );
};

export default EquipmentSection;
