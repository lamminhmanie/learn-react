export function Header() {
    return (       
        <header className="header">
            <img className="nav-logo" width="40px" src="src/assets/react.svg" alt="React logo"/>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
