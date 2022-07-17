import './App.css';
import{BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBarExample from './layouts/navbar'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBarExample/>}>
          <Route index element={<Home/>}/>
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
