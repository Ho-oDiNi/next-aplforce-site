'use client';

import { forwardRef } from 'react';
import { submitForm } from "@api/actions/formActions";
import RequestForm from "@ui/RequestForm";
import closeIcon from "@icons/close-blue-dark.svg";
import Image from 'next/image';

interface OrderDialogProps {
  onClose: () => void;
}

const OrderDialog = forwardRef<HTMLDialogElement, OrderDialogProps>(
  ({ onClose }, ref) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <dialog
        ref={ref}
        onClick={handleBackdropClick}
        className="backdrop:bg-black backdrop:opacity-50 rounded-lg sticky top-0 m-auto"
        aria-labelledby="SEO"
      >
        <button className="absolute right-6 top-6 rounded-full" onClick={onClose}>
          <Image src={closeIcon} alt="Закрыть" />
        </button>
           
        <RequestForm
          formAction={submitForm}
          bgColor="bg-background-secondary"
          formColor="bg-foreground-secondary"
        />
      </dialog>
    );
  }
);

export default OrderDialog;