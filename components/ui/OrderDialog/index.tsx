"use client";

import { forwardRef } from "react";
import { submitForm } from "@api/actions/formActions";
import RequestForm from "@ui/RequestForm";
import closeIcon from "@icons/close-blue-dark.svg";
import Image from "next/image";
import { OrderDialogProps } from "@/types";

const OrderDialog = forwardRef<HTMLDialogElement, OrderDialogProps>(
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
                className="sticky top-0 m-auto rounded-lg backdrop:bg-black backdrop:opacity-50"
                aria-labelledby="SEO"
            >
                <button
                    className="absolute top-6 right-6 rounded-full"
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

export default OrderDialog;
