import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc, collection, getDocs, query} from "firebase/firestore"


// export const listaProductos = [
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
//     marca: "tomates",
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

const ItemListContainer = () => {


  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
 

  useEffect(()=>{

    const db = getFirestore()
    const queryCollection = collection(db,'items')
    getDocs(queryCollection)
    .then(resp=>setProductos( resp.docs.map( item=>({id: item.id, ...item.data()}))))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))


  })
} 
//   useEffect(() => {
//     const promise = new Promise((res, rej) => {
//       setTimeout(() => {
//         res(listaProductos);
//       }, 2000);
//     });
//     promise
//       .then((res) => {
//         setProductos(id?res.filter((product)=> product.category === id):res);
//         setLoading(true);
//       })
//       .catch((err) => console.log(err));

//       return(()=>{
//         setLoading(false)
//       })
//   }, [id]);

//   return (
//     <div>
//       {!loading ? <p>...Cargando</p> : <ItemList productos={productos} />}
//       {console.log(id)}
//     </div>
//   );
// };

export default ItemListContainer;
