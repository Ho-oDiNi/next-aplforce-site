import NavbarLink from "./NavbarLink";

// TODO: Изменить ссылку страницы услуг
// TODO: Вернуть ссылку страницы блога

const HeaderNavbar = () => {
    return (
        <nav className="md:flex-center hidden gap-8">
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

export default HeaderNavbar;
