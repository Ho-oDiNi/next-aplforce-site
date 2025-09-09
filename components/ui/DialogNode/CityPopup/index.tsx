"use client";

import closeIcon from "@icons/close-blue-dark.svg";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import PopupNav from "./PopupNav";

interface OrderDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const CityPopup = ({ isOpen, onClose }: OrderDialogProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.show();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <dialog
            className="backdrop:bg-unset absolute -top-3 -left-3 w-60 rounded-3xl bg-white p-8 shadow-2xl"
            ref={dialogRef}
            onClick={handleBackdropClick}
            aria-labelledby="SEO"
        >
            <button
                className="absolute top-4 right-4 cursor-pointer rounded-full"
                onClick={onClose}
            >
                <Image src={closeIcon} alt="Закрыть" />
            </button>

            <PopupNav />
        </dialog>
    );
};

export default CityPopup;
