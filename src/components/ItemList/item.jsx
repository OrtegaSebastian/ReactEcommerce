import React from "react";
import Contar from "../ItemCount/ItemCount";

const Item = ({ producto }) => {
  const { nombre, marca, precio, stock } = producto;
  return (
    <div style={{color:"red" , border:"2px black solid"}}>
      <p>{nombre}</p>
      <p>{marca}</p>
      <p>{precio}</p>
      <p>{stock}</p>
      <Contar stock={stock} inicial={1} />
    </div>
  );
};

export default Item;
