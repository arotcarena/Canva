import { NavButton } from "../UI/NavButton";
import { NavProfile } from "../UI/NavProfile";
import { SearchBar } from "../UI/SearchBar";

export function NavControls() {
    return (
        <nav className="nav-controls">
            <SearchBar className="searchbar" placeholder="Recherchez des milliers de modèles" />

            <NavButton>Créer un design</NavButton>
            <NavProfile name="I" />
        </nav>
    )
}