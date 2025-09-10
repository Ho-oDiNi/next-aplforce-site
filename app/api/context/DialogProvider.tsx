"use client";

import React, { useRef, useState, useCallback, useContext } from "react";

import DialogContext from "./DialogContext";

import { DialogContent } from "@/types";

export const DialogProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [content, setContent] = useState<DialogContent | null>(null);

    const openDialog = useCallback((content: DialogContent) => {
        dialogRef.current?.showModal();
        setContent(content);
    }, []);

    const closeDialog = useCallback(() => {
        setContent(null);
        dialogRef.current?.close();
    }, []);

    return (
        <DialogContext.Provider
            value={{ dialogRef, openDialog, closeDialog, content }}
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
