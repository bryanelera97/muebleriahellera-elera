import {CartContext} from "../CartContext/CartContext";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";



function Carrito() {

    const { cart, removeItem,cantidadTotalDeProductosCarrito, precioTotal,clear} = useContext(CartContext)
    const navigate = useNavigate()


    return (
        <>
            {
                cantidadTotalDeProductosCarrito() > 0 ? (
                    <div className="container mt-3">
                        <h2 className="text-danger">Cantidad de productos: {cantidadTotalDeProductosCarrito()}</h2>
                        <button className="btn-carro" onClick={()=> clear()}>Limpiar carrito</button>
                        <br/>
                        <table className="table">
                            <thead>
                            <tr>
                                <th >Nombre Producto</th>
                                <th >precio uni</th>
                                <th >cantidad</th>
                                <th  className="text-end">sub total</th>
                                <th className="text-center">acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {

                                cart.map(el=>(
                                    <tr key={el.id}>
                                        <td>{el.name}</td>
                                        <td>S/{el.precio}</td>
                                        <td>{el.cantidad}</td>
                                        <td className="text-end">S/{el.precio * el.cantidad} </td>
                                        <td> <button className="btn btn-danger" onClick={()=>removeItem(el.id)}> eliminar </button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td>Total</td>
                                <td colSpan="3" className="text-end">{precioTotal()}</td>
                                <td colSpan="4"> <button className="btn  text-primary">Pagar</button>  </td>
                            </tr>

                            </tbody>

                        </table>

                    </div>

                ) : (
                    <div>

                        <h6 className="text-primary">No se tiene productos seleccionados</h6>
                        <button className="btn btn-danger" onClick={()=> navigate("/")}>Ir a comprar</button>
                    </div>

                )

            }

        </>





    )
}
export default Carrito;