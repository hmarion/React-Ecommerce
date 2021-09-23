import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemCount.css';

const ItemCount = ({ stock, onConfirm, bandera }) => {
    const [count, setCount] = useState(0);
    
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
                    <button className="addCart" onClick={() => onConfirm(count)}>Agregar al Carrito</button> 
                </div>
            }
        </>
    )
}

export default ItemCount;