import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_DEFIESTA_API;

const Home = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);


    useEffect(function () {
        fetch('https://defiesta-api.herokuapp.com/providers')
        .then((response) => response.json())
        .then((data) => {
            setResults(data);
        });
    }, []);

    function search() {
        if (!query) {
            alert("Por favor ingresa la búsqueda y selecciona el tipo de búsqueda");
            return;
        }

        fetch(`https://defiesta-api.herokuapp.com/providers?query=${query}`)
        .then((response) => response.json())
        .then((data) => {
            setResults(data);
        });
    }


    return <>
      <div>
      <section className="home">
            <div className="home__banner">
                <div className="home__banner-item"
                style={{
                  backgroundImage: 'url(./assets/images/home/bg_banner.jpg)',
                  backgroundSize: 'cover',
                }}>


                <div className="search">
                    <h3>Todo lo que necesitas para tu evento aquí lo podrás encontrar</h3>
                    <div className="search__form">
                        <div className="search__form-group">
                            <input type="text" placeholder="¿Qué necesitas?" onChange={(e) => setQuery(e.target.value)}/>
                            <button type="submit" onClick={search}>Buscar</button>
                        </div>
                    </div>
                </div>


                </div>
            </div>
        </section>

        <section className="home__providers">
            <h2>Dale un vistazo a nuestros proveedores</h2>
            <div className="container">
                <a className="home__providers-item" href="/#">Banquetes</a>
                <a className="home__providers-item" href="/#">Bebidas y coctelería</a>
                <a className="home__providers-item" href="/#">Mesa de postres</a>
                <a className="home__providers-item" href="/#">Salones y jardines</a>
                <a className="home__providers-item" href="/#">Foto y video</a>
                <a className="home__providers-item" href="/#">Recuerdos</a>
                <a className="home__providers-item" href="/#">Invitaciones</a>
                <a className="home__providers-item" href="/#">Música / Dj</a>
                <a className="home__providers-item" href="/#">Luna de Miel</a>
                <a className="home__providers-item" href="/#">Flores y decoración</a>
                <a className="home__providers-item" href="/#">Belleza</a>
                <a className="home__providers-item" href="/#">Mesa de regalos</a>
                <a className="home__providers-item" href="/#">Wedding Planner</a>
                <a className="home__providers-item" href="/#">Ropa / Accesorios</a>
            </div>
        </section>

        <section className="home__join">
            <div className="container">
                <div className="home__join-card">
                    <h3>¿Quieres formar parte de nuestro directorio de proveedore</h3>
                    <p>
                        Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum
                    </p>
                    <a className="cta" href="/#">
                        Registrarme
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                </div>
                <img className="home__join-image" src="./assets/images/providers.jpeg" alt="" />
            </div>
        </section>

        <section className="home__places">
            <div className="container">
                <h2>Mira algunos lugares ideales para tu evento</h2>
                
                   
                {results.length > 0 ? (
                        <div className="home__places-content">
                        {results.map(({ name, category, image, location, isPremium }, index) => (
                            <article className="home__places-item" key={index}>
                                <img src={image} alt="Lugar Jardín" />
                                <div className="title">
                                    {name}
                                </div>
                                <div className="location">
                                    {location}
                                </div>
                                <div className="category">
                                    {category}
                                </div>
                            </article>
                        ))}
                    </div>
                ) : null}


                <div className="home__places-more">
                    Ver más 
                    <i className="fas fa-angle-right"></i>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        </section>
      </div>
    </>;
  }
  
  export default Home;