import NavbarLink from "./NavbarLink";

const HeaderNavbar = () => {
    return (
        <nav className="md:flex-center hidden gap-8">
            <NavbarLink href="/" isExact={true}>
                Главная
            </NavbarLink>
            <NavbarLink href="/services">Услуги</NavbarLink>
            <NavbarLink href="/about">О компании</NavbarLink>
            {/* <NavbarLink href="/blog">Блог</NavbarLink> */}
            <NavbarLink href="/contacts">Контакты</NavbarLink>
        </nav>
    );
};

export default HeaderNavbar;
