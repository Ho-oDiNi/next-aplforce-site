import NavbarLink from "./NavbarLink";

const HeaderNavbar = () => {
  return (
    <nav className="flex-center gap-8">
      <NavbarLink href="/">Главная</NavbarLink>
      <NavbarLink href="/services">Услуги</NavbarLink>
      <NavbarLink href="/about">О кампании</NavbarLink>
      <NavbarLink href="/blog">Блог</NavbarLink>
      <NavbarLink href="/contacts">Контакты</NavbarLink>
    </nav>
  );
};

export default HeaderNavbar;
