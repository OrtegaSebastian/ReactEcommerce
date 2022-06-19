import { useCartContext } from "../contexts/CartContext";
import Contar from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  const { nombre, marca, precio, stock } = producto;
 
  const {cart,addToCart} = useCartContext();
  
  const onAdd = (cantidad) => {
    console.log(`se han comprado ${cantidad} productos`);
    addToCart({...producto,cantidad : cantidad})
  };
  console.log(cart)
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
