// import ItemCount from "./ItemCount";
import {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {getProductos} from "../../../utils/api";


const ItemListContainer = ({saludo})=>{

    const[listaProductos,setListaProductos]= useState([])

    useEffect(()=>{
        getProductos().then(resp => {
            setListaProductos(resp)
        }).catch(error => console.error(error))

    },[])

        return (
          <div>
            <h1>{saludo}</h1>
             <ItemList listaProductos={listaProductos}/>

          </div>    
        );
}
export default ItemListContainer