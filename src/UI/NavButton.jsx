import './navButton.css';

export function NavButton({children}) {
    return (
        <button className="nav-button">
            {children}
        </button>
    )
}