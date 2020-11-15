import React from "react";
import '../../styles/style.css'
const Cardtitandescription = ({ titanActual }) => (
  <article className="">
    <div className="ed-grid  m-grid-5 s-gap-2 m-pxy-2 s-bg-white s-radius-tl s-radius-tr">
      <div className="m-cols-2 img-container s-ratio-16-9 s-radius-tl s-radius-tr m-radius">
        <img src={titanActual.img} alt={titanActual.name} />
      </div>
      <div className="s-pxy-2 m-pxy-0 m-cols-3">
        <h1>{titanActual.name}</h1>
        <h3>{titanActual.altura}</h3>

        <h3 className="s-mb-0">{titanActual.description}</h3>
      </div>
    </div>
    <footer className="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
      <div className="s-to-center">Apodo: algo</div>
    </footer>
    <div className="name-text">
        <h2>{`Mejor momento de ${titanActual.name}`}</h2>
    </div>

  </article>
);

export default Cardtitandescription;
