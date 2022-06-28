import {useEffect, useState} from 'react'
import { useParams } from 'react-router';

import {getFirestore,doc,where,query,getDocs} from "firebase/firestore"




const ItemDetailContainer =()=>{
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
   
    const db = getFirestore()
    const queryCollection = doc (db,'items')
    const queryCollectionFilter = query(queryCollection, where('categoria','==', id))
  
    getDocs(queryCollectionFilter)
    .then(resp=>setProductos( {id: resp.id, ...resp.data()}))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))
  
  
  },[])
 
 
}
export default ItemDetailContainer