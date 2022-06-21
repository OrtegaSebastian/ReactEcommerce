import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router';
import listaProductos from "../ItemList/ItemListContainer"

// const listaProductos = [
//   {
//     id: "1",
//     nombre: "Aceite",
//     marca: "cañuelas",
//     precio: 80,
//     stock: 5,
//     pictureUrl: "../Assets/aceite.jpg" ,
//     category:"almacen"
//   },
//   {
//     id: "2",
//     nombre: "Azucar",
//     marca: "ledesma",
//     precio: 50,
//     stock: 10,
//     pictureUrl: "../Assets/azucar.jpeg",
//     category:"almacen"
//   },
//   {
//     id: "3",
//     nombre: "Sal",
//     marca: "Salado",
//     precio: 80,
//     stock: 5,
//     pictureUrl: "../Assets/sal.jpeg",
//     category:"almacen"
//   },
//   {
//     id: "4",
//     nombre: "Tomate",
//     marca: "tomate",
//     precio: 600,
//     stock: 5,
//     pictureUrl: "../Assets/tomates.jpg",
//     category:"verduleria"
//   },
//   {
//     id: "5",
//     nombre: "Pan",
//     marca: "Pan",
//     precio: 180,
//     stock: 15,
//     pictureUrl: "../Assets/pan.jpg",
//     category:"panaderia"
//   },
//   {
//     id: "6",
//     nombre: "Huevo",
//     marca: "Gallo",
//     precio: 280,
//     stock: 8,
//     pictureUrl: "../Assets/huevos.jpg",
//     category:"almacen"
//   },
//   {
//     id: "7",
//     nombre: "foco",
//     marca: "iluminar",
//     precio: 280,
//     stock: 8,
//     pictureUrl: "../Assets/foco.png",
//     category:"ferreteria"
//   },
// ];



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
        <ItemDetail producto={producto}/>
      </div>
    )
  
}

export default ItemDetailContainer