"use client";

import { usePathname } from "next/navigation";
import React from "react";
import StyledLink from "@ui/StyledLink";
import { ServiceSwitchLinkProps } from "@types";

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
            className={`${isActive ? "md:bg-background-secondary" : "bg-background-primary md:bg-background-primary"} ${isActive ? roundedSides[props.roundedOrder] : ""} ${commonClasses}`}
        >
            <StyledLink
                href={props.href}
                variant={`${isActive ? "secondary" : "outline"}`}
                size="max"
                className={`${isActive ? "md:bg-background-primary md:text-foreground-primary" : "md:bg-blue-500 md:text-white"}`}
            >
                {props.children}
            </StyledLink>
        </div>
    );
};

export default ServiceSwitchLink;
