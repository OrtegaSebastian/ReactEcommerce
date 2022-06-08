import React, { useEffect, useState } from "react";
import ItemList from "./itemList";

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
    nombre: "Azcuar",
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

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(listaProductos);
      }, 2000);
    });
    promise
      .then((res) => {
        setProductos(res);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {!loading ? <p>...Cargando</p> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
