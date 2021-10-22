import React, { useState } from "react";
import axios from 'axios'
import "./Login.css"

const Login = ({registro, noRegistro}) => {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState(false);
  
 
  const apiLogin = "https://backendunal.herokuapp.com/login/";
  const userToLogin = {
    username: [],
    password: [],
  };



  const login = async (user) => {
    const response = await axios.post(apiLogin, user)
    const {token} = response.data
    if (token) {
      setIsLogin(true)
      localStorage.setItem("token", token);      
    }
  } 
  


  const handleUsername = (e, propName) => {
    userToLogin.username = e.target.value;     
  };
  

  const handlePassword = (e, propName) => {
    userToLogin.password = e.target.value;
    setUser(userToLogin);    
  };


  const handleOnClick = () => {    
    login(user);   
  }  
  

  let aux = document.querySelector(".login-contenedor");
  
  return (
    <div className="login-contenedor">
      {isLogin ? (
        aux.classList.add("ok")
      ) : (
        <div className="login">
          <h2>Iniciar sesión</h2>

          {hasError && (
            <label className="label-alerta">No has ingresado tu nombre</label>
          )}
  <br />
          <div className="username">
            <input
              name="username"
              type="text"
              onChange={(e) => handleUsername(e, "username")}
              placeholder="Nombre de usuario"
            />
          </div>

          <div className="password">
            <input
              name="password"
              type="text"
              onChange={(e) => handlePassword(e, "password")}
              placeholder="Contraseña"
            />
          </div>

          <div className="ingresar">
            <button onClick={handleOnClick}>Ingresar</button>
          </div>

          <br />
          <hr />

          <div className="registrar">
            <button
              onClick={() => {
                registro(true);
                noRegistro(false);
              }}
            >
              Registrarse
            </button>
          </div>
        </div>
      )}
    </div>
  );
  
};
export default Login;
