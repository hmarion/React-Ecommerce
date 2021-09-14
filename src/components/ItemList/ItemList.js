import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import image1 from '../../ninaqHibiscus.jpg';
import image2 from '../../AT_pb_1s.jpg';
import image3 from '../../santaquina.jpg';
import image4 from '../../gin-ciervo-del-pantano.jpg';
import './ItemList.css'

const productos = [
    {id: '1', title: 'Agua Tonica Nina', price: '209', pictureUrl: {image1}, stock: 23},
    {id: '2', title: 'Agua Tonica P Blanco', price: '163', pictureUrl: {image2}, stock: 5},
    {id: '3', title: 'Agua Tonica Sta Quina', price: '249', pictureUrl: {image3}, stock: 10},
    {id: '4', title: 'Gin Ciervo', price: '1199', pictureUrl: {image4}, stock: 8}
]

function getList(){
    return new Promise((result, reject) => {
        setTimeout(() => result(productos), 2000)
    })
}

const ItemList = () => {
    const [listBebidas, setListBebidas] = useState([])
    
    useEffect(() =>  {
        const list = getList()

        list.then(list => {
            setListBebidas(list)
        })
    }, [])
    

    return (
        <div className="listado">
            { listBebidas.map (bebidas =>  <Item key={bebidas.id} title={bebidas.title} img={bebidas.pictureUrl} price={bebidas.price} stock={bebidas.stock}/>) }
        </div>
    );
}

export default ItemList;

