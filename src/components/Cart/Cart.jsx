import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, VaciarCarrito, PrecioTotal, IconCart } = useContext(CartContext);
    

  return (
    <>
    <div>
    {cart.length < 1 ? (
        <p>Carrito vacio</p>
    ) : (
        cart.map((producto) => 
        <CartItem key={producto.item.id} producto={producto.item} />)
        )}
    </div>
    <button onClick={VaciarCarrito}> Borrar carrito</button>
    <p>El precio total de los productos es {PrecioTotal()} </p>
    {IconCart() < 1 ? 
    <p> </p>
    :<p>La cantidad total del carrito es {IconCart()}</p>
    }
    </>
  );
};

export default Cart;
