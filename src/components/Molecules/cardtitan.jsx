import React from "react";
import "../../styles/titan.css";
import "../../styles/style.css";
const Cardtitan = ({ id, poder, img, name, altura, definition }) => (
  <div className="ed-grid card-titan  s-bg-grey  m-bg-grey  lg-bg-grey xs-bg-grey lg-grid-3 lg-90 lg-to-center s-pxy-1 s-border s-radius s-shadow-bottom">
    <div className="s-ratio-4-3 l-ratio-9-16  img-container img-titan">
      <img src={img} alt={name} />
    </div>

    <div className="lg-cols-2 content">
      <h2>{name}</h2>
      <nav className="info-titan">
        <p className="left">{definition}</p>

        <span className="power">
        <p>Poder</p>
            {poder.map((t) => (
             
                  <svg className="start" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  width="30" height="30" viewBox="0 0 170 165">
                  <polygon fill="yellow" stroke="black" stroke-width="7"
                    points="129,150 85,119 41,150 57,104 15,66
                      68,66 85,15 102,65 156,66 113,98" />
                  </svg>
            
                )
            )
            }
        </span>
      </nav>
      <strong>
        <p className="left"> {`Altura: ${altura}`}</p>
      </strong>
    </div>
  </div>
);

export default Cardtitan;
