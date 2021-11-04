import React from 'react';

const Footer = () => {
  return <footer className="footer">
      <div className="container">
          <div className="footer__menu">
              <a href="/" className="footer__menu-logo">
                  <img src="./assets/images/logo_defiesta.svg" alt="" />
              </a>
              <nav className="footer__menu-nav">
                  <a href="./providers.html"><i className="fas fa-angle-right"></i> Proveedores</a>
                  <a href="./blog"><i className="fas fa-angle-right"></i> Blog</a>
                  <a href="./contacto"><i className="fas fa-angle-right"></i> Contacto</a>
              </nav>
              <div className="footer__menu-rss">
                  <a href="#!">
                      <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#!">
                      <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#!">
                      <i className="fab fa-instagram"></i>
                  </a>
              </div>
          </div>
          <div className="footer__legals">
              <a href="#!">Términos y condiciones</a>
              <a href="#!">Aviso de privacidad</a>
              <a href="#!">© 2020   All rights reserved.</a>
          </div>
      </div>
    </footer>;
}

export default Footer;