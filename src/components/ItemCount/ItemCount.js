import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './ItemCount.css';
import  CartContextProvider from "../../context/CartContext";

const ItemCount = ({ item, stock, button }) => {
    const [count, setCount] = useState(0);
    const { addItem, isInCart } = useContext(CartContextProvider);
    
    const restarCount = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    const sumarCount = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const newItem = () => {
        addItem(item, count)
    }

    if(isInCart(item.id) && button==="Agregar al Carrito"){
        return <Link to="/cart"><button className="addCart">Finalizar</button></Link>
    }

    return (
        <div className="item">
            <div className="contador">
                <button className="buttonRest" onClick={restarCount}>-</button>
                <p>{count}</p>
                <button className="buttonPlus" onClick={sumarCount}>+</button>
            </div>    
            <button className="addCart" onClick={newItem}>{button}</button> 
        </div>
    )
}

export default ItemCount;