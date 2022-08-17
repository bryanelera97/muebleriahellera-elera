import { Outlet, Link } from 'react-router-dom';
import './navbar.css';
import CartWidget from '../Cart/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
// import {getCategory} from "../../utils/api";
import {db} from "../../firebase/firebase";
import {collection, getDocs } from "firebase/firestore"

const NavBarExample = ()=>{

    const[categorias,setCategoria]= useState([])

    useEffect(()=>{

        const q = collection(db, 'category')
        getDocs(q)
            .then(result => {
                console.log({result})
                const lista = result.docs.map((categoria) => {
                    return {
                        id: categoria.id,
                        ...categoria.data()
                    }
                })
                console.log({lista})
                setCategoria(lista)
            })
            .catch((error) => console.log(error))

    },[])




    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark ">
                <div className="container-fluid">
                    <div className="mr-60">

                    </div>
                    <div className="collapse navbar-collapse ml-2" id="navbarText ">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="navbar-brand text-white" aria-current="page" to="/">MUEBLES HELLERA</Link>
                            </li>

                        <li className="nav-item">
                            {
                                categorias.map(categoria=>(
                                    <Link to={`/categoria/${categoria.id}`} className="navbar-brand text-white" key={categoria.id}>{categoria.name}</Link>

                                ))
                            }
                        </li>

                        </ul>
                        <span className="navbar-text">
                            <CartWidget/>
                         </span>
                    </div>
                </div>
            </nav>

            <div className="contenedor" >

                <Outlet>

                </Outlet>

            </div>


        
        
        </>
    )
}
export default NavBarExample