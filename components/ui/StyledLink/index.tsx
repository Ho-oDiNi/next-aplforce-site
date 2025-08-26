import React from "react";
import Link from "next/link";
import { StyledLinkProps } from "@types";

const StyledLink = (props: StyledLinkProps) => {
    const {
        variant = "primary",
        size = "lg",
        isBold = false,
        className = "",
        children,
        ...restProps
    } = props;
    const baseClasses = "rounded-xl flex-center";
    const fontBoldness = isBold ? "font-bold" : "font-normal";

    const variantClasses = {
        primary: "bg-red-500 text-foreground-secondary",
        secondary: "bg-blue-500 text-foreground-secondary",
        outline: "bg-background-secondary text-foreground-primary",
        whatsapp: "bg-background-secondary text-blue-500",
    };

    const sizeClasses = {
        sm: "py-2 px-4 text-sm inline-block!",
        md: "h-10 w-55",
        lg: "h-12 max-w-70 w-full",
        max: "h-12 w-full",
    };

    const linkClasses = `
        ${baseClasses}
        ${fontBoldness}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
    `;

    return (
        <Link className={linkClasses} {...restProps}>
            {children}
        </Link>
    );
};

export default StyledLink;
