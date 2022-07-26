import ItemCount from "./ItemCount";

const ItemListContainer = ({saludo})=>{

const onAdd = (cantidad)=>{
console.log(`Agregaste ${cantidad} productos en el carrito`)
}

        return (
          <div>
            <h1>{saludo}</h1>
            <ItemCount initial={1} stock={5} onAdd= {onAdd}/>
          </div>    
        );
}
export default ItemListContainer