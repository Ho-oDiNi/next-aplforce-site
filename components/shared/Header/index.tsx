import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

import { SubdomainProps } from "@/types";

const Header = (props: SubdomainProps) => {
    return (
        <header>
            <HeaderTop cityName={props.cityName} />
            <HeaderBottom />
        </header>
    );
};

export default Header;
