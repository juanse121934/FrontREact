import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from "@ant-design/icons";
import {
  faMapMarkerAlt,
  faHeadset,
  faEnvelope,  
} from "@fortawesome/free-solid-svg-icons";



import "../styles/Footer.css";




function Footer() {
  return (
    <div className="footer">
      <div className="partFooter">
        <h1>
          Delicias<b>&nbsp;Colombianas</b>
        </h1>
        <br />
        <p>
          Este espacio es que se especializa en el desarrollo & diseño de
          plataformas web, bases de datos, aplicaciones en java y edición de
          producciones de audios & videos.
        </p>
      </div>

      <div className="partFooter">
        <h5>INFORMACIÓN DE CONTACTO</h5>
        <a href="#">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Medellín: Carrera 45 #49-60
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faHeadset} /> + 57 313 3189354
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faEnvelope} />
          AY DCD.Colombia@gmail.com
        </a>
      </div>
      <div className="partFooter">
        <h4 className="redes">REDES SOCIALES</h4>
        <div className="social-media">
          < FacebookOutlined />
          <InstagramOutlined />
          <WhatsAppOutlined />
          <MailOutlined />
        </div>
      </div>
      <div className="container-footer">
        <hr />
        <h4> &copy; 2021 by Grupo 5</h4>
      </div>
    </div>
  );
}
export default Footer;
