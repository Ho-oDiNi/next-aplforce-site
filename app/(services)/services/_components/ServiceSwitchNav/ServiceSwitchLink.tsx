"use client";

import { ServiceSwitchLinkProps } from "@types";
import StyledLink from "@ui/StyledLink";
import { usePathname } from "next/navigation";
import React from "react";

const ServiceSwitchLink = (props: ServiceSwitchLinkProps) => {
    const isActive = usePathname() === props.href;

    const roundedSides = [
        "md:after:bg-(image:--radial-right) md:after:bottom-0 md:after:left-full md:before:left-0 md:before:top-full md:before:bg-background-secondary",
        "md:after:bg-(image:--radial-right) md:before:bg-(image:--radial-left) md:before:bottom-0 md:after:bottom-0 md:after:left-full md:before:right-full",
        "md:before:bg-(image:--radial-left) md:before:bottom-0 md:before:right-full md:after:right-0 md:after:top-full md:after:bg-background-secondary",
    ];

    const commonClasses =
        "md:relative md:before:absolute md:after:absolute md:before:h-4 md:before:w-4 md:after:h-4 md:after:w-4 md:rounded-t-2xl md:p-4";

    return (
        <div
            className={`${
                isActive
                    ? `md:bg-background-secondary ${roundedSides[props.roundedOrder]}`
                    : "bg-background-primary md:bg-background-primary"
            } ${commonClasses}`}
        >
            <StyledLink
                href={props.href}
                variant={`${isActive ? "secondary" : "outline"}`}
                size="max"
                className={`${
                    isActive
                        ? "md:bg-background-primary md:text-foreground-primary pointer-events-none"
                        : "md:bg-blue-500 md:text-white md:hover:bg-blue-600! md:active:bg-blue-400!"
                }`}
            >
                {props.children}
            </StyledLink>
        </div>
    );
};

export default ServiceSwitchLink;
