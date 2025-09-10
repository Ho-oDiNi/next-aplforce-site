import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface ContactItemProps {
    icon: StaticImageData;
    alt: string;
    href: string;
    children: React.ReactNode;
    prefetch?: boolean;
    target?: string;
    rel?: string;
}

const ContactItem = ({
    icon,
    alt,
    href,
    children,
    prefetch = true,
    target,
    rel,
}: ContactItemProps) => {
    return (
        <div className="flex items-center gap-2">
            <Image className="h-6 w-auto" src={icon} alt={alt} />
            <Link
                href={href}
                className="hover:opacity-70"
                prefetch={prefetch}
                target={target}
                rel={rel}
            >
                {children}
            </Link>
        </div>
    );
};

export default ContactItem;
