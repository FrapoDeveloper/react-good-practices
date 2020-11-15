import Axios from "axios";
import React, { Component } from "react";
import Personajescontainer from "../Organisms/personajescontainer";
import "../../styles/characters.css";

class Personajes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personajes: [],
    };
  }

  componentDidMount() {
    Axios.get(
      "https://my-json-server.typicode.com/FrapoDeveloper/json-db/personajes"
    ).then((response) => {
      //resolvemos la promesa
      this.setState({
        personajes: response.data,
      });
    });
  }

  render() {
    const { personajes } = this.state; //destructuracion de objetos
    return <Personajescontainer personajes={personajes} />;
  }
}
export default Personajes;
