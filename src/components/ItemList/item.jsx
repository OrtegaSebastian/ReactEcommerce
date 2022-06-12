import React from "react";
import Contar from "../ItemCount/ItemCount";

const Item = ({ producto }) => {
  const { nombre, marca, precio, stock, descripcion } = producto;
  return (
    <div style={{color:"green" , border:"2px black solid"}}>
      <p>{nombre}</p>
      <p>{marca}</p>
      <p>{precio}</p>
      <p>{descripcion}</p>
      <p>{}</p>
      <Contar stock={stock} inicial={1} />
    </div>
  );
};

export default Item;
