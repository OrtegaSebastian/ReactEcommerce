import {useEffect, useState} from 'react'
import  listaProductos  from "../ItemList/Item"
import ItemDetail from '../ItemDetail/ItemDetail'

const getItem = (id)=> { 
  return new Promise ((res,rej)=>{
    setTimeout(()=>{
    res(listaProductos.find((producto)=>producto.id === id));
  },2000);
});
}
const ItemDetailContainer =()=>{
  const [producto, setProducto] = useState ({})

  useEffect(() => {
    getItem(1)  
      .then((resp)=> setProducto(resp))
      .catch((err)=> console.log(err))
  })
    return (
      <div>
        <ItemDetail producto={producto.id}/>
      </div>
    )
  
}

export default ItemDetailContainer