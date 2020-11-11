import React, { Component } from 'react';
import Carduser from '../Molecules/carduser'
import axios from 'axios'
class Users extends Component{

    constructor(props){
        super(props) //los props pasan por heerencia al componente
        this.state = {
            users: []
        }
    }
    //-PETICON CON FETCH
    /*componentDidMount(){ //componente montado
        fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'}) //configuracion
        .then(response => response.json()) //ejecutamos una promesa que convierte a json el response
        .then(response2 => {
            this.setState({
                users: response2
            })
        }) //otra promesa concatenada que se encarga de mostrar la data 
    }*/

    //PETICION CON AXIOS
    componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{ //resolvemos la promesa
            this.setState({
                users: response.data
            })
        }) 
    }



    render(){
        const {users} = this.state
        return (
            <div className="ed-grid s-grid-2 m-grid-3 l-grid-4 ">
              { 
                   <h1>Secretos</h1>
              }

            </div>
        )
    }

}

export default Users