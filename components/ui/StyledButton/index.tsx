import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonSize = "sm" | "md" | "lg" | "max";

interface StyledButtonButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    children: React.ReactNode;
}

const StyledButton = (props: StyledButtonButtonProps) => {
    const { variant = "primary", size = "md", className, children } = props;

    const baseClasses = "flex-center font-bold rounded-xl";

    const variantClasses = {
        primary: "bg-red-500 text-foreground-secondary",
        secondary: "bg-blue-500 text-foreground-secondary",
        outline: "bg-background-secondary text-blue-500",
    };

    const sizeClasses = {
        sm: "py-2 px-4",
        md: "h-10 w-55",
        lg: "h-12 w-70",
        max: "h-12 w-full",
    };

    const buttonClasses = `
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
    `;

    return <button className={buttonClasses}>{children}</button>;
};

export default StyledButton;
