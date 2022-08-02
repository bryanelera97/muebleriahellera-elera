import Item from "../Item/Item";
import "./ItemList.css"
const ItemList = ({listaProductos})=>{

    return(
        <div className="row" >
            {
                listaProductos.map(producto=>
                <Item key={producto.id} producto={producto}/>)
            }
        </div>
    )
}

export default ItemList