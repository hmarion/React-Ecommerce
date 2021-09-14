import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ( props ) => {
    const [count, setCount] = useState(0);
    const [add, setAdd] = useState(0);
    
    const restarCount = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    const sumarCount = () => {
        if(count < props.stock){
            setCount(count + 1)
        }
    }

    return (
        <div className="item">
            <div className="contador">
                <button className="buttonRest" onClick={restarCount}>-</button>
                <p>{count}</p>
                <button className="buttonPlus" onClick={sumarCount}>+</button>
            </div>
            <button className="addCart" onClick={() => count > 0 ? setAdd(count + " Items") : setAdd("")}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;