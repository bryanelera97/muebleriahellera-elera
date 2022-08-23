import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { CartContext } from '../CartContext/CartContext';

const Checkout = () => {
    const [comprador, setComprador] = useState({})
    const [orderId, setOrderId] = useState()
    const {cart, precioTotal, clear} = useContext(CartContext)

    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if (Object.values(comprador).length !== 3) {
            alert("Todos los campos son obligatorios")
        } else {
            const ventasCollection = collection(db, "ventas")
            addDoc(ventasCollection, {
                comprador,
                items: cart,
                total: precioTotal(),
                date: serverTimestamp()
            })
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => console.log(error))
        }
    }

    return (
        <>
            {!orderId
                ?
                <div className='container'>
                    <form onSubmit={finalizarCompra}>
                        <h2 className='mt-4 mb-4'>Checkout</h2>
                        <div className="mb-3">
                            <label htmlFor='name' className="form-label"><b>Nombre Completo</b></label>
                            <input type="text" className="form-control" id="name" name='name' onChange={datosComprador} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='telefono' className="form-label"><b>Número de télefono</b></label>
                            <input type="number" className="form-control" id="telefono" name='telefono' onChange={datosComprador} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='email' className="form-label"><b>Correo Electrónico</b></label>
                            <input type="email" className="form-control" id="email" name='email' onChange={datosComprador} />
                        </div>
                        <button type="submit" className="btn btn-success">Finalizar Compra</button>
                    </form>
                </div>
                :
                <div className='container mt-5 text-center finalizar-compra'>
                    <h2>¡Muchas gracias por su compra!</h2>
                    <h3>Su orden es: <b className='bg-success text-white'>{orderId}</b></h3>
                    <div>
                        <img src="https://c.tenor.com/vSMJ8wlD4EgAAAAC/gracias-por-su-compra-colibrynk.gif" alt="400px" width="550px"></img>
                    </div>
                    <Link className="btn btn-success" to="/">Volver al la página principal</Link>
                </div>
            }
        </>
    )
}

export default Checkout;