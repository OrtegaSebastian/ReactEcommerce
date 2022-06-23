import { useState } from "react";


function Contar({ stock, inicial, onAdd }) {


  let [cantidad, setCantidad] = useState(inicial);
  let [mostrar, setMostrar] = useState(true);
  const aumentarCantidad = () => {
    if (cantidad < stock) setCantidad(cantidad+1);
  };
  const disminuirCantidad = () => {
    if (cantidad > inicial) setCantidad(cantidad-1);
  };

  const agregarItem = () => {
    onAdd(cantidad);
  };

  return (
    <>
      <div>
        <div className="Contar">
          <button type="button" onClick={disminuirCantidad}>
            -
          </button>
          <p className="Cantidad">Cantidad {cantidad}</p>
          <button type="button" onClick={aumentarCantidad}>
            +
          </button>
        </div>
        <button onClick={agregarItem}>Agregar al carrito</button>
      </div>

      
        
     
     
    </>
  );
}

export default Contar;
