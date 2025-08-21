// import StyledSection from "@ui/StyledSection";

interface StyledSectionProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    isSecondary?: boolean;
    sectionClassName?: string;
    children: React.ReactNode;
}

const StyledSection = (props: StyledSectionProps) => {
    const bgColor = props.isSecondary ? "bg-background-secondary" : "bg-background-primary"
    
    return (
        <section className={`${bgColor} ${props.sectionClassName || ""}`}>
            <div className="flex-center container mx-auto flex-col gap-10">
                {props.children}
            </div>
        </section>
    );
};

export default StyledSection;


