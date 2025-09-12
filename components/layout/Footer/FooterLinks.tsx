import Link from "next/link";

interface FooterLinksProps {
    links: Array<{
        href: string;
        label: string;
        prefetch?: boolean;
        target?: string;
        rel?: string;
    }>;
    className?: string;
}

const FooterLinks = ({ links, className = "" }: FooterLinksProps) => {
    return (
        <nav className={`flex flex-col gap-4 ${className}`}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className="hover:opacity-70"
                    prefetch={link.prefetch}
                    target={link.target}
                    rel={link.rel}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
};

export default FooterLinks;
