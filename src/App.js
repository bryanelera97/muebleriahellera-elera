import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
// import About from './components/About/about';
// import Contact from './components/Contact/contact';
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer';
import NavBarExample from './components/Navbar/navbar'
import ItemDetailContainer from "./components/Items/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarExample/>
      <Routes>
        <Route path='/' element={<ItemListContainer saludo=" lista de Productos"/>}>
          <Route path='/categoria/:id' element={<ItemListContainer saludo="lista de Productos"/>}/>
          <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
          </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
