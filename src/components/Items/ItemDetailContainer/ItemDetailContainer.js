import {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getDetalleProducto} from "../../../utils/api";
import '../ItemDetailContainer/ItemDetailContainer.css'


const ItemDetailContainer = ()=>{

    const[producto,setProducto]= useState([])

    useEffect(()=>{
        getDetalleProducto().then(resp => {
            setProducto(resp[0])
        }).catch(error => console.error(error))

    },[])



    return (
        <div className= "luis">
            <ItemDetail producto={producto}/>


        </div>
    );
}
export default ItemDetailContainer