import Image, { StaticImageData } from "next/image";
import React from "react";

interface ContactCardProps {
    icon: StaticImageData;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const ContactCard = ({
    icon,
    title,
    children,
    className = "",
}: ContactCardProps) => {
    return (
        <section
            className={`bg-background-primary flex flex-col gap-4 rounded-2xl p-8 ${className}`}
        >
            <div className="flex-start gap-4">
                <Image src={icon} alt="" />
                <h3 className="2xs:text-lg xs:text-xl text-base font-bold">
                    {title}
                </h3>
            </div>
            {children}
        </section>
    );
};

export default ContactCard;
