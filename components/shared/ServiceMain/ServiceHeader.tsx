import React from "react";

interface ServiceHeaderProps {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
}

export default function ServiceHeader({
    title,
    description,
}: ServiceHeaderProps) {
    return (
        <hgroup className="text-start">
            <h2 className="font-bold">{title}</h2>
            <p className="xs:text-xl mt-2 mb-6 text-lg font-bold text-blue-900 md:text-2xl lg:text-3xl">
                {description}
            </p>
        </hgroup>
    );
}
