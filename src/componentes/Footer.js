import React from 'react';
import Logo from '../img/logo-para-fondo-oscuro.png';
import '../style/Footer.css';

function Footer() {
    return (
        <>
            <footer>
                <section className="social-footer">
                    <a href="https://github.com/ArmnellJackson" target="_blank" rel="noreferrer">
                    <i className="bi bi-github" style={{ color: 'var(--first-color)' }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/armnell-jackson-gomez-garcia-b01619152/" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin" style={{ color: 'var(--first-color)' }}></i>
                    </a>
                </section>

                <div>
                    <section className="logo-footer">
                        <a href="https://www.armnellgomez.com/">
                            <img src={Logo} alt="logo" />
                        </a>
                    </section>

                    <section className="autor">
                        <p>Creado por Armnell Gómez</p>
                    </section>
                </div>
            </footer>
        </>
    )
}

export default Footer;