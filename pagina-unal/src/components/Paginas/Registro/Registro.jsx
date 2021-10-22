import React, { useState } from "react";
import axios from "axios";


import "./Registro.css";

const Registro = ({ registro, noRegistro }) => {
  const [user, setUser] = useState(""); 
  const apiRegistro = "https://backendunal.herokuapp.com/users/";

  const userToRegistro = {
    username: "",
    name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const registrar = async (user) => {
    axios
      .post(apiRegistro, user)
      .then((response) => {
        registro(false);
        noRegistro(true);
      })
      .catch((error) => {
        alert("Favor llenar todos los campos");
      });
  };

  const handleUsername = (e, propName) => {
    userToRegistro.username = e.target.value;
  };
  const handleName = (e, propName) => {
    userToRegistro.name = e.target.value;
  };
  const handleLastName = (e, propName) => {
    userToRegistro.last_name = e.target.value;
  };
  const handleEmail = (e, propName) => {
    userToRegistro.email = e.target.value;
  };

  const handlePassword = (e, propName) => {
    userToRegistro.password = e.target.value;
    setUser(userToRegistro);
  };

  const handleOnClick = () => {
    registrar(user);
  };
  return (
    <div className="registro-contenedor">




      <div className="registro">
      
        <input
          name="username"
          type="text"
          onChange={(e) => handleUsername(e, "username")}
          placeholder="Ingrese su nombre de usuario"
        />

       
        <input
          name="name"
          type="text"
          onChange={(e) => handleName(e, "username")}
          placeholder="Ingrese su nombre"
        />

  
        <input
          name="last_name"
          type="text"
          onChange={(e) => handleLastName(e, "username")}
          placeholder="Ingrese su Apellido"
        />

       
        <input
          name="email"
          type="text"
          onChange={(e) => handleEmail(e, "username")}
          placeholder="Ingrese su Email"
        />

        
        <input
          name="password"
          type="text"
          onChange={(e) => handlePassword(e, "username")}
          placeholder="Ingrese su Contraseña"
        />

        <div className="btn-registro">
          <button onClick={handleOnClick}>REGISTRESE</button>
        </div>

      </div>



      
    </div>
  );
  };
  
export default Registro;
