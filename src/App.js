import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemList/ItemListContainer';
import Contar from './components/ItemCount/ItemCount';





  function App() {
    return<>
    
    <NavBar />
    <ItemListContainer greetings = "Hola soy un ItemListContainer"/>
    <Contar/>
    </>
  }
export default App;
