"use client";

import React from "react";

import { useDialog } from "./DialogProvider";

import DialogNode from "@/components/ui/DialogNode";

const DialogContainer = () => {
    const { dialogRef, closeDialog, className, content } = useDialog();

    return (
        <DialogNode ref={dialogRef} onClose={closeDialog} className={className}>
            {content && (
                <>{React.createElement(content.component, content.props)}</>
            )}
        </DialogNode>
    );
};
export default DialogContainer;
