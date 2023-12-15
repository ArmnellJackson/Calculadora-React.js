import React from 'react';
import Logo from '../img/logo-para-fondo-oscuro.png';
import '../style/Header.css';

function Header() {
    return (
        <>
            <header id="inicio">
                <nav className="navbar navbar-expand-lg bg-transparent">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="https://www.armnellgomez.com/">
                            <img src={Logo} alt="logo AG" width="36" />
                        </a>
                        <section className="social-header">
                            <a href="https://github.com/ArmnellJackson" target="_blank" rel="noreferrer">
                                <i className="bi bi-github" style={{ color: 'var(--first-color)' }}></i>
                            </a>
                            <a href="https://www.linkedin.com/in/armnell-jackson-gomez-garcia-b01619152/" target="_blank" rel="noreferrer">
                                <i className="bi bi-linkedin" style={{ color: 'var(--first-color)' }}></i>
                            </a>
                        </section>
                    </div>
                </nav>

                <section>
                    <h1>Armnell Gómez</h1>
                    <h2>Web Developer</h2>
                </section>
            </header>
        </>
    )
}

export default Header;