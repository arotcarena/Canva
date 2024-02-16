import './navProfile.css';

export function NavProfile({name}) {
    return (
        <button className="nav-profile">
            {name}
        </button>
    );
}