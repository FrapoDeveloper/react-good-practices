import React from 'react'
import Power from '../../assets/estrella.png'
import '../../styles/titan.css'



const Cardtitan = ({id,img, name,altura,description}) => (
    <div className="ed-grid card-titan  s-bg-grey  m-bg-grey  lg-bg-grey xs-bg-grey lg-grid-3 lg-90 lg-to-center s-pxy-1 s-border s-radius s-shadow-bottom">
 
    <div className="s-ratio-4-3 l-ratio-9-16  img-container img-titan">
        <img src={img} />
    </div>

    <div className="lg-cols-2 content">
        <h2>{name}</h2>

        <nav className="info-titan">
         <p className="left">
            {description}
        </p>

        <span className="power">
            {`Poder:`}
            
            <img src={Power} alt="" width="25px" height="25px" />
            <img src={Power} alt="" width="25px" height="25px" />
            <img src={Power} alt="" width="25px" height="25px" />

            <img src={Power} alt="" width="25px" height="25px" />


        </span>    
        </nav>
       <p className="left"> {`Altura: ${altura}`}
            </p>

   </div>
</div>


)

export default Cardtitan 