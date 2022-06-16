import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const listaProductos = [
  {
    id: "1",
    nombre: "Aceite",
    marca: "cañuelas",
    precio: 80,
    stock: 5,
    pictureUrl: "www.blabla.com",
    category:"almacen"
  },
  {
    id: "2",
    nombre: "Azucar",
    marca: "chamigo",
    precio: 50,
    stock: 10,
    pictureUrl: "www.blabla2.com",
    category:"almacen"
  },
  {
    id: "3",
    nombre: "Sal",
    marca: "Salado",
    precio: 80,
    stock: 5,
    pictureUrl: "www.blabla3.com",
    category:"almacen"
  },
  {
    id: "4",
    nombre: "Yerba",
    marca: "Sinceridad",
    precio: 600,
    stock: 5,
    pictureUrl: "www.blabla4.com",
    category:"almacen"
  },
  {
    id: "5",
    nombre: "Foco",
    marca: "Ilumninaty",
    precio: 180,
    stock: 15,
    pictureUrl: "www.blabla5.com",
    category:"ferreteria"
  },
  {
    id: "6",
    nombre: "Agua",
    marca: "Saciedad",
    precio: 280,
    stock: 8,
    pictureUrl: "www.blabla6.com",
    category:"almacen"
  },
];

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams()

  useEffect(() => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(listaProductos);
      }, 2000);
    });
    promise
      .then((res) => {
        setProductos(id?res.filter((product)=> product.category === id):res);
        setLoading(true);
      })
      .catch((err) => console.log(err));

      return(()=>{
        setLoading(false)
      })
  }, [id]);

  return (
    <div>
      {!loading ? <p>...Cargando</p> : <ItemList productos={productos} />}
      {console.log(id)}
    </div>
  );
};

export default ItemListContainer;
