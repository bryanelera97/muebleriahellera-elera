

export const getProductos = async()=> {
    const resp = await fetch('http://localhost:5000/productos')
    return resp.json()
}

export const getDetalleProducto = async(id)=> {
    const resp = await fetch(`http://localhost:5000/productos?id=${id}`)
    const data = resp.json()
    return data;
}



export const getCategory = async()=>{
    const resp = await fetch('http://localhost:5000/category')
    return resp.json()
}

export const getProductCategoria = async(id)=> {
    const resp = await fetch(`http://localhost:5000/productos?category_id=${id}`)
    const data = resp.json()
    return data;
}

