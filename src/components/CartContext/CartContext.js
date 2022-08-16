import React, {createContext, useState} from 'react';
export const CartContext = createContext()
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (producto) => {
        if(isInCart(producto.id)){
            const actualizarCarrito = cart.map(prod=> {
                if(prod.id === producto.id){
                    return {...prod, cantidad: producto.cantidad + prod.cantidad}
                }else{
                    return prod
                }
            })
            setCart(actualizarCarrito)
        }else{
            setCart([...cart,producto])
        }
    }


    const removeItem = (itemId)=> {
        setCart(cart.filter(prod=> prod.id !== itemId))
    }
    const isInCart = (id)=> {
        return cart.some(prod => prod.id === id )
    }
    const clear = ()=> {
        setCart([])
    }
   
    const cantidadTotalDeProductosCarrito = ()=> {
        return cart.reduce((acumulador, prod) => acumulador += prod.cantidad, 0)
    }


    const precioTotal = ()=> {
        return cart.reduce((acumulador, prod) => acumulador += prod.cantidad * prod.precio, 0)
    }
    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clear,
            cantidadTotalDeProductosCarrito,
            precioTotal
        }}>

            { children }

        </CartContext.Provider>
    )
}