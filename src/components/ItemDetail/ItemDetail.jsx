import GetItem from "./ItemDetailContainer";
import  listaProductos  from "../ItemList/Item"

function ItemDetail() {
    return(
        <GetItem id = {listaProductos.id}/>
        )
} 




export default ItemDetail;

