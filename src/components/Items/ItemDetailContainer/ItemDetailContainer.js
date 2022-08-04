import {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getDetalleProducto} from "../../../utils/api";
import '../ItemDetailContainer/ItemDetailContainer.css'
import {useParams} from "react-router-dom";


const ItemDetailContainer = ()=>{

    const[producto,setProducto]= useState({})
    const { id } = useParams()


    useEffect(() => {
        getDetalleProducto(id).then(resp => {
            setProducto(resp.filter((producto) => parseInt(producto.id) === parseInt(id))[0])
        }).catch(error => console.error(error))
    }, [id])


    return (
        <div className= "luis">

            <ItemDetail producto={producto}/>


        </div>
    );
}
export default ItemDetailContainer