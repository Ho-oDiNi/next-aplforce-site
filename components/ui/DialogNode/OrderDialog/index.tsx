"use client";

import closeIcon from "@icons/close-blue-dark.svg";
import RequestForm from "@/components/ui/FormNode/RequestForm";
import Image from "next/image";
import React, { forwardRef } from "react";

import submitForm from "@/app/api/actions/submitForm";
import { DialogProps } from "@/types";

const OrderDialog = forwardRef<HTMLDialogElement, DialogProps>(
    ({ onClose }, ref) => {
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

                <RequestForm
                    formAction={submitForm}
                    bgColor="bg-background-secondary"
                    formColor="bg-foreground-secondary"
                />
            </dialog>
        );
    },
);

OrderDialog.displayName = "OrderDialog";
export default OrderDialog;
