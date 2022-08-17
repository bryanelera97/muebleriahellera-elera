import ItemCount from "../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css'
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";


const ItemDetail = ({producto})=>{
    const {addItem} = useContext(CartContext)
    const [count, setContador]=useState(0)
    const [compra,setCompra]=useState(false) 
   


    const onAdd = () => {
        let productoNuevo = {
           
            id : producto.id,
            name: producto.name,
            precio: producto.precio,
            img: producto.img,
            stock: producto.stock,
            cantidad: count
        }

        setCompra(true)
        addItem(productoNuevo)
    }
    


    const navegar= useNavigate()
     return(
        <>
            <div className="card mb-3">
                <div className="row g-2">
                    <div className="col-md-4">
                        <img src={producto.img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body" >
                            <h5 className="card-title" style={{textAlign:'center'}}>{producto.name}</h5>
                            <p className="card-text" style={{textAlign:'justify'}}><strong>Descripción: </strong>{producto.description}</p>
                            <p className="card-text"><strong>Precio s/ </strong> {producto.precio}</p>
                            <p className="card-text"><strong>Stock: </strong><small className="text-muted">{producto.stock}</small></p>
                            { 
                             compra ? <div><button className="btn btn-primary text-dark"  onClick={()=> navegar("/")} >Seguir comprando</button> <button className="btn btn-danger text-dark" onClick={()=> navegar("/carrito")} >Ir a carrito</button></div>
                                    :  <ItemCount initial={1} stock={producto.stock} count={count} setContador={setContador} onAdd={onAdd}/>
                            }


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail