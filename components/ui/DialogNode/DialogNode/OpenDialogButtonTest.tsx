// OpenDialogButton.tsx
"use client";

import { useDialog } from "@api/context/DialogContext";

import StyledButton from "../../StyledNode/StyledButton";

import LicenseSection from "@/components/sections/LicenseSection";
import { StyledButtonProps } from "@/types";

const defaultFormContent = {
    component: LicenseSection,
    props: {},
};

const OpenDialogButton = (props: StyledButtonProps) => {
    const { openDialog } = useDialog();

    const handleClick = () => {
        openDialog(defaultFormContent);
    };

    return (
        <StyledButton onClick={handleClick} {...props}>
            {props.children}
        </StyledButton>
    );
};

export default OpenDialogButton;
