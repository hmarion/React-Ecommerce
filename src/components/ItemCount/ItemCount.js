import { useState } from 'react';
import logo from '../../logo.svg';
import './ItemCount.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const ItemCount = () => {
    const stock = '15'
    const [count, setCount] = useState(0);
    const [add, setAdd] = useState(0);
    
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
        <div className="item">
            <img src={logo} className="card-img-top" alt="correo cor cordoba"></img>
            <div className="contador">
                <button onClick={sumarCount}>+</button>
                <p>{count}</p>
                <button onClick={restarCount}>-</button>
            </div>
            <div className="card-body">
                <p className="card-text">Logo react</p>
            </div>
            <button onClick={() => count > 0 ? setAdd(count + " Items") : setAdd("")}>Agregar al Carrito</button>
            <ItemListContainer greetings={add}/>
        </div>
    )
}

export default ItemCount;