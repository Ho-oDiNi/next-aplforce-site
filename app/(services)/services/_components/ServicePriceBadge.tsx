import React from "react";

interface ServicePriceBadgeProps {
    price: number;
    priceUnit: string;
    className?: string;
}

export default function ServicePriceBadge({
    price,
    priceUnit,
    className = "",
}: ServicePriceBadgeProps) {
    return (
        <span
            className={`bg-background-primary rounded-lg px-4 py-2 text-center whitespace-nowrap text-red-500 ${className}`}
        >
            от <data value={price}>{price}</data>{" "}
            <abbr className="no-underline" title={"рублей за погонный метр"}>
                {priceUnit}
            </abbr>
        </span>
    );
}
