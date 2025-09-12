"use client";

import NavbarLink from "@/components/layout/Header/NavbarLink";

const HeaderPopupNav = () => {
    return (
        <nav className="flex flex-col gap-8">
            <NavbarLink href="/" isExact={true}>
                Главная
            </NavbarLink>
            <NavbarLink href="/services/remont-mezhpanelnykh-shvov">
                Услуги
            </NavbarLink>
            <NavbarLink href="/about">О компании</NavbarLink>
            {/* <NavbarLink href="/blog">Блог</NavbarLink> */}
            <NavbarLink href="/contacts">Контакты</NavbarLink>
        </nav>
    );
};

export default HeaderPopupNav;
