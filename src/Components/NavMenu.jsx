import { useState } from "react";
import { ExpandIcon } from "../UI/icons/ExpandIcon";
import './navMenu.css';

export function NavMenu() {
    return (
        <nav className="nav-menu">
            <NavLink target="design">Espace design</NavLink>
            <NavLink target="corporate">Entreprise</NavLink>
            <NavLink target="education">Education</NavLink>
        </nav>
    )
}


function NavLink({children, target}) {

    const [expanded, setExpanded] = useState(false);

    const handleMouseOver = (e) => {
        // if(!expanded) {
        //     setExpanded(true);
        // }
    }
    const handleMouseLeave = e => {
        // if(expanded) {
        //     setExpanded(false);
        // }
    }
    const handleClick = e => {
        e.preventDefault();
        setExpanded(expanded => !expanded);
    }

    return (
            <div 
                className="nav-link-container"
                onClick={handleClick} 
                onMouseOver={handleMouseOver} 
                onMouseLeave={handleMouseLeave} 
            >
                <button 
                    className="nav-link icon-right"
                    >
                    <span>{children}</span>
                    <ExpandIcon className="i-right expand-icon" />
                    {
                    expanded &&
                    <ExpandMenu target={target} />
                    }
                </button>
            </div>
    )
}

function ExpandMenu({target}) {
    return (
        <div className="expand-menu">
            <div className="expand-menu-section">
                <h2 className="expand-menu-title">1er sous menu de {target}</h2>
                <div className="expand-menu-links">
                    <a href="#1" className="expand-menu-link">first</a>
                    <a href="#2" className="expand-menu-link">expand menu link</a>
                    <a href="#3" className="expand-menu-link">expand menu link</a>
                    <a href="#4" className="expand-menu-link">expand menu link</a>
                    <a href="#5" className="expand-menu-link">expand menu link</a>
                    <a href="#6" className="expand-menu-link">expand menu link</a>
                    <a href="#7" className="expand-menu-link">last</a>
                </div>
            </div>
            <div className="expand-menu-section">
                <h2 className="expand-menu-title">2eme sous menu de {target}</h2>
                <div className="expand-menu-links">
                    <a href="#8" className="expand-menu-link">first</a>
                    <a href="#9" className="expand-menu-link">expand menu link</a>
                    <a href="#10" className="expand-menu-link">expand menu link</a>
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    <a href="#10" className="expand-menu-link">expand menu link</a>
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    
                    <a href="#10" className="expand-menu-link">expand menu link</a>
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    <a href="#10" className="expand-menu-link">expand menu link</a>
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    <a href="#10" className="expand-menu-link">expand menu link</a>
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    <a href="#10" className="expand-menu-link">expand menu link</a>
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    <a href="#10" className="expand-menu-link">expand menu link</a>
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    <a href="#19" className="expand-menu-link">last</a>
                </div>
            </div>
            <div className="expand-menu-section">
                <h2 className="expand-menu-title">3eme sous menu de {target}  titre un peu long</h2>
                <div className="expand-menu-links">
                    <a href="#8" className="expand-menu-link">first</a>
                    <a href="#9" className="expand-menu-link">expand menu link</a>
                    <a href="#10" className="expand-menu-link">expand menu link</a>
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    <a href="#10" className="expand-menu-link">expand menu link</a>
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    <a href="#10" className="expand-menu-link">expand menu link</a>
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    <a href="#19" className="expand-menu-link">last</a>
                </div>
            </div>
            <div className="expand-menu-section">
                <h2 className="expand-menu-title">4eme sous menu de {target}</h2>
                <div className="expand-menu-links">
                    <a href="#8" className="expand-menu-link">first</a>
                    <a href="#9" className="expand-menu-link">expand menu link</a>
                    <a href="#10" className="expand-menu-link">expand menu link</a>
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    <a href="#10" className="expand-menu-link">expand menu link</a>
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    <a href="#10" className="expand-menu-link">expand menu link</a>
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    <a href="#19" className="expand-menu-link">last</a>
                </div>
            </div>
            <div className="expand-menu-section">
                <h2 className="expand-menu-title">5eme sous menu de {target}</h2>
                <div className="expand-menu-links">
                    <a href="#8" className="expand-menu-link">first</a>
                    <a href="#9" className="expand-menu-link">expand menu link</a>
                    <a href="#10" className="expand-menu-link">expand menu link</a>
                    <a href="#11" className="expand-menu-link">expand menu link</a>
                    <a href="#12" className="expand-menu-link">expand menu link</a>
                    <a href="#13" className="expand-menu-link">expand menu link</a>
                    <a href="#14" className="expand-menu-link">expand menu link</a>
                    <a href="#15" className="expand-menu-link">expand menu link</a>
                    <a href="#16" className="expand-menu-link">expand menu link</a>
                    <a href="#17" className="expand-menu-link">expand menu link</a>
                    <a href="#18" className="expand-menu-link">expand menu link</a>
                    <a href="#19" className="expand-menu-link">last</a>
                </div>
            </div>
        </div>
    )
}