import React from "react";
interface FooterBlockProps {
    title: string;
    children: React.ReactNode;
}

const FooterBlock = ({ title, children }: FooterBlockProps) => {
    return (
        <div className="flex flex-col gap-8">
            <strong>{title}</strong>
            {children}
        </div>
    );
};

export default FooterBlock;
