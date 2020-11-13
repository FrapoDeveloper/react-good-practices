import React from "react";
import "../../styles/banner.css";
import { Link } from "react-router-dom";
const Banner = () => (
  <section className="main-banner  grey-800 l-section">
    <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
      <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left ">
        <h1 className="bigger-title">
          <span className="color white-color">
            Ataque a los titanes <br />
            <span className="color question">¿Que personaje buscas?</span>
          </span>
        </h1>
        <p className="white-color s-opacity-8">
          Esta página te ayudará a conocer mejor a tus personajes favoritos de
          Shingeki no kyojin, además te enterarás de secretos y curiosidades que
          no sabías.
        </p>
        <div className="s-main-center ">
          <Link to="/personajes">
            <p className="button btn-p s-mr-2 s-mb-2 m-mb-0">Personajes</p>
          </Link>
          <p className="button btn-s ghost  s-mb-2 m-mb-0">Secretos</p>
        </div>
      </div>
      <div>
        <div className=" s-ratio-16-9">
          <img
            src="https://i.pinimg.com/564x/96/9f/5a/969f5addb67c45bd98dad70da37a0ede.jpg"
            alt="Cuerpo de exploracion"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
