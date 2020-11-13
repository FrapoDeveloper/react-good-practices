import React, { useState, useEffect } from "react";
import Axios from "axios";
import Cardpersonajedescription from "../Molecules/cardpersonajedescription";
import "../../styles/style.css";
import Loader from "../Atoms/loader";

const Personajedescription = ({ match }) => {
  const [state, setState] = useState({});
  useEffect(() => {
    Axios.get(
      `https://my-json-server.typicode.com/FrapoDeveloper/json-db/personajes/${match.params.id}`
    ).then((response) => {
      //resolvemos la promesa
      setState(response.data);
    });
  }, []);

  return (
    <>
      {Object.keys(state).length === 0 ? (
        <Loader />
      ) : (
        <Cardpersonajedescription personajeActual={state} />
      )}
    </>
  );
};
export default Personajedescription;
