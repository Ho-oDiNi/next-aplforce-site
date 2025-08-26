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

    const baseClasses = "flex-center font-bold rounded-xl";

    const variantClasses = {
        primary: "bg-red-500 text-foreground-secondary",
        secondary: "bg-blue-500 text-foreground-secondary",
    };

    const sizeClasses = {
        sm: "py-2 px-4",
        md: "h-10 w-55",
        lg: "h-12 max-w-70 w-full",
        max: "h-12 w-full",
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
