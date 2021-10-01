import './CartWidget.css'
import imageCart from '../../cart.png';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import  CartContextProvider from "../../context/CartContext";


const CartWidget = () => {
    const { getQuantity } = useContext(CartContextProvider);

    return (
        <div className="Cart">
            <NavLink to="/cart"><img src={imageCart} alt='Cart'></img></NavLink>
            <aside>{getQuantity()}</aside>
        </div>
    )
}

export default CartWidget;