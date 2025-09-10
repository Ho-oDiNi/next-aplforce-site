import React from "react";

interface EquipmentInfoProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const EquipmentInfo = ({
    title,
    children,
    className = "",
}: EquipmentInfoProps) => {
    return (
        <div className={`mr-8 ${className}`}>
            <h3 className="2xs:text-lg xs:text-xl mb-6 text-base font-bold">
                {title}
            </h3>
            <div className="flex flex-col gap-2">{children}</div>
        </div>
    );
};

export default EquipmentInfo;
