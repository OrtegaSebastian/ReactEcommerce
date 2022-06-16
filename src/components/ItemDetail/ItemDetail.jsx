import Contar from "../ItemCount/ItemCount";
import React from "react";

const ItemDetail = ({ producto }) => {
  const { nombre, marca, precio, stock } = producto;

  const onAdd = (cantidad) => {
    alert(`se han comprado ${cantidad} productos`);
  };

  return (
    <>
      <div className="col-md6">
        <h2>{nombre}</h2>
        <h3>{marca}</h3>
        <h4>{precio}</h4>
        <p>stock = {stock}</p>
        
      </div>
      <Contar stock={stock} inicial={1} onAdd={onAdd} />
    </>
  );
};

export default ItemDetail;
