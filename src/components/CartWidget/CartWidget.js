import './CartWidget.css'
import imageCart from '../../cart.png';

const CartWidget = () => {
    return (
        <div className="Cart">
            <img src={imageCart} alt='Cart'></img>
            <aside>0</aside>
        </div>
    )
}

export default CartWidget;