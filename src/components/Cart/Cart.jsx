import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, VaciarCarrito, PrecioTotal, IconCart } = useContext(CartContext);
  
  function generarOrden(e) {
    e.PreventDefaul()
    let orden ={}

    orden.buyer = {producto: 'algo', email: 'nada', numero: '12345'}
    orden.total = precioTotal();
    
    orden.items = cartList.map(carItem=>
      const id = cartItem.id
      const nombre = cartItem.nombre
      const precio = cartItem.precio * cartItem.cantidad
      

      )

    
  }
  

  return (
    <>
    <div >
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
