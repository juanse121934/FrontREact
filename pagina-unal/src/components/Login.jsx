import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Login.css";

let alerta = () => {
  alert('FUNCIONO')
}

function Login() {
  return (
    <div className="contenido-inicio">
      <div className="logo">
        <h1>
          <FontAwesomeIcon icon={faUtensils} />
          <hr /> Restaurante mintic
        </h1>
      </div>
      <div className="contenidos">
        <h1>Delicias Colombianas</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        <p>Ratione sapiente iste minima, dolore.</p>
        <div>
          <button></button>
          <a type="submit" onClick={alerta()} >
            Ingresar
          </a>
        </div>
        <div>
          <a href="./Paginas/Menu.html">Registrarse</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
