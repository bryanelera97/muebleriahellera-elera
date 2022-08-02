

export const getProductos = async()=> {
    const resp = await fetch('http://localhost:5000/productos')
    return resp.json()
}

export const getDetalleProducto = async()=> {
    const resp = await fetch(`http://localhost:5000/productos?id=1`)
    const data = resp.json()
    return data;
}
