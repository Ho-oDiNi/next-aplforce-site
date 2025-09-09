import checkmarkIcon from "@icons/checkmark-red-solid.svg";
import equipmentHelmetImage from "@images/equipment-helmet.jpg";
import equipmentSlingsImage from "@images/equipment-slings.jpg";
import Image from "next/image";

import StyledSection from "@/components/ui/StyledNode/StyledSection";

const EquipmentSection = () => {
    return (
        <StyledSection isSecondary={true}>
            <h2 className="m-0">Оборудование и технологии</h2>
            <div className="flex-between w-full flex-col gap-6 lg:flex-row">
                <div className="mr-8">
                    <h3 className="2xs:text-lg xs:text-xl mb-6 text-base font-bold">
                        Профессиональное снаряжение
                    </h3>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-4">
                            <Image src={checkmarkIcon} alt="" />
                            <p className="2xs:text-base text-sm">
                                Современные страховочные системы
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Image src={checkmarkIcon} alt="" />
                            <p className="2xs:text-base text-sm">
                                Специальные инструменты для высотных работ
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Image src={checkmarkIcon} alt="" />
                            <p className="2xs:text-base text-sm">
                                Профессиональная строительная техника
                            </p>
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
            </div>
        </StyledSection>
    );
};

export default EquipmentSection;
