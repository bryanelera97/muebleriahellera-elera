import {CartContext} from "../CartContext/CartContext";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";



function Carrito() {

    const { cart, removeItem,cantidadTotalDeProductosCarrito, precioTotal} = useContext(CartContext)
    const navigate = useNavigate()


    return (
        <>
            {
                cantidadTotalDeProductosCarrito() > 0 ? (
                    <div className="col-10">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">nombre</th>
                                <th scope="col">precio uni</th>
                                <th scope="col">cantidad</th>
                                <th scope="col" className="text-end">sub total</th>
                                <th scope="col">acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {

                                cart.map(el=>(

                                    <tr>
                                        <th scope="row">{el.id}</th>
                                        <td>{el.name}</td>
                                        <td>{el.precio}</td>
                                        <td>{el.cantidad}</td>
                                        <td className="text-end">{el.precio * el.cantidad} </td>
                                        <td> <button className="btn btn-danger" onClick={()=>removeItem(el.id)}> eliminar </button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td>Total</td>
                                <td colSpan="4" className="text-end">{precioTotal()}</td>
                            </tr>

                            </tbody>

                        </table>

                    </div>

                ) : (
                    <div>
                        <h1>no hay productos</h1>
                        <button className="btn btn-danger" onClick={()=> navigate("/")}> Seguir comprando </button>
                    </div>

                )

            }

        </>





    )
}
export default Carrito;