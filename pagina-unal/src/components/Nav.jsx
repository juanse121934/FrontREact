import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  
  faUtensils,
  faHome,
  faUserAlt,
  faFile,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons'
import '../styles/Nav.css'

function Nav() {

  return (   
    <nav>
      <section className="contenedor-navegacion">
        <div className="logo">
          <h1>
            <FontAwesomeIcon icon={faUtensils} />
            <hr/> Restaurante mintic 
          </h1>
        </div>
        <div className="enlaces-encabezado">
          <ul>
            <li className="In">
              <a href="Index.htm">
            <FontAwesomeIcon icon={faHome} />                
                Inicio
              </a>
            </li>
            <li className="Men">
              <a href="./Paginas/Menu.html">                            
              <FontAwesomeIcon icon={faUtensils} />
                Menu
              </a>
            </li>
            <li className="Se">
              <a href="#">
                <FontAwesomeIcon icon={faHome} /> 
                Servicios
              </a>
            </li>
            <li className="Ac">
              <a href="#">
                <FontAwesomeIcon icon={faUserAlt}/>
                Acerca de nosotros
              </a>
            </li>
            <li className="Pa">
              <a href="#">
                <FontAwesomeIcon icon={faFile} />                
                Paginas
              </a>
            </li>
            <li className="Bl">
              <a href="#">                
                <FontAwesomeIcon icon={faNewspaper} />                
                Blog
              </a>
            </li>
          </ul>
        </div>
      </section>
    </nav>  
  )
  
}

export default Nav;