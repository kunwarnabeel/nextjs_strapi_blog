import React from 'react'

export default function PageHeader() {
    return (
        <>
        
        <header className="phHeader" id="header">
            <nav className="navbar navbar-expand logo-link">
                <a className="navbar-brand text-uppercase" href="#">
                    <img src="./assets/images/tt-logo2.png" alt="LOGO" />
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-flex-icons ml-auto">
                        <li className="followus">Follow Us</li>
                        <li className="nav-item">
                            <a className="nav-link fb-icon" href="#" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link tw-icon" href="#W" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
        </>
    )
}
