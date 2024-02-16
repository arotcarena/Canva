import { Logo } from "../UI/Logo";
import { MenuIcon } from "../UI/MenuIcon";
import { NavControls } from "./NavControls";
import { NavMenu } from "./NavMenu";

export function Header({onSideOpen}) {
    return (
        <header className="header">
            <MenuIcon className="menu-icon" onClick={onSideOpen} />
            <Logo />
            <NavMenu />
            <NavControls />  
        </header>
    )
}