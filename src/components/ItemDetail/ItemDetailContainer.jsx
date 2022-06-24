import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router';
import  {listaProductos} from "../ItemList/ItemListContainer"
// import {getFirestore} from "firebase/firestore"

// const [bool, setBool] = useState(true);

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
// useEffect (()=>{
//   const db = getFirestore()
//   const queryItem = doc(db, 'items','
//   GxRzFlZpsFmCgw2ztOH5')
//   getDoc(queryItem)
//   .then(resp=> setProducto({id: resp.id,...resp.data()}))
//   .catch(())
// },[bool])


export default ItemDetailContainer