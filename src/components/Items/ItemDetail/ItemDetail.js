import ItemCount from "../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
const ItemDetail = ({producto})=>{
    const [count, setContador]=useState(0)
    const [compra,setCompra]=useState(false)

    const onAdd = () => {
       setCompra(true)        
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
                            compra ? <button onClick={()=>navegar("/carrito")}   ><strong>ir al carrito</strong></button> : <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}  count={count} setContador={setContador} />

                            }
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail