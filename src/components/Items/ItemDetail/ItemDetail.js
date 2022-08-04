import ItemCount from "../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({producto})=>{

    const onAdd = (item) => {

        console.log (`Compraste ${item} unidades`);
    }

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
                            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
                            <p className="card-text"><strong>Stock: </strong><small className="text-muted">{producto.stock}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail