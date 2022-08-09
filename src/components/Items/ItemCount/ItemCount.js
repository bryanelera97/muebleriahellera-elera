
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd,count,setContador}) => {
   
    const sumarCount = ()=>{
        if(count<stock){
            setContador(count + 1)
        }
    }
    const restarCount = ()=>{
        if(count>initial){
            setContador(count - 1)
        }
       
    }
    
    
    return(
        <>

            <div className="counter">
                <button className="boton1" disabled={count <= 1} onClick={restarCount}>-</button>
                <span className="numeroConteo">{count}</span>
                <button className="boton2" disabled={count >= stock} onClick={sumarCount}>+</button>
                <div>
                    <button className="agregarCarrito" disabled={stock <= 0} onClick={onAdd}>Agregar al  Carrito</button>
                </div>
            </div>
        </>
            
        
    )
}

export default ItemCount