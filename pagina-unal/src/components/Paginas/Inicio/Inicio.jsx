import React, { useState } from "react";


import "./Inicio.css";
import Nav from "../../Globales/Nav/Nav.jsx";
import Centro from "../../Globales/Centro/Centro.jsx";
import Footer from "../../Globales/Footer/Footer.jsx";
import Login from "../Login/Login";
import Registro from '../Registro/Registro.jsx'



function Welcome() {
  const [isNoRegistro, setNoRegistro] = useState(true);
  const [isRegistro, setRegistro] = useState(false);

  const handleRegistro = (props) => {
    setRegistro(props);
  };
  
  const handleNoRegistro = (props) => {
    setNoRegistro(props);
  };

  return (
    <div className="Welcome">
      {isRegistro && (
        <Registro registro={handleRegistro} noRegistro={handleNoRegistro} />
      )}
      {isNoRegistro && (
        <Login registro={handleRegistro} noRegistro={handleNoRegistro} />
      )}
      <Nav />
      <Centro
        titulo="Delicias Colombianas"
        parrafo="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
      />
      <Footer />
    </div>
  );
}

export default Welcome;
