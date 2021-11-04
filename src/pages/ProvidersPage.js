import React from 'react';

const ProvidersPage = () => {
  return <>
    <section className="provider__head">
        <div className="container">
            <h1>
                <img src="./assets/images/icon_places.png" alt="" />
                Salones y Jardines
            </h1>
            <div className="provider__head-filters">
                <select name="" id="">
                    <option value="">CDMX</option>
                </select>
            </div>
        </div>
    </section>

    <section className="provider__banner">
            <div className="provider__banner-item"></div>
    </section>

    <section className="home__places">
        <div className="container">
            <h2>Mira algunos lugares ideales para tu evento</h2>
            <div className="home__places-content" id="providersList">
            <article className="home__places-item">
                  <img src="./assets/images/salon.png" alt="Lugar Jardín" />
                  <div className="title">
                      Hacienda San Lorenzo
                  </div>
                  <div className="location">
                      San Miguel de Allende
                  </div>
              </article>
              <article className="home__places-item">
                  <img src="./assets/images/musica.png" alt="Lugar Jardín" />
                  <div className="title">
                      Play Eventos
                  </div>
                  <div className="location">
                      Ciudad de México
                  </div>
              </article>
              <article className="home__places-item">
                  <img src="./assets/images/decoracion.png" alt="Lugar Jardín" />
                  <div className="title">
                      Banquetes Hernandez
                  </div>
                  <div className="location">
                      Toluca, Estado de México
                  </div>
              </article>
              <article className="home__places-item">
                  <img src="./assets/images/lugar2.png" alt="Lugar Jardín" />
                  <div className="title">
                      Hacienda San Lorenzo
                  </div>
                  <div className="location">
                      San Miguel de Allende
                  </div>
              </article>
              <article className="home__places-item">
                  <img src="./assets/images/musica2.png" alt="Lugar Jardín" />
                  <div className="title">
                      Play Eventos
                  </div>
                  <div className="location">
                      Ciudad de México
                  </div>
              </article>
              <article className="home__places-item">
                  <img src="./assets/images/fotografia.png" alt="Lugar Jardín" />
                  <div className="title">
                      Banquetes Hernandez
                  </div>
                  <div className="location">
                      Toluca, Estado de México
                  </div>
              </article>
              <article className="home__places-item">
                  <img src="./assets/images/lugar4.png" alt="Lugar Jardín" />
                  <div className="title">
                      Hacienda San Lorenzo
                  </div>
                  <div className="location">
                      San Miguel de Allende
                  </div>
              </article>
              <article className="home__places-item">
                  <img src="./assets/images/salon.png" alt="Lugar Jardín" />
                  <div className="title">
                      Hacienda San Lorenzo
                  </div>
                  <div className="location">
                      San Miguel de Allende
                  </div>
              </article>

            </div>
            <div className="home__places-more">
                Ver más 
                <i className="fas fa-angle-right"></i>
                <i className="fas fa-angle-right"></i>
            </div>
        </div>
    </section>
  </>;
}

export default ProvidersPage;