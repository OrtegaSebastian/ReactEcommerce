import Contar from "../ItemCount/ItemCount";
import React from "react";


const ItemDetail = ({ producto }) => {
    const { nombre, marca, precio, stock } = producto;
    return (
        <>
        <p>{nombre}</p>
        <p>{marca}</p>
        <p>{precio}</p>
        <p>{stock}</p>
        <p>{}</p>
        <Contar />
        </>
        
    );
  };


export default ItemDetail;

