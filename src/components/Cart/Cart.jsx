import { useCartContext } from "../contexts/CartContext";
import vaciarCarrito from "../contexts/CartContext"

const Cart = () => {
  const {cart }  = useCartContext();

  return (
    <div>
    <ul>
        {
            cart.map(Item => <li key={Item.id}>
            nombre: {Item.nombre} precio: {Item.precio} cantidad: {Item.cantidad}
            </li>  )
        }
    </ul>
    <div>
        {/* <button onClick={vaciarCarrito} >Vaciar Carrito</button> */}
    </div>
</div>
)

}

export default Cart