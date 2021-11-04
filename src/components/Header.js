import React from 'react';

const Header = () => {
  return <header className="header">
      <div className="container">
          <a href="./" className="header__logo">
              <img src="./assets/images/logo_defiesta.svg" alt="" />
          </a>
          <nav className="header__menu">
              <div className="header__menu-dropdown">
                  <a className="header__menu-item" href="./providers">Proveedores</a>
                  <div className="dropdown__megamenu">
                      <div className="dropdown__megamenu-wrapper">
                          <div className="container">
                              <a href="/#">Banquetes</a>
                              <a href="/#">Bebidas y coctelería</a>
                              <a href="/#">Mesa de postres</a>
                              <a href="/#">Salones y jardines</a>
                              <a href="/#">Foto y video</a>
                              <a href="/#">Recuerdos</a>
                              <a href="/#">Invitaciones</a>
                              <a href="/#">Música / Dj</a>
                              <a href="/#">Luna de Miel</a>
                              <a href="/#">Flores y decoración</a>
                              <a href="/#">Belleza</a>
                              <a href="/#">Mesa de regalos</a>
                              <a href="/#">Wedding Planner</a>
                              <a href="/#">Ropa / Accesorios</a>
                          </div>
                      </div>
                  </div>
              </div>
              <a className="header__menu-item" href="/#">Blog</a>
              <a className="header__menu-item" href="/#">Contacto</a>
          </nav>
          <div className="header__profile">
              <a href="/#">
                  <i className="fas fa-user"></i>
                  Iniciar sesión
              </a>
          </div>
      </div>
    </header>;
}

export default Header;