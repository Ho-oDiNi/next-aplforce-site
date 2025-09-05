import React from "react";

interface ServiceInfoBadgeProps {
    text: string;
    className?: string;
}

export default function ServiceInfoBadge({
    text,
    className = "",
}: ServiceInfoBadgeProps) {
    return (
        <span
            className={`rounded-lg bg-blue-500 px-4 py-2 text-center text-white ${className}`}
        >
            {text}
        </span>
    );
}
