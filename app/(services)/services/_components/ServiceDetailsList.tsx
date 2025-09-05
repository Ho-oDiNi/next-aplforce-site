import React from "react";

interface ServiceDetailsListProps {
    title: string;
    items: React.ReactNode[];
    isSecond?: boolean;
}

export default function ServiceDetailsList({
    title,
    items,
    isSecond = false,
}: ServiceDetailsListProps) {
    return (
        <div className={`flex flex-col ${isSecond ? "mt-6" : ""}`}>
            <h3 className="xs:text-2xl mb-6 text-xl font-bold md:text-3xl lg:text-4xl">
                {title}
            </h3>
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`relative pl-4 before:absolute before:left-0 before:content-['•'] ${isSecond ? "mb-2" : ""}`}
                >
                    {item}
                </li>
            ))}
        </div>
    );
}
