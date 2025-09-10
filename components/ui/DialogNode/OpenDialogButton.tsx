"use client";

import StyledButton from "../StyledNode/StyledButton";

import { useDialog } from "@/app/api/context/DialogProvider";
import { StyledButtonProps, DialogContent } from "@/types";

export interface OpenDialogButtonProps extends StyledButtonProps {
    dialogContent: DialogContent;
    dialogClassName?: string;
}

const OpenDialogButton = ({
    dialogContent,
    dialogClassName = "",
    children,
    ...buttonProps
}: OpenDialogButtonProps) => {
    const { openDialog } = useDialog();

    const handleClick = () => {
        openDialog(dialogContent, dialogClassName);
    };

    return (
        <StyledButton onClick={handleClick} {...buttonProps}>
            {children}
        </StyledButton>
    );
};

export default OpenDialogButton;
