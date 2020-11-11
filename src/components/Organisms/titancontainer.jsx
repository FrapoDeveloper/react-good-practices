import React from 'react'
import Cardtitan from '../Molecules/card-titan'

const Titancontainer = ({titanes}) => (
<>
<h1 className="title-titan">Los 9 titanes cambiantes (metamorfos) </h1> 
<div className="ed-grid grid-container s-mt-2 m-grid-2 s-grid-1 xl-grid-2 lg-grid-2 center">
    {titanes.map(t => <Cardtitan 
        id = {t.key}
        img = {t.img}
        name = {t.name}
        altura = {t.altura}
        description =  {t.description}
    />
    )}
</div>
</>

)
export default Titancontainer