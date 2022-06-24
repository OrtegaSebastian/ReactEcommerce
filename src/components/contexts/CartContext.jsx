import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({children })=>{
    //estados y funciones
    const [cart, setCart] = useState([])

    const AddToCart = (item, cantidad)=>{
    
    if(IsInCart(item.id)){
        alert("el producto ya esta en el carrito")
    }else{
        setCart([...cart, {item,cantidad}])
        alert("se agrego el producto", {cantidad})
    }
}

const DelItem = (id) =>{
    const items = cart.filter((producto)=> producto.item.id!==id)
    setCart(items)
    return
}
const IconCart = ( )=>{
    return cart.reduce((acum,i)=> acum +i.cantidad,0)
}
const PrecioTotal = () => {
    return cart.reduce((acum, i) => acum + i.cantidad * i.item.precio, 0)
  }
  const VaciarCarrito = () =>{
    return setCart([])
  }

const IsInCart = (id)=>{
    return cart&&cart.some((i)=>i.item.id === id)
}
    return(
          
           <CartContext.Provider value={{ AddToCart, cart, VaciarCarrito, DelItem, PrecioTotal, IconCart }}>
           {children}
         </CartContext.Provider>
       );
        
    
}
export default CartContextProvider;