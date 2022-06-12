import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemList/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';





  function App() {
  return<>
    <NavBar />
    <ItemListContainer/>
    <CartWidget/>
    <ItemDetailContainer/>

  </>
}
export default App;
