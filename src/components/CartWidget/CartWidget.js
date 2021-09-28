import './CartWidget.css'
import imageCart from '../../cart.png';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div className="Cart">
            <NavLink to="/cart"><img src={imageCart} alt='Cart'></img></NavLink>
            <aside>0</aside>
        </div>
    )
}

export default CartWidget;