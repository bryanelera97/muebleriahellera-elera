
import {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import {db} from "../../../firebase/firebase";
import { query, where, collection, getDocs } from "firebase/firestore"

const ItemListContainer = ({saludo})=>{


    const { id } = useParams()
    const[listaProductos,setListaProductos]= useState([])

    useEffect(() => {

        const q = id
            ? query(collection(db, 'productos'), where("category_id", "==", id))
            : collection(db, 'productos')

        getDocs(q)
            .then(result => {
                console.log({result})
                const lista = result.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                console.log({lista})
                setListaProductos(lista)
            })
            .catch((error) => console.log(error))



    }, [id]);




    console.log({listaProductos})
        return (
          <div>
            <h1>{saludo}</h1>
             <ItemList listaProductos={listaProductos}/>

          </div>    
        );
}
export default ItemListContainer