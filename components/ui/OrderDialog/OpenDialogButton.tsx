// components/OpenDialogButton.tsx
'use client';

import React from "react";
import { StyledButtonProps } from "@types";
import StyledButton from "../StyledButton";
import { useDialog } from "@api/context/DialogContext";

const OpenDialogButton = (props: StyledButtonProps) => {    
    const { openDialog } = useDialog();

    return (
        <StyledButton onClick={openDialog} {...props}>
            {props.children}
        </StyledButton>
    );
};

export default OpenDialogButton;