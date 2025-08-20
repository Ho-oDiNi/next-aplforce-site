"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarLinkProps {
    href: string;
    children: React.ReactNode;
    exact?: boolean; // Новая опция для точного совпадения
}

const NavbarLink = (props: NavbarLinkProps) => {
    const currentPath = usePathname();
    let isActive = false;

    if (props.exact) {
        isActive = currentPath === props.href;
    } else {
        isActive =
            currentPath === props.href ||
            currentPath.startsWith(props.href + "/");
    }

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
