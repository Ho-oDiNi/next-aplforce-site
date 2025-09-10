// DialogContext.tsx
"use client";

import React, {
    createContext,
    useContext,
    useRef,
    useState,
    useCallback,
} from "react";

import DialogNode from "@/components/ui/DialogNode/DialogNode";

interface DialogContent {
    component: React.ComponentType<any>;
    props: any;
}

interface DialogContextType {
    dialogRef: React.RefObject<HTMLDialogElement | null>;
    openDialog: (content: DialogContent) => void;
    closeDialog: () => void;
    content: DialogContent | null;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

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

export const DialogContainer = () => {
    const { dialogRef, closeDialog, content } = useDialog();

    return (
        <DialogNode ref={dialogRef} onClose={closeDialog}>
            {content && (
                <>{React.createElement(content.component, content.props)}</>
            )}
        </DialogNode>
    );
};
