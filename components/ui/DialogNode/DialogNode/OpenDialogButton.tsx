"use client";

import { useDialog } from "@api/context/DialogContext";
import { StyledButtonProps } from "@types";
import React from "react";

import StyledButton from "../../StyledNode/StyledButton";

const OpenDialogButton = (props: StyledButtonProps) => {
    const { openDialog } = useDialog();

    return (
        <StyledButton onClick={openDialog} {...props}>
            {props.children}
        </StyledButton>
    );
};

export default OpenDialogButton;
