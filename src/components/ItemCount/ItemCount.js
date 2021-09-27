import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './ItemCount.css';
import CartContext from "../../context/CartContext";

const ItemCount = ({ item, stock, bandera }) => {
    const [count, setCount] = useState(0);
    const { addItem } = useContext(CartContext)

    
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

    return (
        <>
            { bandera ? 
                <Link to="/cart"><button className="addCart">Finalizar</button></Link> : 
                <div className="item">
                    <div className="contador">
                        <button className="buttonRest" onClick={restarCount}>-</button>
                        <p>{count}</p>
                        <button className="buttonPlus" onClick={sumarCount}>+</button>
                    </div>    
                    <button className="addCart" onClick={newItem}>Agregar al Carrito</button> 
                </div>
            }
        </>
    )
}

export default ItemCount;