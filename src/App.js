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
          <section className='center'>
              <Routes>
                  <Route path='/' element={<ItemListContainer saludo="LISTA DE PRODUCTOS"/>}/>
                  <Route path='/categoria/:id' element={<ItemListContainer saludo="LISTA DE PRODUCTOS"/>}/>
                  <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
              </Routes>
          </section>
      </BrowserRouter>

    </div>
  );
}

export default App;
