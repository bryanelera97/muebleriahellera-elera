import '../components/Item.css';

const Item = ({producto})=>{
    return(
        <>

            <div className="card" style={{width: '20rem', margin:'.10rem'}}>
               <a href="#"> <img src={producto.img} className="card-img-top"/></a>
                    <div className="card-body">
                        <h5 className="card-title">{producto.name}</h5>
                        <p className="card-text">Precio s/ {producto.precio}</p>

                    </div>
            </div>
        </>
    )
}

export default Item