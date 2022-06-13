import Contar from "../ItemCount/ItemCount";
import React from "react";


const ItemDetail = ({ producto }) => {
    const { nombre, marca, precio, stock } = producto;
    return (
      <>
      <div className="col-md6">
        <h2>{nombre}</h2>
        <h3>{marca}</h3>
        <h4>{precio}</h4>
        <p>{stock}</p>
        <p>{}</p>
      </div>
        <Contar />
        </>
        
    );
  };


export default ItemDetail;

