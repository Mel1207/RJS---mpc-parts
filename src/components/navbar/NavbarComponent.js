import React from 'react'
import brandLogo from '../../img/logo-1.svg'

export default function NavbarComponent() {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="#!" className="brand-logo">
                    MPC
                    <img src={brandLogo} alt="MPC Computer Parts" />
                </a>

                <ul className="nav-links">
                    <li className="nav-item active">
                        <a href="#!">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#!">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#!">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
