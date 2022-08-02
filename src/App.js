import './App.css';
import{BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import About from './components/About/about';
import Contact from './components/Contact/contact';
// import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer';
import NavBarExample from './components/Navbar/navbar'
import ItemDetailContainer from "./components/Items/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBarExample/>}>
         / {/*<Route index element={<ItemListContainer saludo="Nuevos Productos"/>}/>*/}/
          <Route index element={<ItemDetailContainer/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Navigate replace to="/"/>}/>

        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
