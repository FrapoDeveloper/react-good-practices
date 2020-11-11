import Axios from 'axios'
import React, { Component } from 'react'
import Charactercontainer from '../Organisms/charactercontainer'
import WithLoader from '../Hoc/withloader'
import '../../styles/characters.css'

class Characters extends Component {
  constructor(props){
    super(props)
    this.state={
      cursos: []
    }
  }

  componentDidMount(){
    Axios.get('https://my-json-server.typicode.com/FrapoDeveloper/json-db/personajes')
    .then(response=>{ //resolvemos la promesa
            this.setState({
                cursos: response.data
              })
        }) 
    }
  
   render(){
     const {cursos} = this.state //destructuracion de objetos
     return(
        <Charactercontainer cursos ={cursos}/>
     )
   }
 

}
export default WithLoader(Characters) 