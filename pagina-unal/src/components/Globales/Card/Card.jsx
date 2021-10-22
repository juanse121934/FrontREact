import React from 'react';
import './Card.css'
import logo from '../../../Estaticos/Slider/slider_10.jpg'





function Card({
  name,
  descripcion,
  image,
  measure_unit,
  category_products,
  onClose,
}) {
  return (
    <div className="Card">
      <h2>{category_products}</h2>
      <h2>{name}</h2>
      <img src={logo} alt="imagen" />      
      <h4>{descripcion}</h4>
      <h3>{measure_unit}</h3>
      <button>Visitar</button>
    </div>
  );
}

export default Card;