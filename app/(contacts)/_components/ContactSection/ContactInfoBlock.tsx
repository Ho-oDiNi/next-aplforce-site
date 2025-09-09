import Link from "next/link";
import React from "react";

interface ContactInfoBlockProps {
    link: string;
    text: string;
    description: string;
}

const ContactInfoBlock = ({
    link,
    text,
    description,
}: ContactInfoBlockProps) => {
    return (
        <div className="flex flex-col gap-2">
            <Link href={link} className="transition-colors hover:text-blue-400">
                {text}
            </Link>
            <p className="text-sm text-zinc-300">{description}</p>
        </div>
    );
};

export default ContactInfoBlock;
