import { AiOutlineShoppingCart } from "react-icons/ai";
import {useContext} from "react";
import {CartContext} from "../CartContext/CartContext";
import {Link} from "react-router-dom";

const StyledIcon={color:"white",fontSize:"1.8em"};


function CartWidget() {

    const {cantidadTotalDeProductosCarrito} = useContext(CartContext)
    return (
        <>
            {
              cantidadTotalDeProductosCarrito() > 0 ? (
                  <Link to="/carrito">

                      <AiOutlineShoppingCart style={StyledIcon}/>
                      {
                          cantidadTotalDeProductosCarrito()
                      }
                  </Link>
              ) : " "
            }
        </>

    );
}
export default CartWidget;