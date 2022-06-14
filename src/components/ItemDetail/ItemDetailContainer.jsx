import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router';

const listaProductos = [
  {
    id: "1",
    nombre: "Aceite",
    marca: "cañuelas",
    precio: 80,
    stock: 5,
    pictureUrl: "www.blabla.com",
  },
  {
    id: "2",
    nombre: "Azucar",
    marca: "chamigo",
    precio: 50,
    stock: 10,
    pictureUrl: "www.blabla2.com",
  },
  {
    id: "3",
    nombre: "Sal",
    marca: "Salado",
    precio: 80,
    stock: 5,
    pictureUrl: "www.blabla3.com",
  },
  {
    id: "4",
    nombre: "Yerba",
    marca: "Sinceridad",
    precio: 600,
    stock: 5,
    pictureUrl: "www.blabla4.com",
  },
  {
    id: "5",
    nombre: "Foco",
    marca: "Ilumninaty",
    precio: 180,
    stock: 15,
    pictureUrl: "www.blabla5.com",
  },
  {
    id: "6",
    nombre: "Agua",
    marca: "Saciedad",
    precio: 280,
    stock: 8,
    pictureUrl: "www.blabla6.com",
  },
];



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