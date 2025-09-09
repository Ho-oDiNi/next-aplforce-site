import { StyledButtonProps } from "@types";
import React from "react";

const StyledButton = (props: StyledButtonProps) => {
    const {
        variant = "primary",
        size = "lg",
        className,
        children,
        ...restProps
    } = props;

    const baseClasses = "flex-center font-bold cursor-pointer text-sm";

    const variantClasses = {
        primary:
            "bg-red-500 text-foreground-secondary hover:bg-red-600 active:bg-red-400",
        secondary:
            "bg-blue-500 text-foreground-secondary hover:bg-blue-600 active:bg-blue-400",
    };

    const sizeClasses = {
        sm: "py-2 px-4 rounded-lg",
        md: "h-10 w-55 2xs:text-base lg:text-lg rounded-xl",
        lg: "h-12 max-w-70 w-full 2xs:text-base lg:text-lg xl:text-xl rounded-xl",
        max: "h-12 w-full 2xs:text-base lg:text-lg xl:text-xl rounded-xl",
    };

    const buttonClasses = `
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
    `;

    return (
        <button className={buttonClasses} {...restProps}>
            {children}
        </button>
    );
};

export default StyledButton;
