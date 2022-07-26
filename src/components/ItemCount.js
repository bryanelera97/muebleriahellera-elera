import { useState } from "react"
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setContador]=useState(initial)
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
    
        <div className="count-items">        
            <button onClick={restarCount}>-</button>
            <span>{count}</span>
            <button onClick={sumarCount}>+</button>
        </div>
        <div>
        <button className="btn-copra" onClick={()=>onAdd(count)}>COMPRAR</button>
        </div>

        </>
            
        
    )
}

export default ItemCount