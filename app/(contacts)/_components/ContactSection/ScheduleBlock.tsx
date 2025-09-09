import React from "react";

interface ScheduleBlockProps {
    period: string;
    time: string;
    isEmergency?: boolean;
}

const ScheduleBlock = ({
    period,
    time,
    isEmergency = false,
}: ScheduleBlockProps) => {
    return (
        <div className="flex-between">
            <span className={isEmergency ? "text-red-500" : ""}>{period}</span>
            <span
                className={`text-nowrap ${isEmergency ? "text-red-500" : ""}`}
            >
                {time}
            </span>
        </div>
    );
};

export default ScheduleBlock;
