import { useContext } from 'react'
import{CartContext} from "../contexts/CartContext";

const CartItem = ({producto}) => {
    const {DelItem} = useContext(CartContext);
    const {nombre, precio,id}= producto;
    return (
    <div>
        <h4>{nombre}</h4>
        <h4>{precio}</h4>
        <button onClick={()=> DelItem(id)}>borrar item</button>
    </div>
    )
}

export default CartItem