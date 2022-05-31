import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemList/ItemListContainer';





  function App() {
    return<>
    
    <NavBar />
    <ItemListContainer greetings = "Hola soy un ItemListContainer"/>
    </>
  }
export default App;
