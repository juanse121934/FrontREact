import React from "react";
import './Centro.css'

function Centro ({titulo, parrafo,}) {
   return (
     <div className="contenido-inicio">
       <div className="contenidos">
         <h1>{titulo}</h1>
         <p>{parrafo}</p>
         <button className="btn-menu" type="submit" >Menu</button>
       </div>
     </div>
   );
}

export default Centro;