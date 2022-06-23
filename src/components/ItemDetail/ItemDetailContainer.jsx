import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router';
import  {listaProductos} from "../ItemList/ItemListContainer"




const getItem = (id)=> { 
  
  return new Promise ((res,rej)=>{
    setTimeout(()=>{
    res(listaProductos.find((producto)=>+producto.id === +id));
  },2000);
});
}
const ItemDetailContainer =()=>{
  const [producto, setProducto] = useState ({})
  const {id} = useParams()
  useEffect(() => {
    getItem(id)  
      .then((resp)=> setProducto(resp))
      .catch((err)=> console.log(err))
  })
    return (
      <div>
        <ItemDetail item={producto}/>
      </div>
    )
  
}

export default ItemDetailContainer