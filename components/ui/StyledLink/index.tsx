import { StyledLinkProps } from "@types";
import Link from "next/link";
import React from "react";

const StyledLink = (props: StyledLinkProps) => {
    const {
        variant = "primary",
        size = "lg",
        className = "",
        children,
        ...restProps
    } = props;
    const baseClasses = "flex-center text-sm";

    const variantClasses = {
        primary:
            "bg-red-500 text-foreground-secondary hover:bg-red-600 active:bg-red-400 font-bold xl:text-xl",
        secondary:
            "bg-blue-500 text-foreground-secondary hover:bg-blue-600 active:bg-blue-400",
        outline:
            "bg-background-secondary text-foreground-primary hover:bg-slate-300 active:bg-slate-300",
        whatsapp: "bg-background-secondary text-blue-500 hover:bg-slate-300",
    };

    const sizeClasses = {
        sm: "py-2 px-4 text-sm inline-block! text-center rounded-lg",
        md: "h-10 w-55 rounded-xl 2xs:text-base lg:text-lg",
        lg: "h-12 max-w-70 w-full rounded-xl 2xs:text-base lg:text-lg",
        max: "h-12 w-full rounded-xl 2xs:text-base lg:text-lg",
    };

    const linkClasses = `
        ${baseClasses}
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
