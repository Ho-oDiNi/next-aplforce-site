"use client";

import { useRef, useCallback } from "react";

const useDialog = () => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const open = useCallback(() => {
        dialogRef.current?.showModal();
    }, []);

    const close = useCallback(() => {
        dialogRef.current?.close();
    }, []);

    return { dialogRef, open, close };
};

export default useDialog;
