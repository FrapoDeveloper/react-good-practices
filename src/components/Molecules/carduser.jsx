import React from 'react'
const Carduser = ({name,username,email})  => (
   
        <article className="card">
            <div className=" s-radius-tl s-radius-tr">
                {name}
            </div>

            <div className="s-bg-white s-pxy-2">
                <h3>{username}</h3>
            </div>
       
            <div className="s-main-center s-pxy-2">
                <span  className="button s-to-center ">{`${email}`}</span>
            </div>
        </article>

)
export default Carduser