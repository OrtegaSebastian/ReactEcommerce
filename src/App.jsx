import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


  function App() {
  return(
  <BrowserRouter>
    <NavBar />
  <Routes>
    <Route index path="/" element={<ItemListContainer/>}/>
    <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
    <Route path="/cart" element={<Cart/>}/>

    <Route path="*" element={<Navigate to ="/"/>}/>
    
  </Routes>
  
  </BrowserRouter>
  )
}


export default App;
