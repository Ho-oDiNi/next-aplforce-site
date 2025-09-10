"use client";

import { createContext } from "react";

import { DialogContextType } from "@/types";

const DialogContext = createContext<DialogContextType | undefined>(undefined);
export default DialogContext;
