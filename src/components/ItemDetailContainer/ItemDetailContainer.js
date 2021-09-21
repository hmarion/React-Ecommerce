import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const getProductos = () => {
    return new Promise((resolve, reject) => {
        const productos = [
            {id: "1", title: 'Agua Tonica Nina', price: '209', pictureUrl: './images/ninaqHibiscus.jpg', stock: 23, category: 'tonicas'},
            {id: "2", title: 'Agua Tonica P Blanco', price: '163', pictureUrl: './images/AT_pb_1s.jpg', stock: 5, category: 'tonicas'},
            {id: "3", title: 'Agua Tonica Sta Quina', price: '249', pictureUrl: './images/santaquina.jpg', stock: 10, category: 'tonicas'},
            {id: "4", title: 'Gin Ciervo', price: '1199', pictureUrl: './images/gin-ciervo-del-pantano.jpg', stock: 8, category: 'gin'},
            {id: "5", title: 'Combo Mix TonicStore + Príncipe de los apóstoles', price: '2039', pictureUrl: './images/combo1.jpg', stock: 3, category: 'combos'}
        ]
        setTimeout(() => resolve(productos), 2000)
    })
}

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [bebida, setBebida] = useState([])

    useEffect(() =>  {
        const listBebidas = getProductos()
        listBebidas.then(result => {
            const item = result.filter(producto => producto.id == id)
            console.log(item);
            console.log(id);
            setBebida(item)
        })

    }, [id])

    return (
        <ItemDetail item={bebida}/>
    )
}

export default ItemDetailContainer;