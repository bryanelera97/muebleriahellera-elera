import '../Item/Item.css';
import {Link} from "react-router-dom";

const Item = ({producto})=>{
    return(
        <>

            <div className="card" style={{width: '20rem', margin:'.10rem'}}>
               <a href="#"> <img src={producto.img} className="card-img-top"/></a>
                    <div className="card-body">
                        <h5 className="card-title">{producto.name}</h5>
                        <p className="card-text">Precio s/ {producto.precio}</p>


                    </div>
                 <Link className="btn btn-outline-primary" to={`/producto/${producto.id}`} >Ver Detalles</Link>
            </div>
        </>
    )
}

export default Item