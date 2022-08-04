
import {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {getProductCategoria, getProductos} from "../../../utils/api";
import {useParams} from "react-router-dom";


const ItemListContainer = ({saludo})=>{

    const { id } = useParams()

    const[listaProductos,setListaProductos]= useState([])

    useEffect(()=>{
        if(id == null){

            getProductos().then(resp => {
                setListaProductos(resp)
            }).catch(error => console.error(error))

        }else{
            getProductCategoria(id).then(resp => {
                setListaProductos(resp)
            }).catch(error => console.error(error))
        }
    },[id])

    console.log({listaProductos})
        return (
          <div>
            <h1>{saludo}</h1>
             <ItemList listaProductos={listaProductos}/>

          </div>    
        );
}
export default ItemListContainer