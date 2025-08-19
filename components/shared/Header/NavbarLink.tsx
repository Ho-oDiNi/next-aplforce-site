"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavbarLink = (props: NavbarLinkProps) => {
    const isActive = usePathname() === props.href;
    return (
        <Link
            href={props.href}
            className={isActive ? "font-bold text-blue-900" : ""}
        >
            {props.children}
        </Link>
    );
};

export default NavbarLink;
