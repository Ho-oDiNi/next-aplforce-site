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
            <p className="mt-2 text-lg">{description}</p>
        </hgroup>
    );
}
