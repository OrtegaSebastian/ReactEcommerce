import React from "react";
import { Link } from "react-router-dom";


const Item = ({ producto }) => {
  const { nombre, marca, precio,pictureUrl,id, descripcion } = producto;
  return (
    <div
        className="col-md-4 p-1"
    >
      <div className="card w-100 mt5">
        <div className="card-header">
          {`${nombre} - ${marca}`}  
        </div>
        <div>Precio{precio}</div>  
      <div className="card-body">
        <img src={pictureUrl} alt="foto" className="w-50"/>
        <p>{descripcion}</p>
      </div>
      
      </div>
      <div className="card-footer">
        <Link to={`/detalle/${id}`} >
        <button className="btn btn-outline-primary btn block">
          detalle producto
        </button>
        </Link>
        </div>   
      </div>
  
  );
};


export default Item;
