import React from 'react';


const Cardcourse = ({title,img,price}) => (
    <>
        <article className="card">
            <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
                <img src={img} alt={title}/>
            </div>

            <div className="s-bg-white s-pxy-2">
                <h3>{title}</h3>
            </div>
       
            <div className="s-main-center s-pxy-2">
                <span  className="button s-to-center ">{`S/ ${price} soles`}</span>
            </div>
        </article>
    </>

)

export default Cardcourse;