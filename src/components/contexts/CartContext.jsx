import {createContext, useContext, useState} from 'react';

const CartContext = createContext([]);

export const useCartContext =()=> useContext(CartContext)

export const CartContextProvider = ({children })=>{
    //estados y funciones
    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad)=>{
        if(IsInCart(item.id)){
            alert("el producto ya esta en el carrito")
        }else{
            setCart([...cart, {item,cantidad}])
            alert("se agrego el producto")
        }
        setCart([
        ...cart, 
            item
        ])
    }
const vaciarCarrito = () =>{
    setCart([])
}
const IsInCart = (id)=>{
    return cart&&cart.some((i)=>i.item.id === id)
}
    return(
    

        <CartContext.Provider
        value ={{
            cart,
            addToCart,
            vaciarCarrito

        }}
        >
            {children}
        </CartContext.Provider>       
        
        
    )
}
