'use client';

import { DialogContextType } from '@/types';
import OrderDialog from '@ui/OrderDialog';
import React, { createContext, useContext, useRef, useCallback } from 'react';


const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = useCallback(() => {
    dialogRef.current?.showModal();
  }, []);

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog, dialogRef }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};

export const DialogContainer = () => {
  const { dialogRef, closeDialog } = useDialog();
  
  return (
    <OrderDialog ref={dialogRef} onClose={closeDialog} />
  );
}