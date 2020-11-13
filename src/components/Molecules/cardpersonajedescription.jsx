import React from "react";
import ReactPlayer from 'react-player'
import '../../styles/style.css'
const Cardpersonajedes = ({ personajeActual }) => (
  <article className="s-shadow-bottom">
    <div className="ed-grid  m-grid-5 s-gap-2 m-pxy-2 s-bg-white s-radius-tl s-radius-tr">
      <div className="m-cols-2 img-container s-ratio-16-9 s-radius-tl s-radius-tr m-radius">
        <img src={personajeActual.gif} alt={personajeActual.nombre} />
      </div>
      <div className="s-pxy-2 m-pxy-0 m-cols-3">
        <h1>{personajeActual.nombre}</h1>
        <h3>{personajeActual.gender}</h3>

        <h3 className="s-mb-0">{personajeActual.description}</h3>
      </div>
    </div>
    <footer className="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
      <div className="s-to-center">{`Nacio el ${personajeActual.birthdate}
         y tiene ${personajeActual.years.slice(0,3)} años.`}</div>
    </footer>
    <div className="name-text">
        <h2>{`Mejor momento de ${personajeActual.nombre}`}</h2>
    </div>

    <div className="video-react">
  
        <ReactPlayer
          url={personajeActual.video}
          className='react-player'
          playing="true"
          controls = "false"
        />
   
    </div>

  </article>
);

export default Cardpersonajedes;
