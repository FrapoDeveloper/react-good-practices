import React from 'react'
import Cardcharacter from '../Molecules/cardcharacter'
import withloader from '../Hoc/withloader.js'
const Charactercontainer = ({cursos}) => (
<div  className="ed-grid  grid-container s-mt-4 m-grid-2 s-grid-1 xl-grid-4 lg-grid-3 center">
        
       { cursos.map(c => (
          <Cardcharacter 
            id = {c.key}
            nombre = {c.nombre}
            img = {c.img}
            years ={c.years.slice(0,3)}
            definition = {c.definition}
            gender = {c.gender}
            />)
          )
       }
        
</div>
)
export default withloader("cursos")(Charactercontainer)