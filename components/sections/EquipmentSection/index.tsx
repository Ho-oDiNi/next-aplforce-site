import checkmarkIcon from "@icons/checkmark-red-solid.svg";
import equipmentHelmetImage from "@images/equipment-helmet.jpg";
import equipmentSlingsImage from "@images/equipment-slings.jpg";

import EquipmentImage from "./EquipmentImage";
import EquipmentInfo from "./EquipmentInfo";
import EquipmentItem from "./EquipmentItem";

import StyledSection from "@/components/ui/StyledNode/StyledSection";

const EquipmentSection = () => {
    return (
        <StyledSection isSecondary={true}>
            <h2 className="m-0">Оборудование и технологии</h2>
            <div className="flex-between w-full flex-col gap-6 lg:flex-row">
                <EquipmentInfo title="Профессиональное снаряжение">
                    <EquipmentItem
                        icon={checkmarkIcon}
                        text="Современные страховочные системы"
                        alt="Галочка"
                    />
                    <EquipmentItem
                        icon={checkmarkIcon}
                        text="Специальные инструменты для высотных работ"
                        alt="Галочка"
                    />
                    <EquipmentItem
                        icon={checkmarkIcon}
                        text="Профессиональная строительная техника"
                        alt="Галочка"
                    />
                </EquipmentInfo>

                <EquipmentImage
                    src={equipmentHelmetImage}
                    alt="Профессиональные каски для высотных работ"
                />

                <EquipmentImage
                    src={equipmentSlingsImage}
                    alt="Страховочные системы и стропы"
                />
            </div>
        </StyledSection>
    );
};

export default EquipmentSection;
