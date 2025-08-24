export interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg" | "max";
    className?: string;
    children: React.ReactNode;
}
