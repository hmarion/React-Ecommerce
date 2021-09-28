import { useState, useEffect, useContext } from "react";
import  CartContextProvider from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    const { listItem, clear } = useContext(CartContextProvider);
    const [bandera, setBandera] = useState(false)

    useEffect(() =>  {

        if(listItem === undefined){
            setBandera(false)
        }else {
            setBandera(true)
        }
        return (() => {
            setBandera(false)
        })
        
    }, [listItem])

    return (
        <>  
            { bandera ? 
                <>
                    <button className="addCart" onClick={clear}>Vaciar Carrito</button>
                    <div className="listado">
                        {listItem?.map (bebidas =>  <ItemCart key={bebidas.id} item={bebidas}/>) }
                    </div>
                </> 
            : "El Carrito esta vacio"}
        </>
    );
}

export default Cart;