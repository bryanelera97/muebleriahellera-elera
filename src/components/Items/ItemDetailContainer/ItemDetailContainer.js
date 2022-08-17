import {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import '../ItemDetailContainer/ItemDetailContainer.css'
import {useParams} from "react-router-dom";
import {collection, doc ,getDoc} from "firebase/firestore"
import {db} from "../../../firebase/firebase";
const ItemDetailContainer = ()=>{

    const[producto,setProducto]= useState({})
    const { id } = useParams()


    useEffect(() => {
        //Le decimos nuestra base de datos y en que colección esta
        const collecionProductos = collection(db, 'productos')
        //La referencia de que tiene que traer (id)
        const referenciaDoc = doc(collecionProductos, id)
        //Traemos un solo documento
        getDoc(referenciaDoc)
            .then(result => {
                setProducto({
                    id: result.id,
                    ...result.data()
                })
            })
            .catch(error => {
                console.log({error})
            })
    }, [id])


    return (
        <div className= "luis">

            <ItemDetail producto={producto}/>


        </div>
    );
}
export default ItemDetailContainer