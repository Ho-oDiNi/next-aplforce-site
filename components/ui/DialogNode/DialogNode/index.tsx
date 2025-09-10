import closeIcon from "@icons/close-blue-dark.svg";
import Image from "next/image";
import React, { forwardRef } from "react";

interface DialogProps {
    onClose: () => void;
    children: React.ReactNode;
}

const DialogNode = forwardRef<HTMLDialogElement | null, DialogProps>(
    ({ onClose, children }, ref) => {
        const handleBackdropClick = (
            e: React.MouseEvent<HTMLDialogElement>,
        ) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        };

        return (
            <dialog
                ref={ref}
                onClick={handleBackdropClick}
                className="fixed top-0 m-auto rounded-lg backdrop:bg-black backdrop:opacity-50"
                aria-labelledby="SEO"
            >
                <button
                    className="absolute top-6 right-6 cursor-pointer rounded-full"
                    onClick={onClose}
                >
                    <Image src={closeIcon} alt="Закрыть" />
                </button>
                {children}
            </dialog>
        );
    },
);

DialogNode.displayName = "DialogNode";
export default DialogNode;
