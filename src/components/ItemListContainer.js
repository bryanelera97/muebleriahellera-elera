// import ItemCount from "./ItemCount";
import {useEffect, useState} from "react";
import ItemList from "./ItemList";


const ItemListContainer = ({saludo})=>{

     const [listaProductos, setListaProductos] = useState([])

     const [ setMensaje]=useState(false)
        // const onAdd = (cantidad)=>{
        // console.log(`Agregaste ${cantidad} productos en el carrito`)
        // }

        let productos = require('../data.json')
        const  data = new Promise((resolve, reject) =>{

            let  condition = true
            setTimeout(()=>{
                if(condition){
                    resolve(productos)
                }else{
                    reject('salio mal')
                }
            },2000)
        } )
    console.log(data);

      useEffect(()=>{

          data.then((res)=>setListaProductos(res.productos))
              .catch(()=>setMensaje('hubo un error, intente mas tarde'))

      }, [])

        return (
          <div>
            <h1>{saludo}</h1>
             <ItemList listaProductos={listaProductos}/>

          </div>    
        );
}
export default ItemListContainer