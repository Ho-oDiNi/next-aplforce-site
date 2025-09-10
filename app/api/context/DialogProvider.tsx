"use client";

import React, { useRef, useState, useCallback, useContext } from "react";

import DialogContext from "./DialogContext";

import { DialogContent } from "@/types";

export const DialogProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [content, setContent] = useState<DialogContent | null>(null);
    const [className, setClassName] = useState<string>("");

    const openDialog = useCallback(
        (content: DialogContent, className: string = "") => {
            setClassName(className);
            dialogRef.current?.showModal();
            setContent(content);
        },
        [],
    );

    const closeDialog = useCallback(() => {
        setContent(null);
        setClassName("");
        dialogRef.current?.close();
    }, []);

    return (
        <DialogContext.Provider
            value={{ dialogRef, openDialog, closeDialog, content, className }}
        >
            {children}
        </DialogContext.Provider>
    );
};

export const useDialog = () => {
    const context = useContext(DialogContext);
    if (context === undefined) {
        throw new Error("useDialog must be used within a DialogProvider");
    }
    return context;
};
