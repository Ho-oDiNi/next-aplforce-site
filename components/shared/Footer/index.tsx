import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";

const Footer = () => {
    return (
        <footer className="text-foreground-secondary">
            <FooterTop />
            <hr className="w-full border-blue-800" />
            <FooterMiddle />
            <FooterBottom />
        </footer>
    );
};

export default Footer;
