import   {CartContext}   from "../contexts/CartContext";
import Contar from "../ItemCount/ItemCount"; 
import{React, useContext} from "react";


const ItemDetail = ({ item }) => {
  const { nombre, marca, pictureUrl, precio, stock, inicial  } = item;
  
  const {AddToCart} = useContext(CartContext);
  
  const onAdd = (cantidad) => {
    
    AddToCart(item,cantidad );
  };



  return (
    <>
      <div style={{margin:("30px","50px","50px","50px") }} className="col-md6">
        <h2>{nombre}</h2>
        <h3>{marca}</h3>
        <img src={pictureUrl} alt={nombre} />
        <h4>Precio ${precio}</h4>
      <Contar stock={stock}  inicial={1} onAdd={onAdd} />
        <p>Unidades disponibles = {stock}</p>
      </div>
    </>
  );
};

export default ItemDetail;
