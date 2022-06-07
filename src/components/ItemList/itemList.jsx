// import React from 'react';
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardLink } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <MDBCard style={{ width: '18rem' }}>
//       <MDBCardBody>
//         <MDBCardTitle>Card title</MDBCardTitle>
//         <MDBCardSubTitle>Card subtitle</MDBCardSubTitle>
//         <MDBCardText>
//           Some quick example text to build on the card title and make up the bulk of the card's content.
//         </MDBCardText>
//         <MDBCardLink href='#'>Card link</MDBCardLink>
//         <MDBCardLink href='#'>Another link</MDBCardLink>
//       </MDBCardBody>
//     </MDBCard>
//   );
// }

let producto = [
    {id:"1" , nombre: "Aceite", marca: "cañuelas", precio:80, stock: 5, pictureUrl: "www.blabla.com" },
    {id:"2" , nombre: "Azcuar", marca: "chamigo", precio:50, stock: 10, pictureUrl: "www.blabla2.com" }, 
    {id:"3" , nombre: "Sal", marca: "Salado", precio:80, stock: 5, pictureUrl: "www.blabla3.com" },
    {id:"4" , nombre: "Yerba", marca: "Sinceridad", precio:600, stock: 5, pictureUrl: "www.blabla4.com" },
    {id:"5" , nombre: "Foco", marca: "Ilumninaty", precio:180, stock: 15, pictureUrl: "www.blabla5.com" },
    {id:"6" , nombre: "Agua", marca: "Saciedad", precio:280, stock: 8, pictureUrl: "www.blabla6.com" },
];
// function ItemList({ items }) {
    // El componente va a recibir una prop `items` y va a mapear estos `items` al componente `<Item … />`
//    }
   
const itemList = ()=> {
    return new Promise ((resolve)=>{
        resolve (producto);
    });
};

setTimeout(()=>{
    itemList()
    .then((response)=>{
    console.log(response)    
    })
    .catch((response)=>{
    console.log(response)    
    })
},2000)


export default itemList;