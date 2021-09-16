import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import image4 from '../../gin-ciervo-del-pantano.jpg';

const bebida = {id: '4', title: 'Gin Ciervo', price: '1199', pictureUrl: {image4}, stock: 8}

function getItem(){
    return new Promise((result, reject) => {            
        setTimeout(() => result(bebida), 3000)
    })
}

const ItemDetailContainer = () => {
    const [bebida1, setBebida] = useState([])

    useEffect(() =>  {
        const item = getItem()

        item.then(item => {
            setBebida(item)
        })
    }, [])

    return (
        <div>
            <ItemDetail title={bebida1.title} img={bebida1.pictureUrl} price={bebida1.price} stock={bebida1.stock}/>
        </div>
    );
}

export default ItemDetailContainer;