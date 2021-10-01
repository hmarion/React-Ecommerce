import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import  CartContextProvider from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    const { listItem, clear, getTotalPrice } = useContext(CartContextProvider);
    const [price, setPrice] = useState(0)

    useEffect(() =>  {
        setPrice(getTotalPrice())
    }, [getTotalPrice])

    return (
        <>  
            { price !== 0 ? 
                <>
                    <h1>Total de la Compra: ${price}</h1>
                    <button className="addCart" onClick={clear}>Vaciar Carrito</button>
                    <NavLink to="/"><button className="addCart">Seguir comprando</button></NavLink>
                    <div className="listado">
                        {listItem?.map (bebidas =>  <ItemCart key={bebidas.id} item={bebidas}/>) }
                    </div>
                </> 
            :   <>
                    <h1>"El Carrito esta vacio"</h1>
                    <NavLink to="/"><button className="addCart" onClick={clear}>Volver al Inicio</button></NavLink>
                </>}
        </>
    );
}

export default Cart;