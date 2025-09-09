import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

export interface StyledButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg" | "max";
    className?: string;
    children: React.ReactNode;
}

export interface StyledLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    variant?: "primary" | "secondary" | "outline" | "whatsapp";
    size?: "sm" | "md" | "lg" | "max";
    className?: string;
    children: React.ReactNode;
}

export interface LicenseCardProps {
    title: string;
    href: string;
}

export interface RewiewCardProps {
    rewiewText: string;
    authorName: string;
}

export interface StyledSectionProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    isSecondary?: boolean;
    sectionClassName?: string;
    children: React.ReactNode;
}

export interface SubmitButtonProps {
    buttonPending: boolean;
}

export interface FormState {
    errors?: {
        name?: string;
        phone?: string;
        consent?: string;
    };
    success?: boolean;
    message?: string;
}

export interface RequestFormProps {
    bgColor: string;
    formColor: string;
    formAction: (
        prevState: FormState,
        formData: FormData,
    ) => Promise<FormState>;
}

export interface DialogProps {
    onClose: () => void;
}

export interface StyledInputProps {
    label: string;
    name: string;
    type: string;
    inputMode: "tel" | "text";
    placeholder: string;
    bgColor: string;
}

export interface DetailsCardProps {
    title: string;
    description: string;
    isOpen?: boolean;
}

export interface MiniMiniAdvantageElementProps {
    title: string;
    description: string;
}

export interface TitleSectionProps {
    title: string;
    description: string;
    hasMiniAdvantage?: boolean;
}

export interface NavbarLinkProps {
    href: string;
    children: React.ReactNode;
    isExact?: boolean;
}

export interface ExampleCardProps {
    title: string;
    description: string;
    img: string;
}

export interface ConsultSectionProps {
    isWhite?: boolean;
}

export interface AnswerCardProps {
    title: string;
    description: string;
}

export interface DialogContextType {
    openDialog: () => void;
    closeDialog: () => void;
    dialogRef: React.RefObject<HTMLDialogElement | null>;
}

export interface ServiceSwitchLinkProps {
    href: string;
    children: React.ReactNode;
    roundedOrder: number;
}

export interface ServiceCardProps {
    title: string;
    description: string;
    link: string;
    price: number;
    isLinearMeter?: boolean;
}

export interface FeatureCardProps {
    icon: string | StaticImport;
    title: string;
    description: string;
    commitmentArray?: string[];
}

export interface AccordionItemProps {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    isOpen?: boolean;
}

export interface SubdomainProps {
    cityName: string;
}

export interface PopupProps {
    children: React.ReactNode;
}

export const cityMap: Record<string, string> = {
    novosibirsk: "Новосибирск",
    berdsk: "Бердск",
    academgorodok: "Академгородок",
    nso: "Новосибирская область",
};

export const prepositionalCityMap: Record<string, string> = {
    Новосибирск: "Новосибирске",
    Бердск: "Бердске",
    Академгородок: "Академгородке",
    "Новосибирская область": "Новосибирской области",
};
