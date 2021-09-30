import './CartWidget.css'
import imageCart from '../../cart.png';
import { NavLink } from 'react-router-dom';
import  CartContextProvider from "../../context/CartContext";
import { useContext, useEffect, useState } from 'react';

const CartWidget = () => {
    const { getQuantity, listItem } = useContext(CartContextProvider);
    const [quantity, setQuantity] = useState()
    
    useEffect(() =>  {
        setQuantity(getQuantity())
        
        return (() => {
            setQuantity(0)
        })
        
    }, [listItem])

    return (
        <div className="Cart">
            <NavLink to="/cart"><img src={imageCart} alt='Cart'></img></NavLink>
            <aside>{quantity}</aside>
        </div>
    )
}

export default CartWidget;