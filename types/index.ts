import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
    isBold?: boolean;
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

export interface RequestFormProps {
    bgColor: string;
    formColor: string;
    formAction: (
        prevState: FormState,
        formData: FormData,
    ) => Promise<FormState>;
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

export interface OrderDialogProps {
    onClose: () => void;
}

export interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    inputMode: "tel" | "text";
    placeholder: string;
    bgColor: string;
}

export interface FeatureCardProps {
    icon: string | StaticImport;
    title: string;
    description: string;
    commitmentArray?: string[];
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
    title: string;
    description: string;
    isOpen?: boolean;
}
